<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = Array.from({ length: 3 }, (_, index) => index);

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('leap', props)">
    <div v-for="index in DOTS" :key="index" class="ld-leap-wrapper" :style="step(index)">
      <div class="ld-leap-dot" />
    </div>
  </div>
</template>
