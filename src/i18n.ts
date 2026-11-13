import type { Language } from "./types";

/* ── card ─────────────────────────────────────────────── */

const nl = {
  locale: "nl-BE", title: "Digitale meter", day_tariff: "Dagtarief", night_tariff: "Nachttarief",
  importing: "Afname van het net", exporting: "Injectie op het net", idle: "In balans met het net",
  capacity: "Capaciteitstarief", quarter: "Kwartier nu", peak: "Maandpiek", avg13: "Gem. 13 maanden",
  new_peak: "Je zet een nieuwe maandpiek!", margin: "Nog {x} kW marge tot je piek",
  min_billed: "Gefactureerd aan minimum {x} kW", today: "Vandaag",
  forecast: "Verwacht einde kwartier", peak_today: "Piek vandaag", q_time: "{m} / 15′",
  fc_over: "Verwacht nieuwe piek – blijf onder {x} kW tot het einde van dit kwartier",
  fc_room: "Nog tot {x} kW mogelijk de rest van dit kwartier", fc_min: "Onder minimum {x} kW – geen impact",
  last2h: "{h} u", last: "Laatste {h} u",
  day: "Dag", night: "Nacht", gas: "Gas", water: "Water", grid: "Net", fuse: "zekering {x} A",
  totals: "Meterstanden", cons: "Afname", prod: "Injectie",
};

export type Strings = typeof nl;

const en: Strings = {
  locale: "en-GB", title: "Digital meter", day_tariff: "Day tariff", night_tariff: "Night tariff",
  importing: "Importing from grid", exporting: "Exporting to grid", idle: "Balanced with grid",
  capacity: "Capacity tariff", quarter: "This quarter", peak: "Month peak", avg13: "13-month avg",
  new_peak: "You're setting a new monthly peak!", margin: "{x} kW headroom to your peak",
  min_billed: "Billed at minimum {x} kW", today: "Today",
  forecast: "Forecast end of quarter", peak_today: "Peak today", q_time: "{m} / 15′",
  fc_over: "New peak expected – stay below {x} kW for the rest of this quarter",
  fc_room: "Up to {x} kW possible for the rest of this quarter", fc_min: "Below minimum {x} kW – no impact",
  last2h: "{h} h", last: "Last {h} h",
  day: "Day", night: "Night", gas: "Gas", water: "Water", grid: "Grid", fuse: "fuse {x} A",
  totals: "Meter readings", cons: "Import", prod: "Export",
};

const STRINGS: Record<Language, Strings> = { nl, en };

/* ── editor ───────────────────────────────────────────── */

const edNl = {
  title: "Titel", language: "Taal", fuse_amps: "Zekering per fase (A)", amp_warn: "Stroombalk oranje vanaf (fractie van zekering)",
  max_power: "Max. vermogen voor animatie (kW)", capacity_min: "Minimum capaciteitstarief (kW)", history_hours: "Grafiekvenster (uur)",
  power_consumption: "Vermogen afname", power_production: "Vermogen injectie", active_tariff: "Actief tarief",
  current_average_demand: "Kwartiergemiddelde (huidig)", maximum_demand: "Maandpiek", peak_average: "Gemiddelde piek 13 maanden (optioneel)",
  peak_today: "Piek vandaag (optioneel, anders berekend)",
  consumption_day: "Afname dag (1.8.1)", consumption_night: "Afname nacht (1.8.2)",
  production_day: "Injectie dag (2.8.1)", production_night: "Injectie nacht (2.8.2)",
  gas: "Gas (optioneel)", water: "Water (optioneel)",
  s_general: "Algemeen", s_power: "Live vermogen", s_capacity: "Capaciteitstarief", s_energy: "Energie (meterstanden)",
  s_utilities: "Gas & water", s_phase: "Fase", voltage: "Spanning", current: "Stroom", power: "Vermogen afname", power_prod: "Vermogen injectie",
};

export type EditorStrings = typeof edNl;

const edEn: EditorStrings = {
  title: "Title", language: "Language", fuse_amps: "Fuse per phase (A)", amp_warn: "Current bar orange from (fraction of fuse)",
  max_power: "Max. power for animation (kW)", capacity_min: "Minimum capacity tariff (kW)", history_hours: "Chart window (hours)",
  power_consumption: "Power import", power_production: "Power export", active_tariff: "Active tariff",
  current_average_demand: "Quarter-hour average (current)", maximum_demand: "Month peak", peak_average: "13-month average peak (optional)",
  peak_today: "Peak today (optional, otherwise calculated)",
  consumption_day: "Import day (1.8.1)", consumption_night: "Import night (1.8.2)",
  production_day: "Export day (2.8.1)", production_night: "Export night (2.8.2)",
  gas: "Gas (optional)", water: "Water (optional)",
  s_general: "General", s_power: "Live power", s_capacity: "Capacity tariff", s_energy: "Energy (meter readings)",
  s_utilities: "Gas & water", s_phase: "Phase", voltage: "Voltage", current: "Current", power: "Power import", power_prod: "Power export",
};

const EDITOR_STRINGS: Record<Language, EditorStrings> = { nl: edNl, en: edEn };

/* ── helpers ──────────────────────────────────────────── */

const pick = <T>(table: Record<Language, T>, lang: string | undefined): T =>
  table[(lang ?? "nl").slice(0, 2) as Language] ?? table.nl;

export const strings = (lang: string | undefined): Strings => pick(STRINGS, lang);
export const editorStrings = (lang: string | undefined): EditorStrings => pick(EDITOR_STRINGS, lang);

/** Fill `{name}` placeholders: tpl("Nog {x} kW", { x: "1,20" }) */
export const tpl = (s: string, vars: Record<string, string | number>): string =>
  s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
