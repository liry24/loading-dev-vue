import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = Array.from({ length: 3 }, (_, index) => index);

export function BouncingDots(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("bouncing-dots", props)}>
      {DOTS.map((dot) => (
        <div class="ld-bouncing-dots-dot" key={dot} style={step(dot)} />
      ))}
    </div>
  );
}

BouncingDots.props = { ...spinnerProps };
