<script setup lang="ts">
import { useMeter } from "../composables/useMeter";
import type { TariffPeriod } from "../types";
import AppIcon from "./AppIcon.vue";
import type { IconName } from "./icons";

const props = defineProps<{ period: TariffPeriod; icon: IconName }>();

const { t, ent, fmt, stats } = useMeter();
const cons = `consumption_${props.period}` as const;
const prod = `production_${props.period}` as const;
</script>

<template>
  <div class="tile">
    <div class="tile-h"><AppIcon :name="icon" :class="`c-${period}`" /><span>{{ t[period] }}</span></div>
    <div class="tv-row">
      <div class="tv" :data-k="cons">
        <b class="imp">{{ fmt(stats.today[cons], 1) }}<i>kWh</i></b>
        <small><AppIcon name="down" />{{ t.cons }}</small>
      </div>
      <div v-if="ent.has(prod)" class="tv" :data-k="prod">
        <b class="exp">{{ fmt(stats.today[prod], 1) }}<i>kWh</i></b>
        <small><AppIcon name="up" />{{ t.prod }}</small>
      </div>
    </div>
  </div>
</template>
