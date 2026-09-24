import { rmSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const target = resolve(root, "dist");
if (dirname(target) !== root) throw new Error("Unexpected build output path");
rmSync(target, { recursive: true, force: true });
