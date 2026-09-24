import { type EasingProps, spinClass } from "./easing";
import { spinnerProps, cssVars, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

export interface AtomProps extends SpinnerProps, EasingProps {}

const ORBITS = Array.from({ length: 3 }, (_, index) => index);

const TILT = 180 / ORBITS.length;

export function Atom({ easing, ...rest }: AtomProps) {
  return (
    <div {...spinnerRoot("atom", rest)}>
      <div class="ld-atom-shell" />
      {ORBITS.map((index) => (
        <div
          class="ld-atom-orbit"
          key={index}
          style={cssVars({ "--ld-atom-tilt": `${index * TILT}deg` })}
        >
          <div class={spinClass("atom", easing)} style={step(index)}>
            <div class="ld-atom-ring" />
          </div>
        </div>
      ))}
    </div>
  );
}

Atom.props = { ...spinnerProps, easing: String };
