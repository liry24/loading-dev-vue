<script setup lang="ts">
import { linecap } from "./cap";
import { spinnerRoot, step } from "./frame";
import type { CascadeProps } from "./types";

const RADII = [10.5, 7, 3.5];

const props = defineProps<CascadeProps>();
</script>

<template>
  <svg
    v-bind="spinnerRoot('cascade', props)"
    fill="none"
    role="presentation"
    stroke="currentColor"
    :stroke-linecap="linecap(props.cap)"
    stroke-width="2"
    viewBox="0 0 24 24"
  >
    <circle
      v-for="(r, index) in RADII"
      :key="r"
      class="ld-cascade-arc"
      cx="12"
      cy="12"
      :r="r"
      :stroke-dasharray="`${(Math.PI * r) / 2} ${(Math.PI * r * 3) / 2}`"
      :style="step(index)"
    />
  </svg>
</template>
