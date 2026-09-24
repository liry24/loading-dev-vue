import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const DOTS = [0, 1];

export function Eclipse(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("eclipse", props)}>
      {DOTS.map((index) => (
        <div class="ld-eclipse-dot" key={index} style={step(index)} />
      ))}
    </div>
  );
}

Eclipse.props = { ...spinnerProps };
