<script setup lang="ts">
import { useMeter } from "../composables/useMeter";
import TariffTile from "./TariffTile.vue";
import UtilityTile from "./UtilityTile.vue";

const { t, ent } = useMeter();
</script>

<template>
  <div class="label">{{ t.today }}</div>
  <div class="tiles">
    <TariffTile period="day" icon="sun" />
    <TariffTile period="night" icon="moon" />
    <UtilityTile kind="gas" icon="flame" :wide="!ent.has('water')" />
    <UtilityTile kind="water" icon="drop" :wide="!ent.has('gas')" />
  </div>
</template>

<style>
.tiles { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.tile { background:var(--fm-soft); border-radius:var(--fm-radius); padding:10px; display:flex; flex-direction:column; gap:6px; min-width:0; }
.tile.wide { grid-column:span 2; }
.tile-h { display:flex; align-items:center; gap:6px; font-size:13px; color:var(--fm-muted); }
.tile-h .ico { width:18px; height:18px; }
.tv-row { display:flex; gap:4px; }
.tv { flex:1; display:flex; flex-direction:column; gap:2px; padding:4px 6px; margin:0 -2px; min-width:0; }
.tv b { font-size:18px; white-space:nowrap; }
.tv b i { font-style:normal; font-size:11px; color:var(--fm-muted); margin-left:3px; font-weight:400; }
.tv small { font-size:11px; color:var(--fm-muted); display:flex; align-items:center; gap:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.tv small .ico { width:11px; height:11px; }
.c-day { color:var(--fm-day); } .c-night { color:var(--fm-night); } .c-gas { color:var(--fm-gas); } .c-water { color:var(--fm-water); }
@media (hover:hover) { .tile .tv:hover { background:var(--fm-hover); } }
</style>
