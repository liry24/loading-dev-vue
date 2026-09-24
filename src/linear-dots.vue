<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = Array.from({ length: 3 }, (_, index) => index);

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('linear-dots', props)">
    <div v-for="dot in DOTS" :key="dot" class="ld-linear-dots-dot" :style="step(dot)" />
  </div>
</template>
