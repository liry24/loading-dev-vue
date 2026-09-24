<script setup lang="ts">
import { spinnerRoot, step, cssVars } from "./frame";
import type { SpinnerProps } from "./types";

const DOT = 34;

const GAP = 20;

const FAR = `${(((DOT + GAP) / DOT) * 100).toFixed(1)}%`;

const RESTS = [`translate(${FAR}, 0)`, "translate(0, 0)", `translate(0, ${FAR})`];

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('slide', props)">
    <div
      v-for="(rest, index) in RESTS"
      :key="rest"
      class="ld-slide-dot"
      :style="cssVars({ ...step(index), '--ld-slide-rest': rest })"
    />
  </div>
</template>
