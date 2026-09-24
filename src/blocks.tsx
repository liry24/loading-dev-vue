import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

export type BlocksSweep = "columns" | "diagonal" | "rows";

export const DEFAULT_BLOCKS_SWEEP: BlocksSweep = "diagonal";

export interface BlocksProps extends SpinnerProps {
  sweep?: BlocksSweep;
}

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

export function Blocks({ sweep = DEFAULT_BLOCKS_SWEEP, ...rest }: BlocksProps) {
  const { place } = SWEEPS[sweep];
  return (
    <div {...spinnerRoot("blocks", rest)}>
      {CELLS.map((cell) => (
        <div
          class={`ld-blocks-cell ld-blocks-cell-${sweep}`}
          key={`${cell.col}-${cell.row}`}
          style={step(place(cell))}
        />
      ))}
    </div>
  );
}

Blocks.props = { ...spinnerProps, sweep: String };
