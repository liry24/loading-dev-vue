<script setup lang="ts">
import { spinClass } from "./easing";
import { spinnerRoot } from "./frame";
import type { OrbitProps } from "./types";

const props = defineProps<OrbitProps>();
</script>

<template>
  <div v-bind="spinnerRoot('orbit', props)">
    <div class="ld-orbit-dot" />
    <div :class="`ld-orbit-track ${spinClass('orbit', props.easing)}`" />
  </div>
</template>
