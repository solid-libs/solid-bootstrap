// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/ThemeProvider.tsx

import {createContext, createMemo, JSX, useContext} from "solid-js";

export interface ThemeContextValue {
  prefixes: Record<string, string>;
  dir?: string;
}

export interface ThemeProviderProps extends Partial<ThemeContextValue> {
  children: JSX.Element;
}

const ThemeContext = createContext<ThemeContextValue>({prefixes: {}});

function ThemeProvider({prefixes = {}, dir, children}: ThemeProviderProps) {
  const contextValue = createMemo(() => ({
    prefixes: {...prefixes},
    dir,
  }));

  return <ThemeContext.Provider value={contextValue()}>{children}</ThemeContext.Provider>;
}

export function useBootstrapPrefix(prefix: string | undefined, defaultPrefix: string): string {
  const themeContext = useContext(ThemeContext);
  return prefix || themeContext.prefixes[defaultPrefix] || defaultPrefix;
}

export function useIsRTL() {
  const themeContext = useContext(ThemeContext);
  return themeContext.dir === "rtl";
}

export default ThemeProvider;
