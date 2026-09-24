<script setup lang="ts">
import { linecap } from "./cap";
import { spinClass } from "./easing";
import { spinnerRoot } from "./frame";
import type { SnakeProps } from "./types";

const props = defineProps<SnakeProps>();
</script>

<template>
  <svg v-bind="spinnerRoot('snake', props)" fill="none" role="presentation" viewBox="0 0 24 24">
    <g :class="spinClass('snake', props.easing)">
      <circle
        class="ld-snake-dash"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        :stroke-linecap="linecap(props.cap)"
        stroke-width="2.5"
      />
    </g>
  </svg>
</template>
