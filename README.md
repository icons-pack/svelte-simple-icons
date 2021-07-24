<div align="center">
  <img alt="svelte simple icons" src="./docs/svg/svelte-simple-icons.svg" width="150" />

# svelte-simple-icons

This package provides the [Simple Icons 5.7.0](https://github.com/simple-icons/simple-icons/releases/tag/5.7.0) packaged as a set of [Svelte](https://svelte.dev/) components.

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

You can use [simpleicons.org](https://simpleicons.org) to find a specific icon.
When importing an icon, keep in mind that the names of the icons are [upperCamelCase](https://github.com/samverschueren/uppercamelcase) , for instance:

- [`Material Design`](https://simpleicons.org/?q=material) is exposed as `{ Materialdesign } from @icons-pack/svelte-simple-icons`
- [`azure devOps`](https://simpleicons.org/?q=azure%20devOps) is exposed as `{ Azuredevops } from @icons-pack/svelte-simple-icons`

These are some exceptions to this rule:

- [`500px`](https://simpleicons.org/?q=500px) is exposed as `{ FiveHundredPx } from @icons-pack/svelte-simple-icons`
- [`c++`](https://simpleicons.org/?q=+) is exposed as `{ Cplusplus } from @icons-pack/svelte-simple-icons`
- [`.Net`](https://simpleicons.org/?q=.net) is exposed as `{ DotNet } from @icons-pack/svelte-simple-icons`
- [`D3.js`](https://simpleicons.org/?q=d3) is exposed as `{ D3DotJs } from @icons-pack/svelte-simple-icons`
- [`dev.to`](https://simpleicons.org/?q=dev.to) is exposed as `{ DevDotTo } from @icons-pack/svelte-simple-icons`
- [`webcomponents.org`](https://simpleicons.org/?q=webcomponents.org) is exposed as `{ WebcomponentsDotOrg } from @icons-pack/svelte-simple-icons`
- [`X.Org`](https://simpleicons.org/?q=x.Org) is exposed as `{ XDotOrg } from @icons-pack/svelte-simple-icons`
- [`FerrarinDotVDot`](https://simpleicons.org/?q=Ferrari%20N.V) is exposed as `{ FerrarinDotVDot } from @icons-pack/svelte-simple-icons`

## Demo

[Edit codesandbox](https://codesandbox.io/s/busy-satoshi-g52wq?file=/App.svelte)

## Basic example

```svelte
  <script>
    import { ReactJs, Svelte, Docker } from "@icons-pack/svelte-simple-icons";
  </script>

  <Svelte color="#FF3E00" size={90} />

  <ReactJs color="#61DAFB" size={50} />

  <Docker />
```

## Change title

```svelte
  <!-- title default "Svelte" -->
  <script>
    import { Svelte } from "@icons-pack/svelte-simple-icons";
  </script>

  <Svelte title="My title" />
```

## Custom styles

```svelte
  <script>
    import { Svelte } from "@icons-pack/svelte-simple-icons";
  </script>

  <Svelte class="myStyle" />

  <style>
    .myStyle {
      width: 35px;
      height: 35px;
    }
  </style>
```
