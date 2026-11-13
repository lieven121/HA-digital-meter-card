import type { Point } from "../types";

/**
 * Time-weighted average of a step series (value holds until the next point)
 * over the last `windowMs` before `now`. Returns `fallback` when there is no data.
 */
export function recentAverage(pts: readonly Point[], windowMs: number, now: number, fallback = 0): number {
  const from = now - windowMs;
  let sum = 0, t: number | null = null, v: number | null = null;
  for (const [ts, val] of pts) {
    if (ts <= from) { v = val; t = from; continue; }
    if (v != null && t != null) sum += v * (ts - t);
    t = ts; v = val;
  }
  if (v == null || t == null) return fallback;
  sum += v * (now - t);
  const start = pts[0][0] > from ? pts[0][0] : from;
  return now - start > 0 ? sum / (now - start) : v;
}

export interface SparkGeometry {
  width: number;
  height: number;
  pad: number;
  t0: number;
  now: number;
  /** value mapped to the top of the chart */
  max: number;
}

/** Step-line path and the matching closed area path for an SVG sparkline. */
export function stepPaths(pts: readonly Point[], g: SparkGeometry): { line: string; area: string } {
  if (!pts.length) return { line: "", area: "" };
  const x = (ts: number) => Math.max(0, ((ts - g.t0) / (g.now - g.t0)) * g.width);
  const y = (v: number) => g.height - g.pad - (v / g.max) * (g.height - g.pad * 2);
  let d = `M${x(pts[0][0])},${y(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) d += `H${x(pts[i][0])}V${y(pts[i][1])}`;
  d += `H${g.width}`;
  return { line: d, area: `${d}V${g.height}H${x(pts[0][0])}Z` };
}

export interface StatisticRow {
  start: number | string;
  change?: number | null;
  max?: number | null;
}

/** Sum positive `change` values of statistics rows into `n` buckets of `stepMs` from `start`. */
export function bucketChanges(rows: readonly StatisticRow[], start: number, stepMs: number, n: number): number[] {
  const bars = new Array<number>(n).fill(0);
  for (const row of rows) {
    const ts = typeof row.start === "number" ? row.start : Date.parse(row.start);
    const i = Math.floor((ts - start) / stepMs);
    if (i >= 0 && i < n && row.change != null && row.change > 0) bars[i] += row.change;
  }
  return bars;
}
