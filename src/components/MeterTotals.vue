<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import type { EntityKey } from "../types";
import { utilityUnit } from "./utility";

const { t, ent, fmt } = useMeter();

interface Total { key: EntityKey; label: string; value: string; wide?: boolean }

const totals = computed((): Total[] => {
  const kwh = (key: EntityKey, label: string): Total => ({ key, label, value: `${fmt(ent.num(key), 1)} kWh` });
  const util = (key: "gas" | "water", other: "gas" | "water"): Total => {
    const u = utilityUnit(ent, key);
    return { key, label: t.value[key], value: `${fmt(ent.num(key), u.decimals)} ${u.symbol}`, wide: !ent.has(other) };
  };
  const rows: Total[] = [
    kwh("consumption_day", `${t.value.cons} 1.8.1`),
    kwh("consumption_night", `${t.value.cons} 1.8.2`),
  ];
  if (ent.has("production_day")) rows.push(kwh("production_day", `${t.value.prod} 2.8.1`));
  if (ent.has("production_night")) rows.push(kwh("production_night", `${t.value.prod} 2.8.2`));
  if (ent.has("gas")) rows.push(util("gas", "water"));
  if (ent.has("water")) rows.push(util("water", "gas"));
  return rows;
});
</script>

<template>
  <div class="label">{{ t.totals }}</div>
  <div class="totals">
    <div v-for="row in totals" :key="row.key" :data-k="row.key" :class="{ wide: row.wide }">
      <span>{{ row.label }}</span><b>{{ row.value }}</b>
    </div>
  </div>
</template>

<style>
.totals { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
.totals > div { display:flex; flex-direction:column; gap:2px; padding:8px 10px; border-radius:var(--fm-radius); background:var(--fm-soft); }
.totals > div.wide { grid-column:span 2; }
.totals span { font-size:11px; color:var(--fm-muted); }
.totals b { font-size:14px; }
</style>
