import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = Array.from({ length: 3 }, (_, index) => index);

export function Leap(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("leap", props)}>
      {DOTS.map((index) => (
        <div class="ld-leap-wrapper" key={index} style={step(index)}>
          <div class="ld-leap-dot" />
        </div>
      ))}
    </div>
  );
}

Leap.props = { ...spinnerProps };
