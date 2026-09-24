import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = Array.from({ length: 3 }, (_, index) => index);

export function LinearDots(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("linear-dots", props)}>
      {DOTS.map((dot) => (
        <div class="ld-linear-dots-dot" key={dot} style={step(dot)} />
      ))}
    </div>
  );
}

LinearDots.props = { ...spinnerProps };
