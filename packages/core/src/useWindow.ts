import {createContext, useContext} from "solid-js";
import canUseDOM from "dom-helpers/canUseDOM";

const Context = createContext(canUseDOM ? window : undefined);

export const WindowProvider = Context.Provider;

/**
 * The document "window" placed in context. Helpful for determining
 * SSR context, or when rendering into an iframe.
 *
 * @returns the current window
 */
export function useWindow() {
  return useContext(Context);
}

export default useWindow;
