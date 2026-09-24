<script setup lang="ts">
import { linecap } from "./cap";
import { spinClass } from "./easing";
import { spinnerRoot } from "./frame";
import type { DualProps } from "./types";

const props = defineProps<DualProps>();
</script>

<template>
  <svg
    v-bind="spinnerRoot('dual', props)"
    fill="none"
    role="presentation"
    stroke="currentColor"
    :stroke-linecap="linecap(props.cap)"
    stroke-width="2.5"
    viewBox="0 0 24 24"
  >
    <circle
      :class="spinClass('dual', props.easing)"
      cx="12"
      cy="12"
      r="10"
      stroke-dasharray="18 44.8"
    />
    <circle
      :class="`ld-dual-inner ${spinClass('dual', props.easing)}`"
      cx="12"
      cy="12"
      r="5.5"
      stroke-dasharray="10 24.6"
    />
  </svg>
</template>
