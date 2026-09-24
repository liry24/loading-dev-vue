import { existsSync, readFileSync, realpathSync } from "node:fs";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "tsdown";

const fs = {
  fileExists: existsSync,
  readFile: (file: string) => (existsSync(file) ? readFileSync(file, "utf8") : undefined),
  realpath: realpathSync,
};

export function buildConfig(vapor: boolean) {
  const entry: Record<string, string> = vapor
    ? { index: "src/vapor.ts" }
    : { index: "src/index.ts", "index.node": "src/index.node.ts" };
  return {
    entry,
    outDir: vapor ? "dist/vapor" : "dist/vdom",
    format: "esm" as const,
    dts: { vue: { vueCompilerOptions: { vapor } } },
    css: { inject: true },
    deps: { neverBundle: ["vue"] },
    plugins: [vue({ isProduction: true, script: { fs }, features: { vapor } })],
  };
}

export default defineConfig(buildConfig(false));
