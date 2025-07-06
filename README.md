<div align="center">
  <img alt="svelte simple icons" src="./docs/svg/svelte-simple-icons.svg" width="150" />

# svelte-simple-icons

This package provides the [Simple Icons 15.5.0](https://github.com/simple-icons/simple-icons/releases/tag/15.5.0) packaged as a set of [Svelte](https://svelte.dev/) components.

  <a href="https://www.npmjs.com/package/@icons-pack/svelte-simple-icons" target="_blank">
    <img src="https://img.shields.io/npm/v/@icons-pack/svelte-simple-icons?color=CB061D&style=flat-square" alt="www.npmjs.com!" />
  </a>

  <a href="https://travis-ci.com/github/icons-pack/svelte-simple-icons" target="_blank">
    <img src="https://img.shields.io/travis/icons-pack/svelte-simple-icons?color=008660&style=flat-square" alt="builds!" />
  </a>

  <a href="https://www.npmjs.com/package/@icons-pack/svelte-simple-icons" target="_blank">
    <img src="https://img.shields.io/npm/dw/@icons-pack/svelte-simple-icons?color=087BB4&style=flat-square" alt="downloads" />
  </a>

  <a href="https://github.com/icons-pack/svelte-simple-icons/blob/canary/LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/@icons-pack/svelte-simple-icons?color=008660&style=flat-square" alt="licence" />
  </a>
</div>

## Installation

Install the package in your project directory with:

```sh
// with yarn
yarn add @icons-pack/svelte-simple-icons

// with npm
npm add @icons-pack/svelte-simple-icons
```

## Usage

All icons are imported from a single file, where [ICON SLUG] is replaced by a capitalized [slug](https://github.com/simple-icons/simple-icons/blob/master/slugs.md).

## Demo

[Edit codesandbox](https://codesandbox.io/s/busy-satoshi-g52wq?file=/App.svelte)

## Basic example

```svelte
  <!-- Import a specific icon by its slug as: -->
  <!-- import { Si[ICON SLUG] } from 'simple-icons'; -->

  <script>
    import { SiReact, SiSvelte, SiDocker } from "@icons-pack/svelte-simple-icons";
  </script>

  <SiSvelte color="#FF3E00" size={90} />

  <SiReactJs color="#61DAFB" size={50} />

  <SiDocker />
```

## Change title

```svelte
  <!-- title default "Svelte" -->
  <script>
    import { SiSvelte } from "@icons-pack/svelte-simple-icons";
  </script>

  <SiSvelte title="My title" />
```

## Custom styles

```svelte
  <script>
    import { SiSvelte } from "@icons-pack/svelte-simple-icons";
  </script>

  <SiSvelte class="myStyle" />

  <style>
    .myStyle {
      width: 35px;
      height: 35px;
    }
  </style>
```

## Type Definition for Dynamic Icons in Svelte Components

Sometimes, we want to provide the component dynamically to a component. We can do that by using `svelte:component` feature with the
helper type `SiComponentType` type definition.

```svelte
<script lang="ts">
  import type { SiComponentType } from '@icons-pack/svelte-simple-icons';

  export let icon: SiComponentType;
  export let text: string;
  export let click: () => void = () => console.log('do something');
</script>

<button on:click={click}>
  <svelte:component
    this={icon}
    title={text} <!-- optional, along with size and color properties -->
  />
  {text}
</button>

<style lang="scss">
  button {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    white-space: nowrap;
    transition: border-color 0.25s;
    box-shadow: none;
    text-shadow: none;
  }

  .icon {
    margin: 4px 4px 0 0;
  }
</style>
```

## Faster Compilations

If you only need a few icons, you can import them individually instead of the entire file to improve compilation.

```svelte
<script>
  import SiSvelte from "@icons-pack/svelte-simple-icons/icons/SiSvelte.svelte";
  import SiGithub from "@icons-pack/svelte-simple-icons/icons/SiGithub.svelte";
</script>

<SiGithub />
<SiSvelte />
```
