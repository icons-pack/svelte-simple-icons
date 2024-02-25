<div align="center">
  <img alt="svelte simple icons" src="./docs/svg/svelte-simple-icons.svg" width="150" />

# svelte-simple-icons

This package provides the [Simple Icons 7.0.0](https://github.com/simple-icons/simple-icons/releases/tag/7.0.0) packaged as a set of [Svelte](https://svelte.dev/) components.

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
  // Import a specific icon by its slug as:
  // import { si[ICON SLUG] } from 'simple-icons'

  <script>
    import { siReact, siSvelte, siDocker } from "@icons-pack/svelte-simple-icons";
  </script>

  <siSvelte color="#FF3E00" size={90} />

  <siReactJs color="#61DAFB" size={50} />

  <siDocker />
```

## Change title

```svelte
  <!-- title default "Svelte" -->
  <script>
    import { siSvelte } from "@icons-pack/svelte-simple-icons";
  </script>

  <siSvelte title="My title" />
```

## Custom styles

```svelte
  <script>
    import { siSvelte } from "@icons-pack/svelte-simple-icons";
  </script>

  <siSvelte class="myStyle" />

  <style>
    .myStyle {
      width: 35px;
      height: 35px;
    }
  </style>
```
