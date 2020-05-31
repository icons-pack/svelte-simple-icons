import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";

export default {
  input: "src/index.js",
  output: [
    {
      name: "svelte-simple-icons",
      file: "build/index.js",
      format: "umd",
    },
    {
      file: "build/index.mjs",
      format: "es",
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    svelte({
      exclude: "node_modules/**",
    }),
    resolve(),
  ],
};
