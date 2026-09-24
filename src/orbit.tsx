import { type EasingProps, spinClass } from "./easing";
import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export interface OrbitProps extends SpinnerProps, EasingProps {}

export function Orbit({ easing, ...rest }: OrbitProps) {
  return (
    <div {...spinnerRoot("orbit", rest)}>
      <div class="ld-orbit-dot" />
      <div class={`ld-orbit-track ${spinClass("orbit", easing)}`} />
    </div>
  );
}

Orbit.props = { ...spinnerProps, easing: String };
