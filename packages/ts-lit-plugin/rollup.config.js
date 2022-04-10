import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	input: "src/index.ts",
	external: ["typescript"],
	output: {
		file: "lib/bundle-rollup.js",
		format: "cjs",
		sourcemap: true,
		compact: true
	},
	plugins: [nodeResolve({ preferBuiltins: true }), json(), commonjs(), typescript(), terser()]
};

export default config;
