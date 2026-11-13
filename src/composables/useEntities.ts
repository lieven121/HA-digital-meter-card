import type { EntityKey, HassEntity, HomeAssistant, ResolvedConfig } from "../types";

export interface EntityHelpers {
  /** configured entity id for a key ("" = disabled) */
  id(key: EntityKey): string;
  state(key: EntityKey): HassEntity | undefined;
  /** configured and present in Home Assistant */
  has(key: EntityKey): boolean;
  num(key: EntityKey): number | null;
  unit(key: EntityKey): string | null;
  /** numeric value normalised to kW (W sensors are divided by 1000) */
  kw(key: EntityKey): number | null;
  /** factor that converts this sensor's values to kW */
  kwFactor(key: EntityKey): number;
}

/**
 * Entity accessors. They read through the getters on every call, so when used
 * inside a computed or template they track the reactive `hass` / `config`.
 */
export function useEntities(hass: () => HomeAssistant, config: () => ResolvedConfig): EntityHelpers {
  const id = (key: EntityKey) => config().entities[key];
  const state = (key: EntityKey) => {
    const e = id(key);
    return e ? hass().states[e] : undefined;
  };
  const num = (key: EntityKey) => {
    const s = state(key);
    if (!s) return null;
    const v = parseFloat(s.state);
    return isNaN(v) ? null : v;
  };
  const unit = (key: EntityKey) => state(key)?.attributes.unit_of_measurement ?? null;
  const kwFactor = (key: EntityKey) => (unit(key) === "W" ? 1 / 1000 : 1);
  const kw = (key: EntityKey) => {
    const v = num(key);
    return v == null ? null : v * kwFactor(key);
  };
  return { id, state, has: (key) => !!state(key), num, unit, kw, kwFactor };
}
