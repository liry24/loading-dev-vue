<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const RING = [0, 1, 2, 7, null, 3, 6, 5, 4];

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('swirl', props)">
    <div
      v-for="(place, index) in RING"
      :key="index"
      :class="place === null ? undefined : 'ld-swirl-cell'"
      :style="place === null ? undefined : step(place)"
    />
  </div>
</template>
