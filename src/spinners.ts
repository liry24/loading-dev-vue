import Arc from "./arc.vue";
import Atom from "./atom.vue";
import Blocks from "./blocks.vue";
import BouncingDots from "./bouncing-dots.vue";
import Cascade from "./cascade.vue";
import CircularDots from "./circular-dots.vue";
import Classic from "./classic.vue";
import ClassicV2 from "./classic-v2.vue";
import Clock from "./clock.vue";
import Comet from "./comet.vue";
import Compass from "./compass.vue";
import Dual from "./dual.vue";
import Eclipse from "./eclipse.vue";
import Flip from "./flip.vue";
import Gather from "./gather.vue";
import Leap from "./leap.vue";
import LinearDots from "./linear-dots.vue";
import Loading from "./loading.vue";
import Morph from "./morph.vue";
import type { SpinnerName } from "./motion";
import Orbit from "./orbit.vue";
import Pulse from "./pulse.vue";
import Radar from "./radar.vue";
import Ring from "./ring.vue";
import Ripple from "./ripple.vue";
import Slide from "./slide.vue";
import Snake from "./snake.vue";
import Swirl from "./swirl.vue";
import Trace from "./trace.vue";
import Wave from "./wave.vue";

export const SPINNERS = {
  arc: Arc,
  atom: Atom,
  blocks: Blocks,
  "bouncing-dots": BouncingDots,
  cascade: Cascade,
  "circular-dots": CircularDots,
  classic: Classic,
  "classic-v2": ClassicV2,
  clock: Clock,
  comet: Comet,
  compass: Compass,
  dual: Dual,
  eclipse: Eclipse,
  flip: Flip,
  gather: Gather,
  leap: Leap,
  "linear-dots": LinearDots,
  loading: Loading,
  morph: Morph,
  orbit: Orbit,
  pulse: Pulse,
  radar: Radar,
  ring: Ring,
  ripple: Ripple,
  slide: Slide,
  snake: Snake,
  swirl: Swirl,
  trace: Trace,
  wave: Wave,
} satisfies Record<SpinnerName, unknown>;
