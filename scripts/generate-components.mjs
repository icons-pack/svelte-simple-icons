import fs from "node:fs/promises";
import path from "node:path";
import upperCamelCase from "uppercamelcase";

import * as SimpleIcons from "simple-icons";

const formatFile = "utf-8";
const rootDir = path.join(import.meta.dirname, "..");
const dir = path.join(rootDir, "src/lib/");
const outputComponent = "src/lib/icons";

const pathIndexExport = path.join(rootDir, "src/lib", "index.ts");

const ICONS = Object.keys(SimpleIcons);

const fileExists = async (target) =>
  fs
    .access(target)
    .then(() => true)
    .catch(() => false);

const dirExists = await fileExists(dir);
if (!dirExists) {
  await fs.mkdir(dir);
}

const outputComponentExists = await fileExists(outputComponent);
if (!outputComponentExists) {
  await fs.mkdir(outputComponent);
}

await fs.writeFile(pathIndexExport, "", formatFile);

const attrsToString = (attrs) => {
  return Object.keys(attrs)
    .map((key) => {
      if (key === "width" || key === "height" || key === "fill") {
        return key + "={" + attrs[key] + "}";
      }

      return key + '="' + attrs[key] + '"';
    })
    .join(" ");
};

const exportType = `
import type { Component } from 'svelte';

export type SiComponentType = Component<{ color?: string; size?: number; title?: string; [key: string]: unknown; }>;

`;
await fs.appendFile(pathIndexExport, exportType, formatFile);

for (const icon of ICONS) {
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
  };

  const element = `
    <script>
      let { color = 'currentColor', size = 24, title = "${baseName}", ...rest } = $props();
    </script>

    <svg ${attrsToString(defaultAttrs)} {...rest}>
      <title>{title}</title>
      <path d="${SimpleIcons[baseName].path}" />
    </svg>
  `;

  const component = element;

  await fs.writeFile(locationOutputComponent, component, formatFile);

  const exportComponent = `export { default as ${componentName} } from './icons/${componentName}.svelte';\r\n`;

  await fs.appendFile(pathIndexExport, exportComponent, formatFile);
}

console.log("Ready icons");
