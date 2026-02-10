---
"@icons-pack/svelte-simple-icons": major
---

Migrate to Svelte 5 runes syntax

### Breaking Changes

- **Minimum Svelte version**: Now requires `svelte ^5.0.0` (dropped Svelte 4 support)
- **Component syntax**: Migrated from `export let` to `$props()` runes
- **Type export**: `SiComponentType` now uses `Component<...>` instead of `ComponentType<SvelteComponent<...>>`
- **`size` prop type**: Changed from `string` to `number`

### New Features

- Components now support rest props via `{...rest}` spread on `<svg>`, allowing custom attributes like `class`, `aria-*`, `data-*`, etc.

### Dependencies

- svelte: 4.2.12 → 5.50.1
- @sveltejs/kit: 2.5.4 → 2.50.2
- @sveltejs/vite-plugin-svelte: 3.0.2 → 6.2.4
- vite: 5.2.6 → 7.3.1
