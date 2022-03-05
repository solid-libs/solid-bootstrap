// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/ThemeProvider.tsx

import {createContext, createMemo, JSX, useContext} from "solid-js";

export const DEFAULT_BREAKPOINTS = ["xxl", "xl", "lg", "md", "sm", "xs"];

export interface ThemeContextValue {
  prefixes: Record<string, string>;
  breakpoints: string[];
  dir?: string;
}

export interface ThemeProviderProps extends Partial<ThemeContextValue> {
  children: JSX.Element;
}

const ThemeContext = createContext<ThemeContextValue>({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
});

function ThemeProvider({
  prefixes = {},
  breakpoints = DEFAULT_BREAKPOINTS,
  dir,
  children,
}: ThemeProviderProps) {
  const contextValue = createMemo(() => ({
    prefixes: {...prefixes},
    breakpoints,
    dir,
  }));

  return <ThemeContext.Provider value={contextValue()}>{children}</ThemeContext.Provider>;
}

export function useBootstrapPrefix(prefix: string | undefined, defaultPrefix: string): string {
  const themeContext = useContext(ThemeContext);
  return prefix || themeContext.prefixes[defaultPrefix] || defaultPrefix;
}

export function useBootstrapBreakpoints() {
  const ctx = useContext(ThemeContext);
  return () => ctx.breakpoints;
}

export function useIsRTL() {
  const ctx = useContext(ThemeContext);
  return () => ctx.dir === "rtl";
}

export default ThemeProvider;
