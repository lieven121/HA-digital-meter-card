/*
 * Belgian capacity tariff: the bill is based on the highest quarter-hour average
 * import power of the month (with a minimum). The meter's "current average demand"
 * is energy-so-far / 15 min, so the value at the end of the quarter is
 *   current + (import power for the rest of the quarter × remaining fraction).
 */

export const QUARTER_MS = 15 * 60e3;

export type CapacityLevel = "ok" | "warn" | "over";

export type CapacityHint =
  | { kind: "new_peak" }
  | { kind: "fc_over"; value: number }  // stay below `value` kW for the rest of the quarter
  | { kind: "fc_min"; value: number }   // below the billed minimum of `value` kW
  | { kind: "fc_room"; value: number }; // up to `value` kW possible for the rest of the quarter

export interface CapacityInput {
  now: number;
  /** current quarter-hour average, kW */
  current: number | null;
  /** highest quarter of this month, kW */
  peak: number | null;
  /** minimum billed capacity, kW */
  minimum: number;
  /** recent average import power, kW */
  recentImport: number;
}

export interface CapacityState {
  /** fraction of the quarter that has passed (quarters are aligned to :00/:15/:30/:45) */
  elapsed: number;
  remaining: number;
  /** the peak this quarter is compared against */
  reference: number;
  forecast: number | null;
  pct: number;
  pctForecast: number;
  level: CapacityLevel;
  hint: CapacityHint | null;
}

export function computeCapacity({ now, current, peak, minimum, recentImport }: CapacityInput): CapacityState {
  const elapsed = (now % QUARTER_MS) / QUARTER_MS;
  const remaining = 1 - elapsed;
  const reference = Math.max(peak ?? 0, minimum);
  const forecast = current != null ? current + recentImport * remaining : null;
  const pct = current != null ? current / reference : 0;
  const pctForecast = forecast != null ? forecast / reference : 0;
  const level: CapacityLevel = pctForecast >= 1 ? "over" : pctForecast >= 0.8 ? "warn" : "ok";

  let hint: CapacityHint | null = null;
  if (current != null && forecast != null) {
    // max. average import power for the rest of the quarter to end exactly at the reference peak
    const allowed = remaining > 0.01 ? Math.max(0, (reference - current) / remaining) : 0;
    if (pct >= 1 && current > minimum) hint = { kind: "new_peak" };
    else if (pctForecast >= 1) hint = { kind: "fc_over", value: allowed };
    else if (forecast < minimum && (peak ?? 0) < minimum) hint = { kind: "fc_min", value: minimum };
    else hint = { kind: "fc_room", value: allowed };
  }

  return { elapsed, remaining, reference, forecast, pct, pctForecast, level, hint };
}

/** "m:ss" elapsed in the current quarter. */
export function quarterClock(elapsed: number): string {
  const mm = Math.floor(elapsed * 15);
  const ss = Math.floor((elapsed * 15 - mm) * 60);
  return `${mm}:${String(ss).padStart(2, "0")}`;
}
