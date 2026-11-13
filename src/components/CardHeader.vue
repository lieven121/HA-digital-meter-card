<script setup lang="ts">
import { computed } from "vue";
import { useMeter } from "../composables/useMeter";
import AppIcon from "./AppIcon.vue";

const { config, t, ent } = useMeter();

// Belgium: tariff 1 = day, 2 = night
const tariff = computed(() => {
  const s = ent.state("active_tariff");
  return s ? parseInt(s.state, 10) || null : null;
});
const night = computed(() => tariff.value === 2);
</script>

<template>
  <div class="head">
    <div class="title">{{ config.title || t.title }}</div>
    <div v-if="tariff" class="pill" :class="night ? 'night' : 'day'" data-k="active_tariff">
      <AppIcon :name="night ? 'moon' : 'sun'" />{{ night ? t.night_tariff : t.day_tariff }}
    </div>
  </div>
</template>

<style>
.head { display:flex; justify-content:space-between; align-items:center; gap:8px; }
.title { font-size:var(--ha-card-header-font-size, 16px); font-weight:500; }
.pill { font-size:12px; font-weight:500; padding:4px 10px 4px 8px; border-radius:999px; display:flex; gap:5px; align-items:center; }
.pill .ico { width:14px; height:14px; }
.pill.day { background:color-mix(in srgb,var(--dm-day) 16%,transparent); color:var(--dm-day); }
.pill.night { background:color-mix(in srgb,var(--dm-night) 16%,transparent); color:var(--dm-night); }
</style>
