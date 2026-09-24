import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

const RING = [0, 1, 2, 7, null, 3, 6, 5, 4];

export function Swirl(props: SpinnerProps) {
  return (
    <div {...spinnerRoot("swirl", props)}>
      {RING.map((place, index) =>
        place === null ? (
          <div key={index} />
        ) : (
          <div class="ld-swirl-cell" key={index} style={step(place)} />
        ),
      )}
    </div>
  );
}

Swirl.props = { ...spinnerProps };
