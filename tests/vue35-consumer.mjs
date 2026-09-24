import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const consumer = resolve(root, "build/vue35-consumer");
const { version } = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
execFileSync("bun", ["pm", "pack"], { cwd: root, stdio: "inherit" });
mkdirSync(consumer, { recursive: true });
writeFileSync(
  resolve(consumer, "package.json"),
  JSON.stringify({
    private: true,
    type: "module",
    dependencies: {
      "loading-dev-vue": `file:../../loading-dev-vue-${version}.tgz`,
      typescript: "5.9.3",
      vue: "3.5.43",
    },
  }),
);
writeFileSync(
  resolve(consumer, "check.mjs"),
  `import assert from "node:assert/strict";
import { createSSRApp, h, version } from "vue";
import { renderToString } from "vue/server-renderer";
import { SPINNERS } from "loading-dev-vue";
assert(version.startsWith("3.5."));
assert.equal(Object.keys(SPINNERS).length, 29);
for (const [name, Spinner] of Object.entries(SPINNERS)) {
  const html = await renderToString(createSSRApp({ render: () => h(Spinner, { size: 0, duration: 0 }) }));
  assert(html.includes("ld-" + name));
  assert(html.includes("--ld-size:0px"));
}
console.log("Vue 3.5 package consumer: 29 SSR spinners passed");
`,
);
writeFileSync(
  resolve(consumer, "check.ts"),
  `import type { Component } from "vue";
import { Arc, type ArcProps, SPINNERS } from "loading-dev-vue";
const props: ArcProps = { size: 0, duration: 0, easing: "linear", cap: "round" };
const component: Component = Arc;
const catalog: Component = SPINNERS.arc;
void [props, component, catalog];
`,
);
writeFileSync(
  resolve(consumer, "tsconfig.json"),
  JSON.stringify({
    compilerOptions: {
      target: "ES2022",
      module: "NodeNext",
      moduleResolution: "NodeNext",
      strict: true,
      noEmit: true,
      skipLibCheck: true,
    },
    include: ["check.ts"],
  }),
);
execFileSync("bun", ["install", "--ignore-scripts"], { cwd: consumer, stdio: "inherit" });
execFileSync("bun", [resolve(consumer, "check.mjs")], { cwd: consumer, stdio: "inherit" });
execFileSync("bun", ["x", "tsc", "-p", "tsconfig.json"], { cwd: consumer, stdio: "inherit" });
