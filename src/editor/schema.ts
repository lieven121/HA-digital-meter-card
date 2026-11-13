import { DEFAULT_ENTITIES, DEFAULT_OPTIONS } from "../const";
import type { EditorStrings } from "../i18n";
import type { CardConfig, CardOptions, EntityKey, EntityMap, Phase } from "../types";

/* Subset of the ha-form schema format used by this editor. */
export type HaFormSchema =
  | { name: string; selector: Record<string, unknown> }
  | { type: "grid"; name: string; schema: HaFormSchema[] }
  | { type: "expandable"; flatten?: boolean; expanded?: boolean; title: string; icon?: string; schema: HaFormSchema[] };

/** ha-form works on one flat object: options and entities side by side. */
export type FormData = CardOptions & EntityMap;

const ent = (name: EntityKey): HaFormSchema => ({ name, selector: { entity: { domain: "sensor" } } });

const num = (name: keyof CardOptions, min: number, max: number, step: number, unit: string | null, mode = "box"): HaFormSchema =>
  ({ name, selector: { number: { min, max, step, mode, ...(unit ? { unit_of_measurement: unit } : {}) } } });

const section = (title: string, icon: string, schema: HaFormSchema[], expanded = false): HaFormSchema =>
  ({ type: "expandable", flatten: true, expanded, title, icon, schema });

const phase = (L: EditorStrings, n: Phase) =>
  section(`${L.s_phase} L${n}`, "mdi:sine-wave",
    [ent(`voltage_l${n}`), ent(`current_l${n}`), ent(`power_l${n}`), ent(`power_prod_l${n}`)]);

export function buildSchema(L: EditorStrings): HaFormSchema[] {
  return [
    section(L.s_general, "mdi:cog", [
      { name: "title", selector: { text: {} } },
      { name: "language", selector: { select: { mode: "dropdown", options: [
        { value: "nl", label: "Nederlands" }, { value: "en", label: "English" }] } } },
      { type: "grid", name: "", schema: [
        num("fuse_amps", 6, 100, 1, "A"),
        num("amp_warn", 0.5, 1, 0.05, null, "slider"),
        num("capacity_min", 0, 20, 0.1, "kW"),
        num("max_power", 1, 50, 0.5, "kW"),
        num("history_hours", 1, 24, 1, "h"),
      ] },
    ], true),
    section(L.s_power, "mdi:flash", [ent("power_consumption"), ent("power_production"), ent("active_tariff")]),
    section(L.s_capacity, "mdi:chart-bell-curve",
      [ent("current_average_demand"), ent("maximum_demand"), ent("peak_today"), ent("peak_average")]),
    section(L.s_energy, "mdi:counter",
      [ent("consumption_day"), ent("consumption_night"), ent("production_day"), ent("production_night")]),
    section(L.s_utilities, "mdi:water", [ent("gas"), ent("water")]),
    phase(L, 1), phase(L, 2), phase(L, 3),
  ];
}

export function fieldLabel(L: EditorStrings, name: string | undefined): string {
  if (name && name in L) return L[name as keyof EditorStrings];
  const m = /^(voltage|current|power_prod|power)_l(\d)$/.exec(name ?? "");
  return m ? `${L[m[1] as keyof EditorStrings]} L${m[2]}` : name ?? "";
}

/** Card config → flat form data, with defaults filled in. */
export function toFormData(config: CardConfig): FormData {
  const { entities, type: _type, ...opts } = config;
  return { ...DEFAULT_OPTIONS, ...opts, ...DEFAULT_ENTITIES, ...(entities ?? {}) };
}

/** Flat form data → minimal card config: only values that differ from the defaults are written. */
export function fromFormData(type: string, data: Partial<FormData>): CardConfig {
  const v = data as Partial<Record<string, unknown>>;
  const cfg: Record<string, unknown> = { type };
  for (const [k, def] of Object.entries(DEFAULT_OPTIONS)) {
    if (v[k] !== undefined && v[k] !== "" && v[k] !== def) cfg[k] = v[k];
  }
  const entities: Partial<EntityMap> = {};
  for (const [k, def] of Object.entries(DEFAULT_ENTITIES) as [EntityKey, string][]) {
    const val = (v[k] as string | undefined) || "";   // cleared field → "" (= disabled)
    if (val !== def) entities[k] = val;
  }
  if (Object.keys(entities).length) cfg.entities = entities;
  return cfg as CardConfig;
}
