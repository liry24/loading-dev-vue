import { defineConfig } from "tsdown";

export default defineConfig({
  entry: { index: "src/index.ts", "index.node": "src/index.node.ts" },
  format: "esm",
  dts: true,
  css: { inject: true },
  deps: { neverBundle: ["vue", "vue/jsx-runtime"] },
  inputOptions: { transform: { jsx: { runtime: "automatic", importSource: "vue" } } },
});
