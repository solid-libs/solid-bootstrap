import {JSX} from "solid-js";

/**
 * Solid event handlers can be a plain callback OR a tuple [handler, item].
 * This function calls the handler appropriately (if defined).
 */
export function callEventHandler(h: JSX.EventHandlerUnion<any, any> | undefined, e: Event) {
  if (typeof h === "function") {
    h(e);
  } else if (Array.isArray(h)) {
    h[0](h[1], e);
  }
}
