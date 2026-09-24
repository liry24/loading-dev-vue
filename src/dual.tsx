import { type CapProps, linecap } from "./cap";
import { type EasingProps, spinClass } from "./easing";
import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export interface DualProps extends SpinnerProps, EasingProps, CapProps {}

export function Dual({ cap, easing, ...rest }: DualProps) {
  return (
    <svg
      {...spinnerRoot("dual", rest)}
      fill="none"
      role="presentation"
      stroke="currentColor"
      stroke-linecap={linecap(cap)}
      stroke-width="2.5"
      viewBox="0 0 24 24"
    >
      <circle class={spinClass("dual", easing)} cx="12" cy="12" r="10" stroke-dasharray="18 44.8" />
      <circle
        class={`ld-dual-inner ${spinClass("dual", easing)}`}
        cx="12"
        cy="12"
        r="5.5"
        stroke-dasharray="10 24.6"
      />
    </svg>
  );
}

Dual.props = { ...spinnerProps, cap: String, easing: String };
