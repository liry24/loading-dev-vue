import { defineConfig } from "vitest/config";

export default defineConfig({
  oxc: { jsx: { runtime: "automatic", importSource: "vue" } },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
  },
});
