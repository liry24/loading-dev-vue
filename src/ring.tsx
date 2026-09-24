import { type CapProps, linecap } from "./cap";
import { type EasingProps, spinClass } from "./easing";
import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export interface RingProps extends SpinnerProps, EasingProps, CapProps {}

export function Ring({ cap, easing, ...rest }: RingProps) {
  return (
    <svg {...spinnerRoot("ring", rest)} fill="none" role="presentation" viewBox="0 0 24 24">
      <circle cx="12" cy="12" opacity="0.2" r="10" stroke="currentColor" stroke-width="2.5" />
      <circle
        class={spinClass("ring", easing)}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-dasharray="16 46.8"
        stroke-linecap={linecap(cap)}
        stroke-width="2.5"
      />
    </svg>
  );
}

Ring.props = { ...spinnerProps, cap: String, easing: String };
