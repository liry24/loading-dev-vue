export const DURATION_VAR = "--ld-duration";

export const PLAY_STATE_VAR = "--ld-play-state";

export const SIZE_VAR = "--ld-size";

export const STEP_VAR = "--ld-step";

export const DEFAULT_SIZE = 20;

export const SPINNER_MOTION = {
  arc: 800,
  atom: 1000,
  blocks: 1300,
  "bouncing-dots": 500,
  cascade: 1500,
  "circular-dots": 800,
  classic: 1200,
  "classic-v2": 800,
  clock: 1200,
  comet: 700,
  compass: 500,
  dual: 1000,
  eclipse: 1200,
  flip: 1200,
  gather: 1600,
  leap: 1800,
  "linear-dots": 900,
  loading: 1000,
  morph: 1200,
  orbit: 750,
  pulse: 1200,
  radar: 1500,
  ring: 800,
  ripple: 1200,
  slide: 2400,
  snake: 1400,
  swirl: 1200,
  trace: 1200,
  wave: 900,
} as const satisfies Record<string, number>;

export type SpinnerName = keyof typeof SPINNER_MOTION;
