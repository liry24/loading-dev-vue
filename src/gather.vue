<script setup lang="ts">
import { spinnerRoot, cssVars } from "./frame";
import type { SpinnerProps } from "./types";

const BLOCKS = [
  { x: 1, y: 1 },
  { x: -1, y: 1 },
  { x: 1, y: -1 },
  { x: -1, y: -1 },
];

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('gather', props)">
    <div class="ld-gather-group">
      <div
        v-for="block in BLOCKS"
        :key="`${block.x}${block.y}`"
        class="ld-gather-block"
        :style="cssVars({ '--ld-gather-x': block.x, '--ld-gather-y': block.y })"
      />
    </div>
  </div>
</template>
