import solid from "solid-start/vite";
import {defineConfig} from "vite";
import rehypeHighlight from "rehype-highlight";

export default defineConfig({
  clearScreen: false,
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        rehypePlugins: [rehypeHighlight],
      }),
      enforce: "pre",
    },
    solid({
      extensions: [".mdx", ".md"],
    }),
  ],
});

