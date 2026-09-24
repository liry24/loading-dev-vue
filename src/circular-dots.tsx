import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = [
  [8, 1.5],
  [12.5962, 3.4038],
  [14.5, 8],
  [12.5962, 12.5962],
  [8, 14.5],
  [3.4038, 12.5962],
  [1.5, 8],
  [3.4038, 3.4038],
] as const;

export function CircularDots(props: SpinnerProps) {
  return (
    <svg
      {...spinnerRoot("circular-dots", props)}
      fill="currentColor"
      role="presentation"
      viewBox="0 0 16 16"
    >
      {DOTS.map(([cx, cy], index) => (
        <circle
          class="ld-circular-dots-dot"
          cx={cx}
          cy={cy}
          key={`${cx}-${cy}`}
          r="1.5"
          style={step(index)}
        />
      ))}
    </svg>
  );
}

CircularDots.props = { ...spinnerProps };
