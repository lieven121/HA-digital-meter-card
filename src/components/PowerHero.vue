<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import AppIcon from "./AppIcon.vue";

const { t, ent, fmt, power } = useMeter();
const { consumption, production, net, mode } = power;

const direction = computed(() =>
  mode.value === "import" ? t.value.importing : mode.value === "export" ? t.value.exporting : t.value.idle);
</script>

<template>
  <div class="hero">
    <div class="big" :data-k="mode === 'export' ? 'power_production' : 'power_consumption'">
      <span class="net">{{ fmt(Math.abs(net)) }}</span><span class="unit">kW</span>
    </div>
    <div class="sub">{{ direction }}</div>
    <div class="chips">
      <span class="chip imp" data-k="power_consumption">
        <AppIcon name="down" /><span>{{ t.cons }}</span><b>{{ fmt(consumption) }} kW</b>
      </span>
      <span v-if="ent.has('power_production')" class="chip exp" data-k="power_production">
        <AppIcon name="up" /><span>{{ t.prod }}</span><b>{{ fmt(production) }} kW</b>
      </span>
    </div>
  </div>
</template>

<style>
.hero { margin-top:14px; }
.big { display:inline-block; font-size:44px; font-weight:500; line-height:1; letter-spacing:-1px; font-variant-numeric:tabular-nums; padding:2px 4px; margin-left:-4px; }
.big .unit { font-size:18px; letter-spacing:0; color:var(--dm-muted); margin-left:6px; }
.import .net { color:var(--dm-import); } .export .net { color:var(--dm-export); }
.sub { font-size:13px; color:var(--dm-muted); margin-top:4px; }
.chips { display:flex; gap:6px; margin-top:10px; flex-wrap:wrap; }
.chip { display:inline-flex; align-items:center; gap:5px; font-size:12px; padding:5px 10px 5px 7px; border-radius:999px;
  background:color-mix(in srgb,currentColor 12%,transparent); }
.chip span { color:var(--dm-muted); } .chip b { color:var(--dm-text); }
.chip .ico { width:14px; height:14px; }
@media (hover:hover) { .chip:hover { filter:brightness(1.15); } }
</style>
