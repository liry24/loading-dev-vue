import assert from "node:assert/strict";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { JSDOM } from "jsdom";

const outdir = resolve("build/test-browser");
const result = await Bun.build({
  entrypoints: [resolve("tests/vapor-browser-entry.ts")],
  target: "browser",
  outdir,
  define: {
    __VUE_OPTIONS_API__: "true",
    __VUE_PROD_DEVTOOLS__: "false",
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
  },
});
assert(result.success, "Vapor browser bundle failed");
assert(
  result.outputs.some((output) => output.path.endsWith(".css")),
  "Browser CSS was not bundled",
);

const window = new JSDOM("<!doctype html><html><body></body></html>").window;
for (const name of ["document", "Node", "Element", "SVGElement", "Text"]) {
  globalThis[name] = window[name];
}
globalThis.window = window;
await import(pathToFileURL(resolve(outdir, "vapor-browser-entry.js")).href);
console.log("Vapor: 29 DOM comparisons and reactive update passed");
