<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import { DEFAULT_RIPPLE_DIRECTION } from "./types";
import type { RippleProps } from "./types";

const RINGS = Array.from({ length: 3 }, (_, index) => index);

const props = defineProps<RippleProps>();
</script>

<template>
  <div v-bind="spinnerRoot('ripple', props)">
    <div
      v-for="index in RINGS"
      :key="index"
      :class="`ld-ripple-ring ld-ripple-ring-${props.direction ?? DEFAULT_RIPPLE_DIRECTION}`"
      :style="step(index)"
    />
  </div>
</template>
