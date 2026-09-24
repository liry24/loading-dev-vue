import { spinnerProps, spinnerRoot } from "./frame";
import type { SpinnerProps } from "./types";

export function Pulse(props: SpinnerProps) {
  return (
    <svg {...spinnerRoot("pulse", props)} fill="none" role="presentation" viewBox="0 0 16 16">
      <circle class="ld-pulse-ring" cx="8" cy="8" fill="currentColor" r="8" />
      <circle cx="8" cy="8" fill="currentColor" r="2" />
    </svg>
  );
}

Pulse.props = { ...spinnerProps };
