import { readFile } from "node:fs/promises";
import { createSSRApp, h, type Component } from "vue";
import { renderToString } from "vue/server-renderer";
import { describe, expect, it } from "vitest";
import {
  Arc,
  Atom,
  Blocks,
  BouncingDots,
  Cascade,
  CircularDots,
  Classic,
  ClassicV2,
  Clock,
  Comet,
  Compass,
  DEFAULT_BLOCKS_SWEEP,
  DEFAULT_CAP,
  DEFAULT_EASING,
  DEFAULT_RIPPLE_DIRECTION,
  DEFAULT_WAVE_ORIGIN,
  Dual,
  Eclipse,
  Flip,
  Gather,
  Leap,
  LinearDots,
  Loading,
  Morph,
  Orbit,
  Pulse,
  Radar,
  Ring,
  Ripple,
  Slide,
  Snake,
  SPINNERS,
  Swirl,
  Trace,
  Wave,
} from "../src";

const NAMED_SPINNERS = {
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
} satisfies typeof SPINNERS;

function render(Spinner: Component, props = {}) {
  return renderToString(createSSRApp({ render: () => h(Spinner, props) }));
}

describe("public exports", () => {
  it("exports all 29 spinners and documents them", async () => {
    expect(NAMED_SPINNERS).toEqual(SPINNERS);
    const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
    for (const name of Object.keys(NAMED_SPINNERS)) {
      const displayName = name
        .split("-")
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join("");
      expect(readme).toContain(`\`${displayName}\``);
    }
  });

  it.each([Arc, Atom, Clock, Comet, Dual, Orbit, Radar, Ring, Snake, Trace])(
    "uses the default easing",
    async (Spinner) => {
      expect(await render(Spinner)).toBe(await render(Spinner, { easing: DEFAULT_EASING }));
    },
  );

  it.each([Arc, Cascade, Dual, Ring, Snake, Trace])("uses the default cap", async (Spinner) => {
    expect(await render(Spinner)).toBe(await render(Spinner, { cap: DEFAULT_CAP }));
  });

  it("uses the exported spinner options as defaults", async () => {
    expect(await render(Blocks)).toBe(await render(Blocks, { sweep: DEFAULT_BLOCKS_SWEEP }));
    expect(await render(Ripple)).toBe(
      await render(Ripple, { direction: DEFAULT_RIPPLE_DIRECTION }),
    );
    expect(await render(Wave)).toBe(await render(Wave, { origin: DEFAULT_WAVE_ORIGIN }));
  });

  it("includes all spinner styles and reduced motion rules", async () => {
    const css = await readFile(new URL("../src/style.css", import.meta.url), "utf8");
    for (const name of Object.keys(SPINNERS)) expect(css).toContain(`.ld-${name} {`);
    expect(css).toContain("var(--ld-duration, var(--ld-default-duration))");
    expect(css).toContain("var(--ld-play-state, running)");
    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain("currentColor");
  });
});
