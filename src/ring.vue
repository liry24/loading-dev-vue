<script setup lang="ts">
import { linecap } from "./cap";
import { spinClass } from "./easing";
import { spinnerRoot } from "./frame";
import type { RingProps } from "./types";

const props = defineProps<RingProps>();
</script>

<template>
  <svg v-bind="spinnerRoot('ring', props)" fill="none" role="presentation" viewBox="0 0 24 24">
    <circle cx="12" cy="12" opacity="0.2" r="10" stroke="currentColor" stroke-width="2.5" />
    <circle
      :class="spinClass('ring', props.easing)"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-dasharray="16 46.8"
      :stroke-linecap="linecap(props.cap)"
      stroke-width="2.5"
    />
  </svg>
</template>
