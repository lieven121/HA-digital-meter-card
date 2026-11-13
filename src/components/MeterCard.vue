<script setup lang="ts">
import { openMoreInfo, provideMeter } from "../composables/useMeter";
import type { EntityKey, HomeAssistant, ResolvedConfig } from "../types";
import CapacityPanel from "./CapacityPanel.vue";
import CardHeader from "./CardHeader.vue";
import MeterTotals from "./MeterTotals.vue";
import PhaseList from "./PhaseList.vue";
import PowerFlow from "./PowerFlow.vue";
import PowerHero from "./PowerHero.vue";
import PowerSparkline from "./PowerSparkline.vue";
import TodayTiles from "./TodayTiles.vue";

const props = defineProps<{ hass: HomeAssistant; config: ResolvedConfig }>();
const { ent, power } = provideMeter(props);

// One delegated listener: the innermost element with data-k opens its more-info dialog.
function onClick(ev: MouseEvent) {
  const el = ev.composedPath().find(
    (n): n is HTMLElement => n instanceof Element && !!(n as HTMLElement).dataset?.k,
  );
  if (!el || !ev.currentTarget) return;
  ev.stopPropagation();
  openMoreInfo(ev.currentTarget, ent, el.dataset.k as EntityKey);
}
</script>

<template>
  <ha-card :class="power.mode.value" @click="onClick">
    <CardHeader />
    <PowerHero />
    <PowerFlow />
    <PowerSparkline />
    <CapacityPanel />
    <TodayTiles />
    <PhaseList />
    <MeterTotals />
  </ha-card>
</template>
