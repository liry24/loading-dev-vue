# Repository guidance

This is `loading-dev-vue`, a Vue 3.5+ port of the 29 React spinners in [jakubkrehel/loading](https://github.com/jakubkrehel/loading). The original MIT license and attribution are in `LICENSE.md`.

## Commands

- `bun install` — install from `bun.lock`.
- `bun run check` — formatting, lint, unused exports, types, SSR tests, and package build.
- `bun run dev` — watch the library build.

## Structure

- `src/<spinner>.tsx` has one functional Vue component. Declare its runtime props using `spinnerProps`, pass common props to `spinnerRoot`, and export it from `src/components.ts` and `src/spinners.ts`.
- `src/style.css` holds spinner styles. The browser entry `src/index.ts` imports it automatically; the Node entry `src/index.node.ts` supports SSR without a Node CSS import.
- `src/motion.ts` owns each spinner's default duration. `spinnerRoot` writes `--ld-default-duration` so a parent `--ld-duration` can override it.
- `tests/` checks all 29 spinners through Vue SSR, option defaults, CSS coverage, and public exports.
- `UPSTREAM.md` records the last reviewed React commit. The scheduled workflow opens one issue for upstream library changes; port and verify them manually before advancing the SHA.

Keep commit titles as `type(scope): short summary`, under 60 characters. Use conventional commits because uppt derives future release versions from them. The initial `0.1.0` version is published directly, then tagged `v0.1.0`; later versions use the release PR workflow.
