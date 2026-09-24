<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = [0, 1];

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('eclipse', props)">
    <div v-for="index in DOTS" :key="index" class="ld-eclipse-dot" :style="step(index)" />
  </div>
</template>
