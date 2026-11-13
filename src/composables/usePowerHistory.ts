import { onMounted, shallowRef, triggerRef, watch, type Ref, type ShallowRef } from "vue";
import type { EntityKey, HomeAssistant, Point, ResolvedConfig } from "../types";
import type { EntityHelpers } from "./useEntities";

export interface PowerSeries {
  /** import power, kW */
  c: Point[];
  /** export power, kW */
  p: Point[];
}

interface HistoryState { s?: string; state?: string; lu?: number; last_updated?: string; last_changed?: string }

const KEYS: Record<keyof PowerSeries, EntityKey> = { c: "power_consumption", p: "power_production" };

/**
 * Import/export power over the last `history_hours`: seeded from the recorder
 * history on mount, then extended with every live change.
 */
export function usePowerHistory(opts: {
  hass: () => HomeAssistant;
  config: () => ResolvedConfig;
  ent: EntityHelpers;
  now: Ref<number>;
  consumption: Ref<number>;
  production: Ref<number>;
}): ShallowRef<PowerSeries> {
  const { hass, config, ent, now } = opts;
  const series = shallowRef<PowerSeries>({ c: [], p: [] });
  const windowStart = () => now.value - config().history_hours * 3600e3 - 60e3;

  watch([opts.consumption, opts.production], ([c, p]) => {
    const ts = Date.now();
    series.value.c.push([ts, c]);
    series.value.p.push([ts, p]);
    triggerRef(series);
  }, { immediate: true });

  watch(now, () => {
    const from = windowStart();
    const s = series.value;
    if (s.c[0]?.[0] < from || s.p[0]?.[0] < from) {
      series.value = { c: s.c.filter(([ts]) => ts >= from), p: s.p.filter(([ts]) => ts >= from) };
    }
  });

  onMounted(async () => {
    const ids = Object.values(KEYS).filter((k) => ent.has(k)).map((k) => ent.id(k));
    if (!ids.length) return;
    try {
      const res = await hass().callWS<Record<string, HistoryState[]>>({
        type: "history/history_during_period",
        start_time: new Date(Date.now() - config().history_hours * 3600e3).toISOString(),
        entity_ids: ids, minimal_response: true, no_attributes: true, significant_changes_only: false,
      });
      const next = { ...series.value };
      for (const [k, key] of Object.entries(KEYS) as [keyof PowerSeries, EntityKey][]) {
        const rows = res?.[ent.id(key)];
        if (!rows) continue;
        const f = ent.kwFactor(key);
        const pts = rows
          .map((s): Point => [s.lu ? s.lu * 1000 : Date.parse(s.last_updated ?? s.last_changed ?? ""), parseFloat(s.s ?? s.state ?? "") * f])
          .filter(([ts, v]) => !isNaN(ts) && !isNaN(v));
        next[k] = [...pts, ...next[k]].sort((a, b) => a[0] - b[0]);
      }
      series.value = next;
    } catch (e) {
      console.warn("fluvius-meter-card: history unavailable", e);
    }
  });

  return series;
}
