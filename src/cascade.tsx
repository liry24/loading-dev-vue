import { type CapProps, linecap } from "./cap";
import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

export interface CascadeProps extends SpinnerProps, CapProps {}

const RADII = [10.5, 7, 3.5];

export function Cascade({ cap, ...rest }: CascadeProps) {
  return (
    <svg
      {...spinnerRoot("cascade", rest)}
      fill="none"
      role="presentation"
      stroke="currentColor"
      stroke-linecap={linecap(cap)}
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      {RADII.map((r, index) => {
        const circumference = 2 * Math.PI * r;
        return (
          <circle
            class="ld-cascade-arc"
            cx="12"
            cy="12"
            key={r}
            r={r}
            stroke-dasharray={`${circumference / 4} ${(circumference * 3) / 4}`}
            style={step(index)}
          />
        );
      })}
    </svg>
  );
}

Cascade.props = { ...spinnerProps, cap: String };
