import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import babel from '@rollup/plugin-babel';

export default defineConfig({
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "es",
    name: "npmpkg2",
  },
  external: ["react", "react-dom"],
  plugins: [typescript({ tsconfig: "tsconfig.json" }),
  babel({
    exclude: 'node_modules/**', // only transpile our source code
    babelHelpers: 'bundled' // use bundled babel helpers
  })
  ],
});
