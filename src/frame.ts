import type { CSSProperties } from "vue";
import {
  DEFAULT_SIZE,
  DURATION_VAR,
  PLAY_STATE_VAR,
  SIZE_VAR,
  SPINNER_MOTION,
  STEP_VAR,
  type SpinnerName,
} from "./motion";
import type { SpinnerProps } from "./types";

export function cssVars(
  vars: CSSProperties & Record<`--ld-${string}`, string | number>,
): CSSProperties {
  return vars;
}

export function step(index: number): CSSProperties {
  return cssVars({ [STEP_VAR]: index });
}

export function spinnerRoot(
  name: SpinnerName,
  { color, duration, playState, size = DEFAULT_SIZE }: SpinnerProps,
) {
  return {
    "aria-hidden": true,
    class: `ld-${name}`,
    style: cssVars({
      [SIZE_VAR]: `${size}px`,
      "--ld-default-duration": `${SPINNER_MOTION[name]}ms`,
      ...(color === undefined ? {} : { color }),
      ...(duration === undefined ? {} : { [DURATION_VAR]: `${duration}ms` }),
      ...(playState === undefined ? {} : { [PLAY_STATE_VAR]: playState }),
    }),
  };
}
