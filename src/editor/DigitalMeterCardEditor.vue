<!-- Root of the <digital-meter-card-editor> custom element (see elements.ts). -->
<script setup lang="ts">
import { computed, ref, useHost, watch } from "vue";
import { CARD_TYPE } from "../const";
import { editorStrings } from "../i18n";
import type { CardConfig, HomeAssistant } from "../types";
import { buildSchema, fieldLabel, fromFormData, toFormData, type FormData } from "./schema";

const props = defineProps<{ hass?: HomeAssistant; config?: CardConfig }>();
const host = useHost();

// Local copy, so the form reflects a change immediately (HA calls setConfig back afterwards).
const current = ref<CardConfig>(props.config ?? {});
watch(() => props.config, (c) => { current.value = c ?? {}; });

const L = computed(() => editorStrings(current.value.language ?? props.hass?.locale?.language));
const schema = computed(() => buildSchema(L.value));
const data = computed(() => toFormData(current.value));
const computeLabel = (s: { name?: string }) => fieldLabel(L.value, s.name);

function onChanged(ev: CustomEvent<{ value?: Partial<FormData> }>) {
  ev.stopPropagation();
  const config = fromFormData(current.value.type || `custom:${CARD_TYPE}`, ev.detail.value ?? {});
  current.value = config;
  host?.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
}
</script>

<template>
  <ha-form
    v-if="hass"
    .hass="hass" .schema="schema" .data="data" .computeLabel="computeLabel"
    @value-changed="onChanged"
  />
</template>
