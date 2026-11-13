<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import { tpl } from "../i18n";
import { computeCapacity, quarterClock } from "../logic/capacity";
import { recentAverage } from "../logic/series";

const RING = 2 * Math.PI * 30;    // capacity ring circumference
const QRING = 2 * Math.PI * 38;   // quarter-progress ring circumference

const { config, t, ent, fmt, now, power, history, stats } = useMeter();

const current = computed(() => ent.kw("current_average_demand"));
const peak = computed(() => ent.kw("maximum_demand"));

const cap = computed(() => computeCapacity({
  now: now.value,
  current: current.value,
  peak: peak.value,
  minimum: config.value.capacity_min,
  // 60 s time-weighted import power
  recentImport: recentAverage(history.value.c, 60e3, now.value, power.consumption.value),
}));

const peakToday = computed(() => (ent.has("peak_today") ? ent.kw("peak_today") : stats.peakToday.value));

const hint = computed(() => {
  const h = cap.value.hint;
  if (!h) return "";
  if (h.kind === "new_peak") return t.value.new_peak;
  return tpl(t.value[h.kind], { x: fmt(h.value, h.kind === "fc_min" ? 1 : 2) });
});

const dash = (fraction: number, circumference: number) => `${Math.min(fraction, 1) * circumference} ${circumference}`;
</script>

<template>
  <div v-if="ent.has('current_average_demand') || ent.has('maximum_demand')" class="cap" :class="cap.level">
    <div class="ring-col" data-k="current_average_demand">
      <div class="ring">
        <svg viewBox="0 0 80 80">
          <circle class="qtrack" cx="40" cy="40" r="38" />
          <circle class="qbar" cx="40" cy="40" r="38" :style="{ strokeDasharray: dash(cap.elapsed, QRING) }" />
          <circle class="track" cx="40" cy="40" r="30" />
          <circle class="bar fc" cx="40" cy="40" r="30" :style="{ strokeDasharray: dash(cap.pctForecast, RING) }" />
          <circle class="bar" cx="40" cy="40" r="30" :style="{ strokeDasharray: dash(cap.pct, RING) }" />
        </svg>
        <div class="ring-txt">
          <b>{{ cap.forecast != null ? Math.round(cap.pctForecast * 100) : "—" }}</b><small>%</small>
        </div>
      </div>
      <div class="ring-q">{{ tpl(t.q_time, { m: quarterClock(cap.elapsed) }) }}</div>
    </div>
    <div class="cap-info">
      <div class="label">{{ t.capacity }}</div>
      <div class="cap-row" data-k="current_average_demand"><span>{{ t.quarter }}</span><b>{{ fmt(current) }} kW</b></div>
      <div class="cap-row fc-row" data-k="power_consumption"><span>{{ t.forecast }}</span><b>{{ fmt(cap.forecast) }} kW</b></div>
      <div class="cap-row" :data-k="ent.has('peak_today') ? 'peak_today' : 'current_average_demand'">
        <span>{{ t.peak_today }}</span><b>{{ fmt(peakToday) }} kW</b>
      </div>
      <div class="cap-row" data-k="maximum_demand"><span>{{ t.peak }}</span><b>{{ fmt(peak) }} kW</b></div>
      <div v-if="ent.has('peak_average')" class="cap-row" data-k="peak_average">
        <span>{{ t.avg13 }}</span><b>{{ fmt(ent.kw("peak_average")) }} kW</b>
      </div>
      <div class="hint">{{ hint }}</div>
    </div>
  </div>
</template>

<style>
.cap { display:flex; gap:14px; align-items:center; margin-top:14px; padding:12px; border-radius:var(--dm-radius); background:var(--dm-soft); }
.cap .label { margin:0 0 4px; }
.ring-col { display:flex; flex-direction:column; align-items:center; gap:4px; flex:none; padding:4px; }
.ring { position:relative; width:84px; height:84px; }
.ring svg { width:100%; height:100%; transform:rotate(-90deg); }
.ring circle { fill:none; stroke-width:7; }
.ring .track { stroke:var(--dm-line); }
.ring .bar { stroke-linecap:round; transition:stroke-dasharray .6s ease, stroke .4s; }
.ring .bar.fc { opacity:.3; }
.ring .qtrack { fill:none; stroke:var(--dm-line); stroke-width:2.5; }
.ring .qbar { fill:none; stroke:var(--dm-muted); stroke-width:2.5; stroke-linecap:round; transition:stroke-dasharray 1s linear; }
.cap.ok .bar { stroke:var(--dm-ok); } .cap.warn .bar { stroke:var(--dm-warn); } .cap.over .bar { stroke:var(--dm-bad); }
.ring-txt { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:20px; }
.ring-q { font-size:11px; color:var(--dm-muted); font-variant-numeric:tabular-nums; }
.ring-txt small { font-size:11px; color:var(--dm-muted); margin-left:1px; }
.cap-info { flex:1; min-width:0; }
.cap-row { display:flex; justify-content:space-between; font-size:13px; padding:3px 6px; margin:0 -6px; }
.cap-row span { color:var(--dm-muted); }
.cap.ok .fc-row b { color:var(--dm-ok); } .cap.warn .fc-row b { color:var(--dm-warn); } .cap.over .fc-row b { color:var(--dm-bad); }
.hint { font-size:12px; margin-top:6px; }
.cap.ok .hint { color:var(--dm-ok); } .cap.warn .hint { color:var(--dm-warn); } .cap.over .hint { color:var(--dm-bad); font-weight:500; }
@media (hover:hover) { .cap-row:hover, .ring-col:hover { background:var(--dm-hover); } }
</style>
