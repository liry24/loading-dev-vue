import type { CapProps } from "./cap";
import type { EasingProps } from "./easing";

export interface SpinnerProps {
  color?: string;
  duration?: number;
  playState?: "paused" | "running";
  size?: number;
}

export interface ArcProps extends SpinnerProps, EasingProps, CapProps {}
export interface AtomProps extends SpinnerProps, EasingProps {}
export interface CascadeProps extends SpinnerProps, CapProps {}
export interface ClockProps extends SpinnerProps, EasingProps {}
export interface CometProps extends SpinnerProps, EasingProps {}
export interface DualProps extends SpinnerProps, EasingProps, CapProps {}
export interface OrbitProps extends SpinnerProps, EasingProps {}
export interface RadarProps extends SpinnerProps, EasingProps {}
export interface RingProps extends SpinnerProps, EasingProps, CapProps {}
export interface SnakeProps extends SpinnerProps, EasingProps, CapProps {}
export interface TraceProps extends SpinnerProps, EasingProps, CapProps {}

export type BlocksSweep = "columns" | "diagonal" | "rows";
export const DEFAULT_BLOCKS_SWEEP: BlocksSweep = "diagonal";
export interface BlocksProps extends SpinnerProps {
  sweep?: BlocksSweep;
}

export type RippleDirection = "in" | "out";
export const DEFAULT_RIPPLE_DIRECTION: RippleDirection = "out";
export interface RippleProps extends SpinnerProps {
  direction?: RippleDirection;
}

export type WaveOrigin = "bottom" | "center";
export const DEFAULT_WAVE_ORIGIN: WaveOrigin = "center";
export interface WaveProps extends SpinnerProps {
  origin?: WaveOrigin;
}
