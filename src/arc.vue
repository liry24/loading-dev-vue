<script setup lang="ts">
import { linecap } from "./cap";
import { spinClass } from "./easing";
import { spinnerRoot } from "./frame";
import type { ArcProps } from "./types";

const props = defineProps<ArcProps>();
</script>

<template>
  <svg v-bind="spinnerRoot('arc', props)" fill="none" role="presentation" viewBox="0 0 24 24">
    <circle
      :class="spinClass('arc', props.easing)"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-dasharray="18 44.8"
      :stroke-linecap="linecap(props.cap)"
      stroke-width="2.5"
    />
  </svg>
</template>
