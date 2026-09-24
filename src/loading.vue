<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const BLOCK = "M0 0h1v1H0zM2 0h1v1H2zM0 2h1v1H0zM2 2h1v1H2z";

const SEGMENTS = [
  { x: 12, y: 6 },
  { x: 10, y: 10 },
  { x: 6, y: 12 },
  { x: 2, y: 10 },
  { x: 0, y: 6 },
  { x: 2, y: 2 },
  { x: 6, y: 0 },
  { x: 10, y: 2 },
];

const props = defineProps<SpinnerProps>();
</script>

<template>
  <svg
    v-bind="spinnerRoot('loading', props)"
    fill="currentColor"
    role="presentation"
    viewBox="0 0 15 15"
  >
    <path
      v-for="(segment, index) in SEGMENTS"
      :key="`${segment.x}-${segment.y}`"
      class="ld-loading-segment"
      :d="BLOCK"
      :style="step(index)"
      :transform="`translate(${segment.x} ${segment.y})`"
    />
  </svg>
</template>
