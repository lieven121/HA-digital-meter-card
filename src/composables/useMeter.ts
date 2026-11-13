import { computed, inject, provide, watch, type ComputedRef, type InjectionKey, type Ref, type ShallowRef } from "vue";
import { TICK_MS } from "../const";
import { strings, type Strings } from "../i18n";
import { formatNumber } from "../logic/format";
import type { EntityKey, HomeAssistant, ResolvedConfig } from "../types";
import { useClock } from "./useClock";
import { useEntities, type EntityHelpers } from "./useEntities";
import { usePowerHistory, type PowerSeries } from "./usePowerHistory";
import { useStatistics, type Statistics } from "./useStatistics";

export type FlowMode = "import" | "export" | "idle";

/** Everything the card sections share; provided by MeterCard, injected with useMeter(). */
export interface MeterContext {
  config: ComputedRef<ResolvedConfig>;
  t: ComputedRef<Strings>;
  ent: EntityHelpers;
  fmt(v: number | null | undefined, decimals?: number): string;
  /** advances every TICK_MS and on every hass update */
  now: Ref<number>;
  power: {
    consumption: ComputedRef<number>;
    production: ComputedRef<number>;
    /** import − export, kW */
    net: ComputedRef<number>;
    mode: ComputedRef<FlowMode>;
  };
  history: ShallowRef<PowerSeries>;
  stats: Statistics;
}

const KEY: InjectionKey<MeterContext> = Symbol("fluvius-meter");

export function provideMeter(props: { hass: HomeAssistant; config: ResolvedConfig }): MeterContext {
  const hass = () => props.hass;
  const config = computed(() => props.config);
  const t = computed(() => strings(config.value.language));
  const ent = useEntities(hass, () => config.value);
  const fmt = (v: number | null | undefined, d = 2) => formatNumber(v, d, t.value.locale);

  const { now, touch } = useClock(TICK_MS);
  watch(hass, touch);

  const consumption = computed(() => ent.kw("power_consumption") || 0);
  const production = computed(() => ent.kw("power_production") || 0);
  const net = computed(() => consumption.value - production.value);
  const mode = computed<FlowMode>(() =>
    Math.abs(net.value) < 0.01 ? "idle" : net.value > 0 ? "import" : "export");

  const history = usePowerHistory({ hass, config: () => config.value, ent, now, consumption, production });
  const stats = useStatistics({
    hass, config: () => config.value, ent, now,
    current: computed(() => ent.kw("current_average_demand")),
  });

  const ctx: MeterContext = {
    config, t, ent, fmt, now,
    power: { consumption, production, net, mode },
    history, stats,
  };
  provide(KEY, ctx);
  return ctx;
}

export function useMeter(): MeterContext {
  const ctx = inject(KEY);
  if (!ctx) throw new Error("useMeter() used outside of MeterCard");
  return ctx;
}

/** Fire Home Assistant's more-info dialog for an entity key. */
export function openMoreInfo(from: EventTarget, ent: EntityHelpers, key: EntityKey): void {
  if (!ent.has(key)) return;
  from.dispatchEvent(new CustomEvent("hass-more-info", {
    detail: { entityId: ent.id(key) }, bubbles: true, composed: true,
  }));
}
