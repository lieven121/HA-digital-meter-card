import { describe, expect, it } from "vitest";
import { DEFAULT_ENTITIES, DEFAULT_OPTIONS } from "../src/const";
import { editorStrings } from "../src/i18n";
import { fieldLabel, fromFormData, toFormData } from "../src/editor/schema";

describe("editor form data", () => {
  it("fills in all defaults for an empty config", () => {
    expect(toFormData({})).toEqual({ ...DEFAULT_OPTIONS, ...DEFAULT_ENTITIES });
  });

  it("writes back only values that differ from the defaults", () => {
    const data = { ...toFormData({}), fuse_amps: 40, water: "sensor.water", gas: undefined };
    expect(fromFormData("custom:fluvius-meter-card", data)).toEqual({
      type: "custom:fluvius-meter-card",
      fuse_amps: 40,
      // a cleared default entity is stored as "" (disabled)
      entities: { water: "sensor.water", gas: "" },
    });
  });

  it("round-trips a config", () => {
    const cfg = { type: "custom:fluvius-meter-card", language: "en" as const, entities: { peak_today: "sensor.peak" } };
    expect(fromFormData(cfg.type, toFormData(cfg))).toEqual(cfg);
  });
});

describe("fieldLabel", () => {
  const L = editorStrings("en");
  it("uses translated labels, including per-phase fields", () => {
    expect(fieldLabel(L, "fuse_amps")).toBe("Fuse per phase (A)");
    expect(fieldLabel(L, "power_prod_l2")).toBe("Power export L2");
    expect(fieldLabel(L, "unknown")).toBe("unknown");
  });
});
