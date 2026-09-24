<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = [
  [8, 1.5],
  [12.5962, 3.4038],
  [14.5, 8],
  [12.5962, 12.5962],
  [8, 14.5],
  [3.4038, 12.5962],
  [1.5, 8],
  [3.4038, 3.4038],
] as const;

const props = defineProps<SpinnerProps>();
</script>

<template>
  <svg
    v-bind="spinnerRoot('circular-dots', props)"
    fill="currentColor"
    role="presentation"
    viewBox="0 0 16 16"
  >
    <circle
      v-for="(dot, index) in DOTS"
      :key="`${dot[0]}-${dot[1]}`"
      class="ld-circular-dots-dot"
      :cx="dot[0]"
      :cy="dot[1]"
      r="1.5"
      :style="step(index)"
    />
  </svg>
</template>
