import type { EntityHelpers } from "../composables/useEntities";
import type { Utility } from "../types";

/** Display unit for gas / water: litres without decimals, m³ with two. */
export function utilityUnit(ent: EntityHelpers, kind: Utility): { symbol: string; decimals: number } {
  const symbol = ent.unit(kind) || "m³";
  return { symbol, decimals: symbol === "L" ? 0 : 2 };
}
