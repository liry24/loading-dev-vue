<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const BARS = Array.from({ length: 12 }, (_, index) => index);

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('classic', props)">
    <div class="ld-classic-inner">
      <div v-for="bar in BARS" :key="bar" class="ld-classic-bar" :style="step(bar)" />
    </div>
  </div>
</template>
