import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export function Morph(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("morph", props)}>
      <div class="ld-morph-shape" />
    </div>
  );
}

Morph.props = { ...spinnerProps };
