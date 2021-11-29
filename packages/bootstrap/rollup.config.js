import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  external: [
    "classnames",
    "dom-helpers",
    "solid-bootstrap-core",
    "solid-js",
    "solid-js/web",
    "solid-react-transition",
    "warning",
  ],
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    babel({
      extensions: [".js", ".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: ["solid", "@babel/preset-typescript"],
      exclude: "node_modules/**",
    }),
  ],
};
