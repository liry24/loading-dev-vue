# loading-dev-vue

Vue 3 port of [loading.dev](https://loading.dev)'s loading indicators.

```sh
bun add loading-dev-vue
```

```vue
<script setup lang="ts">
import { Arc } from "loading-dev-vue";
</script>

<template>
  <Arc :size="16" color="rebeccapurple" :duration="1200" />
</template>
```

All 29 components support `size` (pixels), `color`, `duration` (milliseconds), and `playState` (`running` or `paused`). Their CSS loads automatically when imported through a bundler. Vue 3.5 or later is required.

## Vapor mode (experimental)

The same 29 components are available from `loading-dev-vue/vapor` for Vue 3.6 or later. While Vue 3.6 is a release candidate, this entry is experimental; it is tested with **Vue 3.6.0-rc.9**. Mount it with `createVaporApp` without an interop plugin:

```ts
import { createVaporApp } from "vue";
import { Arc } from "loading-dev-vue/vapor";

createVaporApp(Arc, { size: 24 }).mount("#app");
```

The Vapor entry has the same names, props, types, and automatic browser CSS as the normal entry. On Node, its conditional export uses the CSS-free VDOM build for SSR because the Vue 3.6 RC Node runtime does not yet expose Vapor rendering APIs. The normal `loading-dev-vue` entry continues to support Vue 3.5.

The spinners inherit `color`, `--ld-duration`, and `--ld-play-state` from parent elements unless a prop overrides them. They respect reduced-motion preferences and are decorative (`aria-hidden`); provide a loading label in the surrounding UI.

Additional options: `easing` (`linear`, `ease-in-out`, `stacked`) on rotating spinners; `cap` (`flat`, `round`) on stroked spinners; `Blocks.sweep` (`columns`, `diagonal`, `rows`); `Ripple.direction` (`in`, `out`); `Wave.origin` (`bottom`, `center`).

Current list of indicators:

`Arc`, `Atom`, `Blocks`, `BouncingDots`, `Cascade`, `CircularDots`, `Classic`, `ClassicV2`, `Clock`, `Comet`, `Compass`, `Dual`, `Eclipse`, `Flip`, `Gather`, `Leap`, `LinearDots`, `Loading`, `Morph`, `Orbit`, `Pulse`, `Radar`, `Ring`, `Ripple`, `Slide`, `Snake`, `Swirl`, `Trace`, `Wave`.

The [upstream React project](https://github.com/jakubkrehel/loading) provides the original designs and live previews. This fork tracks upstream library changes as described in [UPSTREAM.md](UPSTREAM.md).

## License

MIT. Original work © 2026 Jakub Krehel; see [LICENSE.md](LICENSE.md).
