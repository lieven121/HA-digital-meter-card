<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import AppIcon from "./AppIcon.vue";

const { config, power } = useMeter();

// faster dashes the closer we get to max_power
const duration = computed(() =>
  Math.max(0.35, 2.4 - (Math.abs(power.net.value) / config.value.max_power) * 2.2) + "s");
</script>

<template>
  <div class="flow">
    <AppIcon name="tower" />
    <svg class="line" viewBox="0 0 100 10" preserveAspectRatio="none">
      <line class="flowline" x1="2" y1="5" x2="98" y2="5" :style="{ animationDuration: duration }" />
    </svg>
    <AppIcon name="home" />
  </div>
</template>

<style>
.flow { display:flex; align-items:center; gap:10px; margin:14px 0 6px; color:var(--dm-muted); }
.flow .ico { width:22px; height:22px; }
.flow svg.line { flex:1; height:10px; overflow:visible; }
.flowline { stroke:var(--dm-line); stroke-width:3; stroke-linecap:round; stroke-dasharray:1 7;
  animation:flow 1.5s linear infinite; vector-effect:non-scaling-stroke; }
.import .flowline { stroke:var(--dm-import); }
.export .flowline { stroke:var(--dm-export); animation-direction:reverse; }
.idle .flowline { animation:none; }
@keyframes flow { to { stroke-dashoffset:-16; } }
</style>
