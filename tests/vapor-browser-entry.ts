import { createApp, createVaporApp, nextTick, reactive } from "vue";
import { SPINNERS as VDOM_SPINNERS } from "loading-dev-vue";
import { SPINNERS as VAPOR_SPINNERS } from "loading-dev-vue/vapor";

function assert(value: unknown, message = "Vapor assertion failed"): asserts value {
  if (!value) throw new Error(message);
}

assert(Object.keys(VAPOR_SPINNERS).length === 29);

for (const [name, Spinner] of Object.entries(VAPOR_SPINNERS)) {
  const vdomHost = document.createElement("div");
  const vaporHost = document.createElement("div");
  const props = { size: 0, color: "rebeccapurple", duration: 0, class: "custom-spinner" };
  const vdomApp = createApp(VDOM_SPINNERS[name as keyof typeof VDOM_SPINNERS], props);
  const vaporApp = createVaporApp(Spinner, props);
  vdomApp.mount(vdomHost);
  vaporApp.mount(vaporHost);
  assert(vaporHost.firstElementChild?.classList.contains(`ld-${name}`));
  assert(vaporHost.firstElementChild?.classList.contains("custom-spinner"));
  assert(vaporHost.firstElementChild?.getAttribute("style")?.includes("--ld-size: 0px"));
  assert(vaporHost.firstElementChild?.getAttribute("style")?.includes("--ld-duration: 0ms"));
  const structure = (node: Node | null): unknown => {
    if (!node || node.nodeType === 8) return null;
    if (node.nodeType === 3) return node.textContent?.trim() || null;
    const element = node as Element;
    return [
      element.namespaceURI,
      element.tagName,
      [...element.attributes]
        .filter(({ value }) => value !== "")
        .map(({ name, value }) => [name, value])
        .sort(([a], [b]) => a.localeCompare(b)),
      [...element.childNodes].map(structure).filter((child) => child !== null),
    ];
  };
  assert(
    JSON.stringify(structure(vdomHost.firstElementChild)) ===
      JSON.stringify(structure(vaporHost.firstElementChild)),
    `${name}\nVDOM: ${vdomHost.innerHTML}\nVapor: ${vaporHost.innerHTML}`,
  );
  vdomApp.unmount();
  vaporApp.unmount();
}

const host = document.createElement("div");
const props = reactive({ size: 20, color: "red", class: "custom-spinner" });
const app = createVaporApp(VAPOR_SPINNERS.arc, props);
app.mount(host);
props.size = 32;
props.color = "blue";
await nextTick();
assert(host.firstElementChild?.getAttribute("style")?.includes("--ld-size: 32px"));
assert(host.firstElementChild?.getAttribute("style")?.includes("color: blue"));
app.unmount();
