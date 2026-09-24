import { type CapProps, linecap } from "./cap";
import { type EasingProps, spinClass } from "./easing";
import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export interface ArcProps extends SpinnerProps, EasingProps, CapProps {}

export function Arc({ cap, easing, ...rest }: ArcProps) {
  return (
    <svg {...spinnerRoot("arc", rest)} fill="none" role="presentation" viewBox="0 0 24 24">
      <circle
        class={spinClass("arc", easing)}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-dasharray="18 44.8"
        stroke-linecap={linecap(cap)}
        stroke-width="2.5"
      />
    </svg>
  );
}

Arc.props = { ...spinnerProps, cap: String, easing: String };
