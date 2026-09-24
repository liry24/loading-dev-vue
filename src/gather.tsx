import { spinnerProps, cssVars, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

const BLOCKS = [
  { x: 1, y: 1 },
  { x: -1, y: 1 },
  { x: 1, y: -1 },
  { x: -1, y: -1 },
];

export function Gather(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("gather", props)}>
      <div class="ld-gather-group">
        {BLOCKS.map(({ x, y }) => (
          <div
            class="ld-gather-block"
            key={`${x}${y}`}
            style={cssVars({ "--ld-gather-x": x, "--ld-gather-y": y })}
          />
        ))}
      </div>
    </div>
  );
}

Gather.props = { ...spinnerProps };
