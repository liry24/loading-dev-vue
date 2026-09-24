<script setup lang="ts">
import { linecap } from "./cap";
import { spinClass } from "./easing";
import { spinnerRoot } from "./frame";
import type { TraceProps } from "./types";

const VIEW = 20;

const SIDE = 17.5;

const RADIUS = 4;

const PERIMETER = 4 * (SIDE - 2 * RADIUS) + 2 * Math.PI * RADIUS;

const DASH = 16;

const RECT = {
  height: SIDE,
  rx: RADIUS,
  width: SIDE,
  x: (VIEW - SIDE) / 2,
  y: (VIEW - SIDE) / 2,
};

const props = defineProps<TraceProps>();
</script>

<template>
  <svg
    v-bind="spinnerRoot('trace', props)"
    fill="none"
    role="presentation"
    stroke="currentColor"
    stroke-width="2.5"
    :viewBox="`0 0 ${VIEW} ${VIEW}`"
  >
    <rect v-bind="RECT" opacity="0.2" />
    <rect
      v-bind="RECT"
      :class="spinClass('trace', props.easing)"
      :stroke-dasharray="`${DASH} ${PERIMETER - DASH}`"
      :stroke-linecap="linecap(props.cap)"
    />
  </svg>
</template>
