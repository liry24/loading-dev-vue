import { createSSRApp, h, type Component } from "vue";
import { renderToString } from "vue/server-renderer";
import { describe, expect, it } from "vitest";
import { SPINNER_MOTION, SPINNERS } from "../src";

function render(Spinner: Component, props = {}) {
  return renderToString(createSSRApp({ render: () => h(Spinner, props) }));
}

describe.each(Object.entries(SPINNERS))("%s", (name, Spinner) => {
  it("renders a decorative spinner with its default motion", async () => {
    const html = await render(Spinner);
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain(`class="ld-${name}"`);
    expect(html).toContain("--ld-size:20px");
    expect(html).toContain(
      `--ld-default-duration:${SPINNER_MOTION[name as keyof typeof SPINNER_MOTION]}ms`,
    );
    expect(html).not.toContain("--ld-duration:");
    expect(html).not.toContain("--ld-play-state:");
    expect(html).not.toContain("<style");
  });

  it("applies appearance, motion and class attributes", async () => {
    const html = await render(Spinner, {
      class: "custom-spinner",
      color: "rebeccapurple",
      duration: 1500,
      playState: "paused",
      size: 32,
    });
    expect(html).toContain(`class="ld-${name} custom-spinner"`);
    expect(html).toContain("--ld-size:32px");
    expect(html).toContain("color:rebeccapurple");
    expect(html).toContain("--ld-duration:1500ms");
    expect(html).toContain("--ld-play-state:paused");
  });

  it("keeps explicit zero values", async () => {
    const html = await render(Spinner, { duration: 0, size: 0 });
    expect(html).toContain("--ld-size:0px");
    expect(html).toContain("--ld-duration:0ms");
  });
});
