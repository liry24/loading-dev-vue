# Upstream tracking

upstream-base: 06f40dd1883f0f85571f5129d5f4998b7c0d7f1c

This repository is a Vue port of [jakubkrehel/loading](https://github.com/jakubkrehel/loading). Its Git history remains a fork of that repository. The SHA above is the last upstream commit reviewed for the Vue port.

The weekly [upstream workflow](.github/workflows/upstream.yml) compares this SHA with upstream `main` for `src`, `tests`, `README.md`, `LICENSE.md`, and `package.json`. Relevant changes create or update one `upstream-sync` issue. Nothing is merged automatically.

For each update:

1. Read the issue's compare link and decide which changes apply to the library.
2. Port applicable behavior and styles to Vue, preserving the 29-component API and CSS loading contract.
3. Run `bun run check`; inspect visual changes in a Vue consumer when relevant.
4. Advance `upstream-base` above to the reviewed upstream SHA and close the issue.

To compare locally, use `git fetch upstream main` and `git diff <upstream-base> upstream/main -- src tests README.md LICENSE.md package.json`. The `upstream` remote points to `https://github.com/jakubkrehel/loading.git`.
