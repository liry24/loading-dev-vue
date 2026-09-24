<script setup lang="ts">
import { spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

const props = defineProps<SpinnerProps>();
</script>

<template>
  <div v-bind="spinnerRoot('flip', props)">
    <div class="ld-flip-face" />
  </div>
</template>
