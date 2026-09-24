import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const BLOCK = "M0 0h1v1H0zM2 0h1v1H2zM0 2h1v1H0zM2 2h1v1H2z";

const SEGMENTS = [
  { x: 12, y: 6 },
  { x: 10, y: 10 },
  { x: 6, y: 12 },
  { x: 2, y: 10 },
  { x: 0, y: 6 },
  { x: 2, y: 2 },
  { x: 6, y: 0 },
  { x: 10, y: 2 },
];

export function Loading(props: SpinnerProps) {
  return (
    <svg
      {...spinnerRoot("loading", props)}
      fill="currentColor"
      role="presentation"
      viewBox="0 0 15 15"
    >
      {SEGMENTS.map(({ x, y }, segment) => (
        <path
          class="ld-loading-segment"
          d={BLOCK}
          key={`${x}-${y}`}
          style={step(segment)}
          transform={`translate(${x} ${y})`}
        />
      ))}
    </svg>
  );
}

Loading.props = { ...spinnerProps };
