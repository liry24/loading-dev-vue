import type { SpinnerName } from "./motion";

export type Easing = "linear" | "ease-in-out" | "stacked";

export const DEFAULT_EASING: Easing = "linear";

export interface EasingProps {
  easing?: Easing;
}

export function spinClass(name: SpinnerName, easing: Easing = DEFAULT_EASING): string {
  const base = `ld-${name}-spin`;
  return easing === "linear" ? base : `${base} ${base}-${easing}`;
}
