/*
 * A fake `hass` object for the dev page: the default entities with values that
 * drift every couple of seconds, and plausible answers to the WS calls the card makes.
 */
import { DEFAULT_ENTITIES } from "../src/const";
import type { EntityKey, HassEntity, HomeAssistant } from "../src/types";

type Values = Partial<Record<EntityKey, number>>;

const UNITS: Partial<Record<EntityKey, string>> = {
  power_consumption: "kW", power_production: "kW",
  current_average_demand: "kW", maximum_demand: "kW",
  consumption_day: "kWh", consumption_night: "kWh", production_day: "kWh", production_night: "kWh",
  gas: "m³",
  voltage_l1: "V", voltage_l2: "V", voltage_l3: "V",
  current_l1: "A", current_l2: "A", current_l3: "A",
  power_l1: "kW", power_l2: "kW", power_l3: "kW",
  power_prod_l1: "kW", power_prod_l2: "kW", power_prod_l3: "kW",
};

const values: Values = {
  power_consumption: 1.8, power_production: 0, active_tariff: 1,
  current_average_demand: 1.2, maximum_demand: 3.4,
  consumption_day: 12034.5, consumption_night: 9876.1, production_day: 4321.9, production_night: 210.4,
  gas: 5432.12,
  voltage_l1: 231, voltage_l2: 229, voltage_l3: 233,
  current_l1: 4.2, current_l2: 2.1, current_l3: 1.5,
};

const jitter = (v: number, spread: number, min = 0) => Math.max(min, v + (Math.random() - 0.5) * spread);

function step(v: Values) {
  v.power_consumption = +jitter(v.power_consumption!, 0.8).toFixed(3);
  v.current_average_demand = +(v.current_average_demand! + v.power_consumption / 450).toFixed(3);
  for (const n of [1, 2, 3] as const) {
    v[`voltage_l${n}`] = +jitter(v[`voltage_l${n}`]!, 2, 215).toFixed(1);
    v[`current_l${n}`] = +jitter(v[`current_l${n}`]!, 1.5).toFixed(2);
    v[`power_l${n}`] = +((v[`voltage_l${n}`]! * v[`current_l${n}`]!) / 1000).toFixed(3);
    v[`power_prod_l${n}`] = 0;
  }
}

function states(v: Values): HomeAssistant["states"] {
  const out: HomeAssistant["states"] = {};
  for (const [key, id] of Object.entries(DEFAULT_ENTITIES) as [EntityKey, string][]) {
    if (!id || v[key] == null) continue;
    const s: HassEntity = { entity_id: id, state: String(v[key]), attributes: { unit_of_measurement: UNITS[key] } };
    out[id] = s;
  }
  return out;
}

async function callWS<T>(msg: { type: string; [key: string]: unknown }): Promise<T> {
  const now = Date.now();
  switch (msg.type) {
    case "history/history_during_period": {
      const res: Record<string, { s: string; lu: number }[]> = {};
      for (const id of msg.entity_ids as string[]) {
        const isProd = id === DEFAULT_ENTITIES.power_production;
        res[id] = Array.from({ length: 240 }, (_, i) => ({
          lu: (now - (240 - i) * 30e3) / 1000,
          s: String(isProd ? 0 : (1.5 + Math.sin(i / 15) + Math.random() * 0.4).toFixed(3)),
        }));
      }
      return res as T;
    }
    case "recorder/statistic_during_period":
      return { change: msg.statistic_id === DEFAULT_ENTITIES.gas ? 1.84 : 3 + Math.random() * 5 } as T;
    case "recorder/statistics_during_period": {
      const start = Date.parse(msg.start_time as string);
      const res: Record<string, { start: number; change: number; max: number }[]> = {};
      for (const id of msg.statistic_ids as string[]) {
        res[id] = [];
        for (let ts = start; ts < now; ts += 5 * 60e3) {
          res[id].push({ start: ts, change: Math.random() < 0.3 ? Math.random() * 0.1 : 0, max: 1 + Math.random() * 2 });
        }
      }
      return res as T;
    }
    default:
      throw new Error(`mock-hass: unhandled ${msg.type}`);
  }
}

/** Calls `onUpdate` with a fresh hass object now and every `intervalMs`, like HA does on state changes. */
export function startMockHass(onUpdate: (hass: HomeAssistant) => void, intervalMs = 2000): () => void {
  const emit = () => onUpdate({ states: states(values), locale: { language: "nl" }, callWS });
  emit();
  const timer = setInterval(() => { step(values); emit(); }, intervalMs);
  return () => clearInterval(timer);
}
