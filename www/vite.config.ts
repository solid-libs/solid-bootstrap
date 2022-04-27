import {defineConfig} from "vite";
import solid from "vite-plugin-solid";
import mdx from "@mdx-js/rollup";
import rehypeHighlight from "rehype-highlight";

export default defineConfig({
  base: "/solid-bootstrap/",
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        rehypePlugins: [rehypeHighlight],
      }),
      enforce: "pre",
    },
    solid({extensions: [".md", ".mdx"]}),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    outDir: "dist",
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
