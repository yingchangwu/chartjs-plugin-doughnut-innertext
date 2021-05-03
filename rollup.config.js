// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

const {name, version, homepage, main, module: _module} = require('./package.json');

export default {
  external: ["chart.js"],
  output: {
    file: main,
    format: "umd",
    globals: {
      "chart.js": "Chart"
    },
    name
  },
  plugins: [resolve(), commonjs(), babel()]
};
