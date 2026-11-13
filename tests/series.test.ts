import { describe, expect, it } from "vitest";
import { bucketChanges, recentAverage, stepPaths } from "../src/logic/series";
import type { Point } from "../src/types";

describe("recentAverage", () => {
  it("returns the fallback without data", () => {
    expect(recentAverage([], 60e3, 1000, 3)).toBe(3);
  });

  it("weights each value by how long it held", () => {
    // 1 kW for 30 s, then 3 kW for 30 s → 2 kW
    const pts: Point[] = [[0, 1], [30e3, 3]];
    expect(recentAverage(pts, 60e3, 60e3)).toBeCloseTo(2);
  });

  it("carries the last value from before the window into it", () => {
    // 2 kW since long ago, 4 kW for the last 15 s of a 60 s window → 2.5 kW
    const pts: Point[] = [[0, 2], [145e3, 4]];
    expect(recentAverage(pts, 60e3, 160e3)).toBeCloseTo(2.5);
  });

  it("averages over the available span when the data is younger than the window", () => {
    const pts: Point[] = [[50e3, 1], [55e3, 3]];
    expect(recentAverage(pts, 60e3, 60e3)).toBeCloseTo(2);
  });
});

describe("stepPaths", () => {
  const g = { width: 100, height: 10, pad: 0, t0: 0, now: 100, max: 10 };

  it("is empty without points", () => {
    expect(stepPaths([], g)).toEqual({ line: "", area: "" });
  });

  it("draws horizontal-then-vertical steps and closes the area", () => {
    const { line, area } = stepPaths([[0, 0], [50, 10]], g);
    expect(line).toBe("M0,10H50V0H100");
    expect(area).toBe("M0,10H50V0H100V10H0Z");
  });
});

describe("bucketChanges", () => {
  it("sums positive changes per bucket and ignores out-of-range rows", () => {
    const rows = [
      { start: 0, change: 1 }, { start: 100, change: 2 }, { start: 150, change: -1 },
      { start: 250, change: 5 }, { start: -100, change: 9 }, { start: new Date(200).toISOString(), change: 0.5 },
    ];
    expect(bucketChanges(rows, 0, 100, 3)).toEqual([1, 2, 5.5]);
  });
});
