<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import { DEFAULT_WAVE_ORIGIN } from "./types";
import type { WaveProps } from "./types";

const BARS = Array.from({ length: 5 }, (_, index) => index);

const props = defineProps<WaveProps>();
</script>

<template>
  <div v-bind="spinnerRoot('wave', props)">
    <div
      v-for="index in BARS"
      :key="index"
      :class="`ld-wave-bar ld-wave-bar-${props.origin ?? DEFAULT_WAVE_ORIGIN}`"
      :style="step(index)"
    />
  </div>
</template>
