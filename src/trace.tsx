import { type CapProps, linecap } from "./cap";
import { type EasingProps, spinClass } from "./easing";
import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export interface TraceProps extends SpinnerProps, EasingProps, CapProps {}

const VIEW = 20;

const SIDE = 17.5;

const RADIUS = 4;

const PERIMETER = 4 * (SIDE - 2 * RADIUS) + 2 * Math.PI * RADIUS;

const DASH = 16;

const RECT = {
  height: SIDE,
  rx: RADIUS,
  width: SIDE,
  x: (VIEW - SIDE) / 2,
  y: (VIEW - SIDE) / 2,
};

export function Trace({ cap, easing, ...rest }: TraceProps) {
  return (
    <svg
      {...spinnerRoot("trace", rest)}
      fill="none"
      role="presentation"
      stroke="currentColor"
      stroke-width="2.5"
      viewBox={`0 0 ${VIEW} ${VIEW}`}
    >
      <rect {...RECT} opacity="0.2" />
      <rect
        {...RECT}
        class={spinClass("trace", easing)}
        stroke-dasharray={`${DASH} ${PERIMETER - DASH}`}
        stroke-linecap={linecap(cap)}
      />
    </svg>
  );
}

Trace.props = { ...spinnerProps, cap: String, easing: String };
