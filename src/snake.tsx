import { type CapProps, linecap } from "./cap";
import { type EasingProps, spinClass } from "./easing";
import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export interface SnakeProps extends SpinnerProps, EasingProps, CapProps {}

export function Snake({ cap, easing, ...rest }: SnakeProps) {
  return (
    <svg {...spinnerRoot("snake", rest)} fill="none" role="presentation" viewBox="0 0 24 24">
      <g class={spinClass("snake", easing)}>
        <circle
          class="ld-snake-dash"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-linecap={linecap(cap)}
          stroke-width="2.5"
        />
      </g>
    </svg>
  );
}

Snake.props = { ...spinnerProps, cap: String, easing: String };
