import { onMounted, onUnmounted, ref, type Ref } from "vue";

/** A `now` timestamp that advances every `intervalMs`, plus `touch()` to refresh it on demand. */
export function useClock(intervalMs: number): { now: Ref<number>; touch: () => void } {
  const now = ref(Date.now());
  const touch = () => { now.value = Date.now(); };
  let timer: ReturnType<typeof setInterval> | undefined;
  onMounted(() => { timer = setInterval(touch, intervalMs); });
  onUnmounted(() => clearInterval(timer));
  return { now, touch };
}
