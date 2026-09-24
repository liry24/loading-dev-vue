<script setup lang="ts">
import { spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('morph', props)">
    <div class="ld-morph-shape" />
  </div>
</template>
