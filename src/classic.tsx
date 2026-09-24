import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const BARS = Array.from({ length: 12 }, (_, index) => index);

export function Classic(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("classic", props)}>
      <div class="ld-classic-inner">
        {BARS.map((bar) => (
          <div class="ld-classic-bar" key={bar} style={step(bar)} />
        ))}
      </div>
    </div>
  );
}

Classic.props = { ...spinnerProps };
