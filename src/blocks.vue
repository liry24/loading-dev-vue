<script setup lang="ts">
import { spinnerRoot, step } from "./frame";
import { DEFAULT_BLOCKS_SWEEP } from "./types";
import type { BlocksProps, BlocksSweep } from "./types";

const SIDE = 3;

interface Cell {
  col: number;
  row: number;
}

const CELLS: Cell[] = Array.from({ length: SIDE * SIDE }, (_, index) => ({
  col: index % SIDE,
  row: Math.floor(index / SIDE),
}));

const SWEEPS: Record<BlocksSweep, { count: number; place: (cell: Cell) => number }> = {
  columns: { count: SIDE, place: ({ col }) => col },
  diagonal: { count: SIDE * 2 - 1, place: ({ col, row }) => row + col },
  rows: { count: SIDE, place: ({ row }) => row },
};

const props = defineProps<BlocksProps>();
</script>

<template>
  <div v-bind="spinnerRoot('blocks', props)">
    <div
      v-for="cell in CELLS"
      :key="`${cell.col}-${cell.row}`"
      :class="`ld-blocks-cell ld-blocks-cell-${props.sweep ?? DEFAULT_BLOCKS_SWEEP}`"
      :style="step(SWEEPS[props.sweep ?? DEFAULT_BLOCKS_SWEEP].place(cell))"
    />
  </div>
</template>
