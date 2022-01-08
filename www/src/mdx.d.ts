declare module "*.mdx" {
  import {JSX} from "solid-js";

  type MDXComponents = {
    [key in keyof JSX.IntrinsicElements]:
      | string
      | ((props: JSX.IntrinsicElements[key]) => JSX.Element);
  };
  interface MDXProps {
    components?: MDXComponents;
    children?: JSX.Element;
  }

  export default function Component(props: MDXProps): JSX.Element;
}
