import { type EasingProps, spinClass } from "./easing";
import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export interface CometProps extends SpinnerProps, EasingProps {}

export function Comet({ easing, ...rest }: CometProps) {
  return (
    <div {...spinnerRoot("comet", rest)}>
      <div class={spinClass("comet", easing)}>
        <div class="ld-comet-tail" />
        <div class="ld-comet-head" />
      </div>
    </div>
  );
}

Comet.props = { ...spinnerProps, easing: String };
