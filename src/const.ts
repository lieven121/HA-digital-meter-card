import type { CardConfig, CardOptions, EntityMap, ResolvedConfig } from "./types";

export const CARD_TYPE = "digital-meter-card";
export const EDITOR_TYPE = "digital-meter-card-editor";

export const DEFAULT_ENTITIES: EntityMap = {
  power_consumption: "sensor.electricity_meter_power_consumption",
  power_production: "sensor.electricity_meter_power_production",
  active_tariff: "sensor.electricity_meter_active_tariff",
  current_average_demand: "sensor.electricity_meter_current_average_demand",
  maximum_demand: "sensor.electricity_meter_maximum_demand_current_month",
  peak_average: "",
  peak_today: "",
  consumption_day: "sensor.electricity_meter_energy_consumption_tariff_1",
  consumption_night: "sensor.electricity_meter_energy_consumption_tariff_2",
  production_day: "sensor.electricity_meter_energy_production_tariff_1",
  production_night: "sensor.electricity_meter_energy_production_tariff_2",
  gas: "sensor.gas_meter_gas_consumption",
  water: "",
  voltage_l1: "sensor.electricity_meter_voltage_phase_l1",
  voltage_l2: "sensor.electricity_meter_voltage_phase_l2",
  voltage_l3: "sensor.electricity_meter_voltage_phase_l3",
  current_l1: "sensor.electricity_meter_current_phase_l1",
  current_l2: "sensor.electricity_meter_current_phase_l2",
  current_l3: "sensor.electricity_meter_current_phase_l3",
  power_l1: "sensor.electricity_meter_power_consumption_phase_l1",
  power_l2: "sensor.electricity_meter_power_consumption_phase_l2",
  power_l3: "sensor.electricity_meter_power_consumption_phase_l3",
  power_prod_l1: "sensor.electricity_meter_power_production_phase_l1",
  power_prod_l2: "sensor.electricity_meter_power_production_phase_l2",
  power_prod_l3: "sensor.electricity_meter_power_production_phase_l3",
};

export const DEFAULT_OPTIONS: CardOptions = {
  title: "", language: "nl", fuse_amps: 25, amp_warn: 0.8,
  max_power: 10, capacity_min: 2.5, history_hours: 2,
};

/** Statistics (today's totals, mini charts, peak today) are refreshed at most this often. */
export const STATS_REFRESH_MS = 5 * 60e3;
/** Re-render interval, so the quarter-hour ring and forecast keep moving between state changes. */
export const TICK_MS = 5000;

export function resolveConfig(config: CardConfig): ResolvedConfig {
  return {
    ...DEFAULT_OPTIONS, ...config,
    entities: { ...DEFAULT_ENTITIES, ...(config.entities ?? {}) },
  };
}
