import { spinnerProps, spinnerRoot, step } from "./frame";
import type { SpinnerProps } from "./types";

export type WaveOrigin = "bottom" | "center";

export const DEFAULT_WAVE_ORIGIN: WaveOrigin = "center";

export interface WaveProps extends SpinnerProps {
  origin?: WaveOrigin;
}

const BARS = Array.from({ length: 5 }, (_, index) => index);

export function Wave({ origin = DEFAULT_WAVE_ORIGIN, ...rest }: WaveProps) {
  return (
    <div {...spinnerRoot("wave", rest)}>
      {BARS.map((index) => (
        <div class={`ld-wave-bar ld-wave-bar-${origin}`} key={index} style={step(index)} />
      ))}
    </div>
  );
}

Wave.props = { ...spinnerProps, origin: String };
