// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  external: ["chart.js"],
  output: {
    file: "build/doughnutInnerTextPlugin.js",
    format: "umd",
    globals: {
      "chart.js": "Chart"
    },
    name: "doughnutInnerTextPlugin"
  },
  plugins: [resolve(), commonjs(), babel()]
};
