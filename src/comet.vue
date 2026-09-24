<script setup lang="ts">
import { spinClass } from "./easing";
import { spinnerRoot } from "./frame";
import type { CometProps } from "./types";

const props = defineProps<CometProps>();
</script>

<template>
  <div v-bind="spinnerRoot('comet', props)">
    <div :class="spinClass('comet', props.easing)">
      <div class="ld-comet-tail" />
      <div class="ld-comet-head" />
    </div>
  </div>
</template>
