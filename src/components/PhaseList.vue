<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import { tpl } from "../i18n";
import type { Phase } from "../types";
import PhaseRow from "./PhaseRow.vue";

const { config, t, ent } = useMeter();

const phases = computed(() =>
  ([1, 2, 3] as Phase[]).filter((n) => ent.has(`voltage_l${n}`) || ent.has(`current_l${n}`)));

// current bar colour: green → orange at amp_warn → red just above it
const gradient = computed(() => {
  const w = config.value.amp_warn * 100;
  return `linear-gradient(90deg, var(--dm-ok) 0%, var(--dm-ok) ${Math.max(0, w - 25)}%, var(--dm-warn) ${w}%, `
    + `var(--dm-bad) ${Math.min(100, w + 15)}%, var(--dm-bad) 100%)`;
});
</script>

<template>
  <div v-if="phases.length">
    <div class="label">{{ t.grid }} · {{ tpl(t.fuse, { x: config.fuse_amps }) }}</div>
    <div class="phases">
      <PhaseRow v-for="n in phases" :key="n" :phase="n" :gradient="gradient" />
    </div>
  </div>
</template>

<style>
.phases { display:flex; flex-direction:column; gap:6px; }
</style>
