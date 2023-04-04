import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import upperCamelCase from "uppercamelcase";

import signale from "signale";

import * as SimpleIcons from "simple-icons/icons";

import { titleToFilename } from "./utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const formatFile = "utf-8";
const rootDir = path.join(__dirname, "..");
const dir = path.join(rootDir, "src/lib/");
const outputComponent = "src/lib/components";

const pathIndexExport = path.join(rootDir, "src/lib", "index.js");

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
      if (key === "width" || key === "height" || key === "fill") {
        return key + "={" + attrs[key] + "}";
      }

      return key + '="' + attrs[key] + '"';
    })
    .join(" ");
};

ICONS.forEach((icon) => {
  const baseName = String(icon);
  const componentName = upperCamelCase(titleToFilename(baseName));

  const locationOutputComponent = path.join(rootDir, `${outputComponent}/`, `${componentName}.svelte`);

  const defaultAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "size",
    height: "size",
    fill: "color",
    viewBox: "0 0 24 24",
  };

  const element = `
    <script>
      export let color = 'currentColor';
      export let size = 24;
      export let title = "${SimpleIcons[baseName].title}";
    </script>

    <svg ${attrsToString(defaultAttrs)}>
      <title>{title}</title>
      <path d="${SimpleIcons[baseName].path}" />
    </svg>
  `;

  const component = element;

  fs.writeFileSync(locationOutputComponent, component, formatFile);

  signale.success(`${componentName}`);

  const exportComponent = `export { default as ${componentName} } from './components/${componentName}.svelte';\r\n`;

  fs.appendFileSync(pathIndexExport, exportComponent, formatFile);
});

signale.complete({
  prefix: "[Components]",
  message: "Ready components",
  suffix: "(@wootsbot)",
});
