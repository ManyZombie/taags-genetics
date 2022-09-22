<template>
  <span class="v-icon material-icons"> menu </span>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  size: number;
  color: string;
  translateX: number;
  translateY: number;
  scaleX: number;
  scaleY: number;
}>();

const iconSize = computed(() => `${props.size}rem`);

const translateIcon = computed(
  () => `translate(${props.translateX}px,${props.translateY}px)`
);

const scaleIcon = computed(
  () => `scaleX(${props.scaleX}) scaleY(${props.scaleY})`
);

const tranformIcon = computed(
  () => `${translateIcon.value} ${scaleIcon.value}`
);
</script>

<style scoped>
.v-icon {
  transition: all 0.2s;
  font-size: v-bind(iconSize);
  color: v-bind(color);
  transform: v-bind(tranformIcon);
}
</style>
