<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import { tpl } from "../i18n";
import { stepPaths } from "../logic/series";

const W = 300, H = 64, PAD = 3;

const { config, t, fmt, now, history } = useMeter();

const chart = computed(() => {
  const { c, p } = history.value;
  const t0 = now.value - config.value.history_hours * 3600e3;
  const max = Math.max(0.5, ...c.map((x) => x[1]), ...p.map((x) => x[1])) * 1.1;
  const g = { width: W, height: H, pad: PAD, t0, now: now.value, max };
  return {
    imp: stepPaths(c, g),
    exp: stepPaths(p, g),
    peak: Math.max(0, ...c.map((x) => x[1])),
  };
});
</script>

<template>
  <div class="spark-wrap" data-k="power_consumption">
    <svg class="spark" :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="var(--dm-import)" stop-opacity=".35" /><stop offset="1" stop-color="var(--dm-import)" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="gp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="var(--dm-export)" stop-opacity=".35" /><stop offset="1" stop-color="var(--dm-export)" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path :d="chart.imp.area" fill="url(#gc)" /><path :d="chart.imp.line" class="l imp" />
      <path :d="chart.exp.area" fill="url(#gp)" /><path :d="chart.exp.line" class="l exp" />
    </svg>
    <div class="spark-meta">
      <span>{{ tpl(t.last, { h: config.history_hours }) }}</span><span>max {{ fmt(chart.peak) }} kW</span>
    </div>
  </div>
</template>

<style>
.spark-wrap { margin:6px 0 4px; padding:4px; margin-inline:-4px; }
.spark { width:100%; height:64px; display:block; }
.spark .l { fill:none; stroke-width:1.6; vector-effect:non-scaling-stroke; stroke-linejoin:round; }
.spark .imp { stroke:var(--dm-import); } .spark .exp { stroke:var(--dm-export); }
.spark-meta { display:flex; justify-content:space-between; font-size:11px; color:var(--dm-muted); margin-top:4px; }
</style>
