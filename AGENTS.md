# Repository guidance

This is `loading-dev-vue`, a Vue 3.5+ port of the 29 React spinners in [jakubkrehel/loading](https://github.com/jakubkrehel/loading). The original MIT license and attribution are in `LICENSE.md`.

## Commands

- `bun install` — install from `bun.lock`.
- `bun run check` — formatting, lint, unused exports, types, both builds, SSR tests, and Vapor browser tests.
- `bun run dev` — watch the normal library build.

## Structure

- `src/<spinner>.vue` is the single source for each spinner. Use `<script setup lang="ts">`, typed `defineProps`, and `spinnerRoot` on the root element. Export it from `src/components.ts` and `src/spinners.ts`.
- `tsdown.config.ts` builds Vue 3.5-compatible VDOM and `tsdown.vapor.config.ts` builds Vapor sequentially into separate directories. Keep this order: parallel builds share the Vue plugin's descriptor cache and can generate VDOM in both outputs.
- `src/style.css` holds spinner styles. Browser entries `src/index.ts` and `src/vapor.ts` import it automatically. The package's Node conditions point to the CSS-free VDOM SSR build, including `/vapor` while Vue 3.6 RC lacks Node Vapor exports.
- `src/motion.ts` owns each spinner's default duration. `spinnerRoot` writes `--ld-default-duration` so a parent `--ld-duration` can override it.
- `tests/` checks all 29 spinners through SSR and browser DOM comparison, option defaults, CSS coverage, reactive Vapor updates, and public exports. Keep Vue 3.5 package-consumer coverage and pin Vue 3.6.0-rc.9 for Vapor tests.
- `UPSTREAM.md` records the last reviewed React commit. The scheduled workflow opens one issue for upstream library changes; port and verify them manually before advancing the SHA.

Keep commit titles as `type(scope): short summary`, under 60 characters. Use conventional commits because uppt derives future release versions from them. Release `v0.2.0` through the release PR workflow after the feature PR is merged.
