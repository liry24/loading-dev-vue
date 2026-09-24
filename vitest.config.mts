import { existsSync, readFileSync, realpathSync } from "node:fs";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    vue({
      script: {
        fs: {
          fileExists: existsSync,
          readFile: (file: string) => (existsSync(file) ? readFileSync(file, "utf8") : undefined),
          realpath: realpathSync,
        },
      },
    }),
  ],
  test: { environment: "node", include: ["tests/**/*.test.ts"] },
});
