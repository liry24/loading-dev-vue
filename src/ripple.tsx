import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

export type RippleDirection = "in" | "out";

export const DEFAULT_RIPPLE_DIRECTION: RippleDirection = "out";

export interface RippleProps extends SpinnerProps {
  direction?: RippleDirection;
}

const RINGS = Array.from({ length: 3 }, (_, index) => index);

export function Ripple({ direction = DEFAULT_RIPPLE_DIRECTION, ...rest }: RippleProps) {
  return (
    <div {...spinnerRoot("ripple", rest)}>
      {RINGS.map((index) => (
        <div class={`ld-ripple-ring ld-ripple-ring-${direction}`} key={index} style={step(index)} />
      ))}
    </div>
  );
}

Ripple.props = { ...spinnerProps, direction: String };
