import { defineConfig } from "tsdown";
import { buildConfig } from "./tsdown.config.ts";

export default defineConfig(buildConfig(true));
