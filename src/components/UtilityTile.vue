<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import { tpl } from "../i18n";
import type { Utility } from "../types";
import AppIcon from "./AppIcon.vue";
import type { IconName } from "./icons";
import { utilityUnit } from "./utility";

const props = defineProps<{ kind: Utility; icon: IconName; wide: boolean }>();

const W = 120, H = 28, GAP = 1.2;

const { config, t, ent, fmt, stats } = useMeter();
const unit = computed(() => utilityUnit(ent, props.kind));

const bars = computed(() => {
  const values = stats.mini[props.kind] ?? [];
  const n = values.length;
  const max = Math.max(...values) || 1;
  return values.map((v, i) => {
    const h = v > 0 ? Math.max(2, (v / max) * (H - 1)) : 1;
    return { x: (i * W) / n + GAP / 2, y: H - h, w: W / n - GAP, h, on: v > 0 };
  });
});
const total = computed(() => (stats.mini[props.kind] ?? []).reduce((a, b) => a + b, 0));
</script>

<template>
  <div v-if="ent.has(kind)" class="tile" :class="{ wide }">
    <div class="tile-h"><AppIcon :name="icon" :class="`c-${kind}`" /><span>{{ t[kind] }}</span></div>
    <div class="tv-row">
      <div class="tv" :data-k="kind"><b>{{ fmt(stats.today[kind], unit.decimals) }}<i>{{ unit.symbol }}</i></b></div>
    </div>
    <div class="mini" :data-k="kind">
      <svg :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none" :class="`mini-${kind}`">
        <rect v-for="(b, i) in bars" :key="i" :x="b.x" :y="b.y" :width="b.w" :height="b.h" rx="1" :class="b.on ? 'on' : 'off'" />
      </svg>
      <div class="mini-meta">
        <span>{{ tpl(t.last2h, { h: config.history_hours }) }}</span>
        <span v-if="bars.length">{{ fmt(total, unit.decimals) }} {{ unit.symbol }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.mini { margin:0 -4px; padding:2px 4px; }
.mini svg { width:100%; height:28px; display:block; }
.mini rect.on { opacity:.85; } .mini rect.off { opacity:.2; }
.mini-gas rect { fill:var(--dm-gas); } .mini-water rect { fill:var(--dm-water); }
.mini-meta { display:flex; justify-content:space-between; font-size:10px; color:var(--dm-muted); margin-top:3px; font-variant-numeric:tabular-nums; }
</style>
