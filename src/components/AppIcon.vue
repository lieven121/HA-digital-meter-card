<script setup lang="ts">
import { ICONS, type IconName } from "./icons";

defineProps<{ name: IconName }>();
</script>

<template>
  <svg
    class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" v-html="ICONS[name]"
  />
</template>
