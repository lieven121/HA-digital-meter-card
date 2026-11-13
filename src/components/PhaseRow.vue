<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import { clamp } from "../logic/format";
import type { EntityKey, Phase } from "../types";

const props = defineProps<{ phase: Phase; gradient: string }>();

/* EN 50160: 230 V ±10 %. The bar spans 207–253 V; outside 212–248 V the marker turns red. */
const V_MIN = 207, V_SPAN = 46, V_LOW = 212, V_HIGH = 248;

const { config, ent, fmt } = useMeter();
const n = props.phase;

const volts = computed(() => ent.num(`voltage_l${n}`));
const amps = computed(() => ent.num(`current_l${n}`));

const voltPos = computed(() =>
  volts.value == null ? "50%" : clamp(((volts.value - V_MIN) / V_SPAN) * 100, 0, 100) + "%");
const voltBad = computed(() => volts.value != null && (volts.value < V_LOW || volts.value > V_HIGH));

const ampFraction = computed(() => (amps.value == null ? 0 : Math.min(1, amps.value / config.value.fuse_amps)));
const ampLevel = computed(() =>
  ampFraction.value >= 0.95 ? "over" : ampFraction.value >= config.value.amp_warn ? "warn" : "");

// Net phase power from the per-phase sensors, otherwise estimated as V × A.
const power = computed((): { kw: number | null; key: EntityKey } => {
  const imp: EntityKey = `power_l${n}`, exp: EntityKey = `power_prod_l${n}`;
  if (ent.has(imp)) {
    const pc = ent.kw(imp) || 0, pp = ent.kw(exp) || 0;
    return { kw: pc - pp, key: pp > pc && ent.has(exp) ? exp : imp };
  }
  const kw = volts.value != null && amps.value != null ? (volts.value * amps.value) / 1000 : null;
  return { kw, key: `current_l${n}` };
});
</script>

<template>
  <div class="ph">
    <span class="ph-n">L{{ n }}</span>
    <div class="ph-bar v" :data-k="`voltage_l${n}`"><i :class="{ bad: voltBad }" :style="{ left: voltPos }" /></div>
    <b class="ph-val" :data-k="`voltage_l${n}`">{{ fmt(volts, 0) }} V</b><span />
    <span />
    <div class="ph-bar a" :data-k="`current_l${n}`">
      <div class="fill" :style="{ background: gradient, clipPath: `inset(0 ${100 - ampFraction * 100}% 0 0 round 4px)` }" />
    </div>
    <b class="ph-val" :class="ampLevel" :data-k="`current_l${n}`">{{ fmt(amps, 1) }} A</b>
    <span
      class="ph-kw" :data-k="power.key"
      :class="{ exp: power.kw != null && power.kw < 0, imp: power.kw != null && power.kw > 0 }"
    >{{ fmt(power.kw) }} kW</span>
  </div>
</template>

<style>
.ph { display:grid; grid-template-columns:22px 1fr 54px 64px; align-items:center; column-gap:8px; row-gap:5px;
  font-size:13px; padding:8px 10px; border-radius:var(--fm-radius); background:var(--fm-soft); }
.ph-n { color:var(--fm-muted); font-weight:500; font-size:12px; }
.ph-bar { position:relative; border-radius:4px; padding:5px 0; background-clip:content-box; }
.ph-bar.v { height:6px; background-image:linear-gradient(90deg,
    color-mix(in srgb,var(--fm-bad) 40%,transparent) 0%, color-mix(in srgb,var(--fm-ok) 40%,transparent) 11%,
    color-mix(in srgb,var(--fm-ok) 40%,transparent) 89%, color-mix(in srgb,var(--fm-bad) 40%,transparent) 100%); }
.ph-bar.v i { position:absolute; top:2px; width:4px; height:12px; margin-left:-2px; border-radius:2px; background:var(--fm-text); transition:left .5s; }
.ph-bar.v i.bad { background:var(--fm-bad); }
.ph-bar.a { height:8px; }
.ph-bar.a::before { content:""; position:absolute; left:0; right:0; top:5px; height:8px; border-radius:4px; background:var(--fm-line); }
.ph-bar.a .fill { position:absolute; left:0; right:0; top:5px; height:8px; transition:clip-path .6s ease; }
.ph-val { text-align:right; font-size:13px; padding:2px 4px; }
.ph-val.warn { color:var(--fm-warn); } .ph-val.over { color:var(--fm-bad); }
.ph-kw { text-align:right; font-size:12px; color:var(--fm-muted); font-variant-numeric:tabular-nums; padding:2px 4px; }
.ph-kw.imp { color:var(--fm-import); } .ph-kw.exp { color:var(--fm-export); }
</style>
