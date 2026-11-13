<!--
  Root of the <fluvius-meter-card> custom element (see elements.ts).
  Remounts MeterCard whenever the config changes, so all history and
  statistics are reloaded for the new entities.
-->
<script setup lang="ts">
import { ref, watch } from "vue";
import MeterCard from "./components/MeterCard.vue";
import type { HomeAssistant, ResolvedConfig } from "./types";

const props = defineProps<{ hass?: HomeAssistant; config?: ResolvedConfig }>();

const generation = ref(0);
watch(() => props.config, () => generation.value++);
</script>

<template>
  <MeterCard v-if="hass && config" :key="generation" :hass="hass" :config="config" />
</template>

<style>
/* Everything maps onto Home Assistant theme variables, with sane fallbacks. */
:host {
  --fm-import: var(--energy-grid-consumption-color, #488fc2);
  --fm-export: var(--energy-grid-return-color, #8353d1);
  --fm-gas:    var(--energy-gas-color, #8e021b);
  --fm-water:  var(--energy-water-color, #00bcd4);
  --fm-ok:     var(--success-color, #43a047);
  --fm-warn:   var(--warning-color, #ffa600);
  --fm-bad:    var(--error-color, #db4437);
  --fm-day:    var(--fluvius-day-color, var(--warning-color, #ffa600));
  --fm-night:  var(--fluvius-night-color, var(--state-icon-color, #44739e));
  --fm-text:   var(--primary-text-color, #212121);
  --fm-muted:  var(--secondary-text-color, #727272);
  --fm-line:   var(--divider-color, rgba(127,127,127,.2));
  --fm-soft:   color-mix(in srgb, var(--fm-text) 5%, transparent);
  --fm-hover:  color-mix(in srgb, var(--fm-text) 9%, transparent);
  --fm-radius: var(--ha-card-border-radius, 12px);
}
ha-card { display:block; padding:16px; color:var(--fm-text); }
/* only used outside Home Assistant (dev preview); the real ha-card styles itself from the theme */
ha-card:not(:defined) {
  background:var(--ha-card-background, var(--card-background-color, #fff));
  border-radius:var(--fm-radius); border:var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--fm-line));
  box-shadow:var(--ha-card-box-shadow, none);
}
b { font-weight:500; font-variant-numeric:tabular-nums; }
[data-k] { cursor:pointer; border-radius:8px; transition:background .15s; }
.ico { width:16px; height:16px; flex:none; }
.imp { color:var(--fm-import); } .exp { color:var(--fm-export); }
.label { font-size:11px; font-weight:500; text-transform:uppercase; letter-spacing:.8px; color:var(--fm-muted); margin:18px 0 8px; }

@media (hover:hover) {
  [data-k]:not(.ph-bar):not(.chip):not(.ring):hover { background-color:var(--fm-hover); }
}
</style>
