// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/ThemeProvider.tsx

import { createContext, createMemo, JSX, useContext } from "solid-js";

export interface ThemeContextValue {
  prefixes: Record<string, string>;
  dir?: string;
}

export interface ThemeProviderProps extends Partial<ThemeContextValue> {
  children: JSX.Element;
}

const ThemeContext = createContext<ThemeContextValue>({ prefixes: {} });

function ThemeProvider({ prefixes = {}, dir, children }: ThemeProviderProps) {
  const contextValue = createMemo(() => ({
    prefixes: { ...prefixes },
    dir,
  }));

  return (
    <ThemeContext.Provider value={contextValue()}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useBootstrapPrefix(
  prefix: string | undefined,
  defaultPrefix: string
): string {
  const { prefixes } = useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

export function useIsRTL() {
  const { dir } = useContext(ThemeContext);
  return dir === "rtl";
}

// function createBootstrapComponent(Component, opts) {
//   if (typeof opts === "string") opts = { prefix: opts };
//   const isClassy = Component.prototype && Component.prototype.isReactComponent;
//   // If it's a functional component make sure we don't break it with a ref
//   const { prefix, forwardRefAs = isClassy ? "ref" : "innerRef" } = opts;

//   const Wrapped = React.forwardRef(({ ...props }, ref) => {
//     props[forwardRefAs] = ref;
//     const bsPrefix = useBootstrapPrefix((props as any).bsPrefix, prefix);
//     return <Component {...props} bsPrefix={bsPrefix} />;
//   });

//   Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
//   return Wrapped;
// }

// export { createBootstrapComponent, Consumer as ThemeConsumer };
export default ThemeProvider;
