/* Minimal subset of the Home Assistant frontend types this card relies on. */

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: { unit_of_measurement?: string; [key: string]: unknown };
  last_changed?: string;
  last_updated?: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity | undefined>;
  locale?: { language: string };
  callWS<T>(msg: { type: string; [key: string]: unknown }): Promise<T>;
}

export type Phase = 1 | 2 | 3;

export type EntityKey =
  | "power_consumption" | "power_production" | "active_tariff"
  | "current_average_demand" | "maximum_demand" | "peak_average" | "peak_today"
  | "consumption_day" | "consumption_night" | "production_day" | "production_night"
  | "gas" | "water"
  | `voltage_l${Phase}` | `current_l${Phase}` | `power_l${Phase}` | `power_prod_l${Phase}`;

export type EntityMap = Record<EntityKey, string>;
export type Language = "nl" | "en";
export type Utility = "gas" | "water";
export type TariffPeriod = "day" | "night";

export interface CardOptions {
  title: string;
  language: Language;
  /** fuse rating per phase, in A */
  fuse_amps: number;
  /** fraction of the fuse at which the current bar turns orange */
  amp_warn: number;
  /** kW at which the flow animation reaches full speed */
  max_power: number;
  /** minimum billed capacity, in kW */
  capacity_min: number;
  /** sparkline / mini-chart window, in hours */
  history_hours: number;
}

/** Config as written in the dashboard YAML (everything optional). */
export interface CardConfig extends Partial<CardOptions> {
  type?: string;
  entities?: Partial<EntityMap>;
}

/** Config after merging in the defaults. */
export interface ResolvedConfig extends CardOptions {
  type?: string;
  entities: EntityMap;
}

/** [timestamp ms, value] */
export type Point = [number, number];
