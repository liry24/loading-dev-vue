import { createSSRApp, h, type Component } from "vue";
import { renderToString } from "vue/server-renderer";
import { describe, expect, it } from "vitest";
import { SPINNERS as vdom } from "loading-dev-vue";
import { SPINNERS as vapor } from "loading-dev-vue/vapor";

describe("Node package entries", () => {
  it.each(Object.keys(vdom))("renders %s via both CSS-free entries", async (name) => {
    const props = { size: 0, duration: 0, color: "red", class: "custom-spinner" };
    const render = (Spinner: Component) =>
      renderToString(createSSRApp({ render: () => h(Spinner, props) }));
    const expected = await render(vdom[name as keyof typeof vdom]);
    expect(await render(vapor[name as keyof typeof vapor])).toBe(expected);
    expect(expected).toContain("--ld-size:0px");
  });
});
