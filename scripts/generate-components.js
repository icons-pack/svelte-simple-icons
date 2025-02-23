import fs from "fs";
import path from "path";
import upperCamelCase from "uppercamelcase";

import * as SimpleIcons from "simple-icons";


let __dirname = path.dirname(new URL(import.meta.url).pathname);

const formatFile = "utf-8";
const rootDir = path.join(__dirname, "..");
const dir = path.join(rootDir, "src/lib/");
const outputComponent = "src/lib/icons";

const pathIndexExport = path.join(rootDir, "src/lib", "index.ts");

const ICONS = Object.keys(SimpleIcons);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

if (!fs.existsSync(outputComponent)) {
  fs.mkdirSync(outputComponent);
}

fs.writeFileSync(pathIndexExport, "", formatFile);

const attrsToString = (attrs) => {
  return Object.keys(attrs)
    .map((key) => {
      if(key === "class") {
        return `class={className}`
      } else if (key === "width" || key === "height" || key === "fill") {
        return `${key}={${attrs[key]}}`;
      }

      return `${key}="${attrs[key]}"`;
    })
    .join(" ");
};

const exportType = `
import type { ComponentType, SvelteComponent } from 'svelte';

export type SiComponentType = ComponentType<SvelteComponent<{ color?: string; size?: string; title?: string; class?: string; }>>;

`
fs.appendFileSync(pathIndexExport, exportType, formatFile);

ICONS.forEach((icon) => {
  const baseName = String(icon);
  const componentName = upperCamelCase(baseName);

  const locationOutputComponent = path.join(
    rootDir,
    `${outputComponent}/`,
    `${componentName}.svelte`
  );

  const defaultAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "size",
    height: "size",
    fill: "color",
    viewBox: "0 0 24 24",
    class: "",
  };

  const element = `<script>
  let {
    color = 'currentColor',
    title = "${baseName}",
    class: className = '',
    size = 24,
  } = $props();
</script>

<svg ${attrsToString(defaultAttrs)}>
  <title>{title}</title>
  <path d="${SimpleIcons[baseName].path}" />
</svg>`;

  const component = element;

  fs.writeFileSync(locationOutputComponent, component, formatFile);

  const exportComponent = `export { default as ${componentName} } from './icons/${componentName}.svelte';\r\n`;

  fs.appendFileSync(pathIndexExport, exportComponent, formatFile);
});

console.log("Ready icons");
