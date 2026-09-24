import "./style.css";
import type { DefineVaporComponent } from "vue";
import * as base from "./components";

export * from "./components";

type Vaporized<C extends abstract new (...args: any) => any> = DefineVaporComponent<
  {},
  string,
  InstanceType<C>["$props"]
>;

export const Arc = base.Arc as unknown as Vaporized<typeof base.Arc>;
export const Atom = base.Atom as unknown as Vaporized<typeof base.Atom>;
export const Blocks = base.Blocks as unknown as Vaporized<typeof base.Blocks>;
export const BouncingDots = base.BouncingDots as unknown as Vaporized<typeof base.BouncingDots>;
export const Cascade = base.Cascade as unknown as Vaporized<typeof base.Cascade>;
export const CircularDots = base.CircularDots as unknown as Vaporized<typeof base.CircularDots>;
export const Classic = base.Classic as unknown as Vaporized<typeof base.Classic>;
export const ClassicV2 = base.ClassicV2 as unknown as Vaporized<typeof base.ClassicV2>;
export const Clock = base.Clock as unknown as Vaporized<typeof base.Clock>;
export const Comet = base.Comet as unknown as Vaporized<typeof base.Comet>;
export const Compass = base.Compass as unknown as Vaporized<typeof base.Compass>;
export const Dual = base.Dual as unknown as Vaporized<typeof base.Dual>;
export const Eclipse = base.Eclipse as unknown as Vaporized<typeof base.Eclipse>;
export const Flip = base.Flip as unknown as Vaporized<typeof base.Flip>;
export const Gather = base.Gather as unknown as Vaporized<typeof base.Gather>;
export const Leap = base.Leap as unknown as Vaporized<typeof base.Leap>;
export const LinearDots = base.LinearDots as unknown as Vaporized<typeof base.LinearDots>;
export const Loading = base.Loading as unknown as Vaporized<typeof base.Loading>;
export const Morph = base.Morph as unknown as Vaporized<typeof base.Morph>;
export const Orbit = base.Orbit as unknown as Vaporized<typeof base.Orbit>;
export const Pulse = base.Pulse as unknown as Vaporized<typeof base.Pulse>;
export const Radar = base.Radar as unknown as Vaporized<typeof base.Radar>;
export const Ring = base.Ring as unknown as Vaporized<typeof base.Ring>;
export const Ripple = base.Ripple as unknown as Vaporized<typeof base.Ripple>;
export const Slide = base.Slide as unknown as Vaporized<typeof base.Slide>;
export const Snake = base.Snake as unknown as Vaporized<typeof base.Snake>;
export const Swirl = base.Swirl as unknown as Vaporized<typeof base.Swirl>;
export const Trace = base.Trace as unknown as Vaporized<typeof base.Trace>;
export const Wave = base.Wave as unknown as Vaporized<typeof base.Wave>;

export const SPINNERS = base.SPINNERS as unknown as {
  [K in keyof typeof base.SPINNERS]: Vaporized<(typeof base.SPINNERS)[K]>;
};
