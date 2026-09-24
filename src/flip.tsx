import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export function Flip(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("flip", props)}>
      <div class="ld-flip-face" />
    </div>
  );
}

Flip.props = { ...spinnerProps };
