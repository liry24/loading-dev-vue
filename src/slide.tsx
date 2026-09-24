import { spinnerProps, cssVars, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOT = 34;

const GAP = 20;

const FAR = `${(((DOT + GAP) / DOT) * 100).toFixed(1)}%`;

const RESTS = [`translate(${FAR}, 0)`, "translate(0, 0)", `translate(0, ${FAR})`];

export function Slide(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("slide", props)}>
      {RESTS.map((rest, index) => (
        <div
          class="ld-slide-dot"
          key={rest}
          style={cssVars({ ...step(index), "--ld-slide-rest": rest })}
        />
      ))}
    </div>
  );
}

Slide.props = { ...spinnerProps };
