// After build, copy the files in ./package to the root directory, excluding the package.json file.

import fs from "node:fs/promises";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const pkgDir = path.join(root, ".svelte-kit/__package__");

await fs.cp(pkgDir, root, {
  recursive: true,
  filter: (src) => !src.includes("package.json"),
});
