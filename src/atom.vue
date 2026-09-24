<script setup lang="ts">
import { spinClass } from "./easing";
import { spinnerRoot, step, cssVars } from "./frame";
import type { AtomProps } from "./types";

const ORBITS = Array.from({ length: 3 }, (_, index) => index);

const TILT = 180 / ORBITS.length;

const props = defineProps<AtomProps>();
</script>

<template>
  <div v-bind="spinnerRoot('atom', props)">
    <div class="ld-atom-shell" />
    <div
      v-for="index in ORBITS"
      :key="index"
      class="ld-atom-orbit"
      :style="cssVars({ '--ld-atom-tilt': `${index * TILT}deg` })"
    >
      <div :class="spinClass('atom', props.easing)" :style="step(index)">
        <div class="ld-atom-ring" />
      </div>
    </div>
  </div>
</template>
