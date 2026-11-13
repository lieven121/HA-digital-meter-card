import { reactive, ref, watch, type Ref } from "vue";
import { STATS_REFRESH_MS } from "../const";
import { bucketChanges, type StatisticRow } from "../logic/series";
import type { EntityKey, HomeAssistant, ResolvedConfig, Utility } from "../types";
import type { EntityHelpers } from "./useEntities";

const TODAY_KEYS = ["consumption_day", "consumption_night", "production_day", "production_night", "gas", "water"] as const;
type TodayKey = (typeof TODAY_KEYS)[number];

const UTILITIES: Utility[] = ["gas", "water"];
const MINI_STEP_MS = 5 * 60e3;

export interface Statistics {
  /** change since midnight per meter reading */
  today: Partial<Record<TodayKey, number | null>>;
  /** 5-minute consumption buckets over the chart window */
  mini: Partial<Record<Utility, number[]>>;
  /** highest quarter-hour average today, kW (statistics + live tracking) */
  peakToday: Ref<number | null>;
}

/**
 * Recorder statistics, refreshed at most every STATS_REFRESH_MS while `hass` updates.
 * `current` is the live quarter-hour average, used to keep `peakToday` up to date.
 */
export function useStatistics(opts: {
  hass: () => HomeAssistant;
  config: () => ResolvedConfig;
  ent: EntityHelpers;
  now: Ref<number>;
  current: Ref<number | null>;
}): Statistics {
  const { hass, config, ent } = opts;
  const today = reactive<Statistics["today"]>({});
  const mini = reactive<Statistics["mini"]>({});
  const peakToday = ref<number | null>(null);
  const raisePeak = (v: number) => { peakToday.value = Math.max(peakToday.value ?? 0, v); };

  let day = new Date().toDateString();
  watch([opts.current, opts.now], ([cur]) => {
    const d = new Date().toDateString();
    if (d !== day) { day = d; peakToday.value = null; }
    if (cur != null) raisePeak(cur);
  }, { immediate: true });

  async function fetchToday() {
    await Promise.all(TODAY_KEYS.filter((k) => ent.has(k)).map(async (k) => {
      try {
        const r = await hass().callWS<{ change?: number | null } | null>({
          type: "recorder/statistic_during_period",
          statistic_id: ent.id(k), calendar: { period: "day" }, types: ["change"],
        });
        today[k] = r?.change ?? null;
      } catch {
        today[k] = null;
      }
    }));
  }

  async function fetchPeakToday() {
    const key: EntityKey = "current_average_demand";
    if (ent.has("peak_today") || !ent.has(key)) return;
    const id = ent.id(key);
    const midnight = new Date();
    midnight.setHours(0, 0, 0, 0);
    try {
      const r = await hass().callWS<Record<string, StatisticRow[]>>({
        type: "recorder/statistics_during_period", start_time: midnight.toISOString(),
        statistic_ids: [id], period: "5minute", types: ["max"],
      });
      const rows = r?.[id] ?? [];
      const max = Math.max(0, ...rows.map((x) => x.max).filter((v): v is number => v != null));
      if (rows.length) raisePeak(max * ent.kwFactor(key));
    } catch {
      /* no statistics – live tracking only */
    }
  }

  async function fetchMini() {
    const keys = UTILITIES.filter((k) => ent.has(k));
    if (!keys.length) return;
    const end = Math.floor(Date.now() / MINI_STEP_MS) * MINI_STEP_MS;
    const start = end - config().history_hours * 3600e3;
    const n = Math.round((end - start) / MINI_STEP_MS);
    try {
      const r = await hass().callWS<Record<string, StatisticRow[]>>({
        type: "recorder/statistics_during_period", start_time: new Date(start).toISOString(),
        statistic_ids: keys.map((k) => ent.id(k)), period: "5minute", types: ["change"],
      });
      for (const k of keys) mini[k] = bucketChanges(r?.[ent.id(k)] ?? [], start, MINI_STEP_MS, n);
    } catch (e) {
      console.warn("fluvius-meter-card: statistics unavailable", e);
    }
  }

  let fetchedAt = 0;
  watch(hass, () => {
    if (Date.now() - fetchedAt <= STATS_REFRESH_MS) return;
    fetchedAt = Date.now();
    void Promise.all([fetchToday(), fetchPeakToday(), fetchMini()]);
  }, { immediate: true });

  return { today, mini, peakToday };
}
