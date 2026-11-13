import { describe, expect, it } from "vitest";
import { computeCapacity, QUARTER_MS, quarterClock } from "../src/logic/capacity";

// a timestamp `fraction` of the way into a quarter hour
const QUARTER_START = 1_888_888 * QUARTER_MS;
const at = (fraction: number) => QUARTER_START + fraction * QUARTER_MS;

describe("computeCapacity", () => {
  it("forecasts current + recent power × remaining fraction", () => {
    const s = computeCapacity({ now: at(0.5), current: 1, peak: 4, minimum: 2.5, recentImport: 2 });
    expect(s.elapsed).toBeCloseTo(0.5);
    expect(s.forecast).toBeCloseTo(2);
    expect(s.reference).toBe(4);
    expect(s.level).toBe("ok");
    // (4 − 1) / 0.5 = 6 kW allowed for the rest of the quarter
    expect(s.hint).toEqual({ kind: "fc_room", value: 6 });
  });

  it("uses the minimum as reference when the month peak is lower", () => {
    const s = computeCapacity({ now: at(0.5), current: 0.5, peak: 1, minimum: 2.5, recentImport: 0 });
    expect(s.reference).toBe(2.5);
    expect(s.hint).toEqual({ kind: "fc_min", value: 2.5 });
  });

  it("warns when the forecast exceeds the peak", () => {
    const s = computeCapacity({ now: at(0.5), current: 3, peak: 4, minimum: 2.5, recentImport: 4 });
    expect(s.forecast).toBeCloseTo(5);
    expect(s.level).toBe("over");
    expect(s.hint?.kind).toBe("fc_over");
  });

  it("flags a new peak once the current quarter already passed it", () => {
    const s = computeCapacity({ now: at(0.9), current: 4.2, peak: 4, minimum: 2.5, recentImport: 1 });
    expect(s.hint).toEqual({ kind: "new_peak" });
  });

  it("has no forecast or hint without a current value", () => {
    const s = computeCapacity({ now: at(0.2), current: null, peak: 4, minimum: 2.5, recentImport: 1 });
    expect(s.forecast).toBeNull();
    expect(s.hint).toBeNull();
    expect(s.pct).toBe(0);
  });
});

describe("quarterClock", () => {
  it("formats elapsed time in the quarter", () => {
    expect(quarterClock(0)).toBe("0:00");
    expect(quarterClock(0.5)).toBe("7:30");
    expect(quarterClock(14 / 15 + 5 / 900)).toBe("14:05");
  });
});
