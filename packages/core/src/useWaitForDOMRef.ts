import ownerDocument from "dom-helpers/ownerDocument";
import canUseDOM from "dom-helpers/canUseDOM";
import {createEffect, createSignal} from "solid-js";
import useWindow from "./useWindow";

export type DOMContainer<T extends HTMLElement = HTMLElement> = T | null | (() => T | null);

export const resolveContainerRef = <T extends HTMLElement>(
  ref: DOMContainer<T> | undefined,
  document?: Document,
): T | HTMLBodyElement | null => {
  if (!canUseDOM) return null;
  if (ref == null) return (document || ownerDocument()).body as HTMLBodyElement;
  if (typeof ref === "function") ref = ref();

  if (ref?.nodeType) return ref || null;

  return null;
};

export function useWaitForDOMRef<T extends HTMLElement = HTMLElement>(props: {
  ref?: DOMContainer<T>;
  onResolved?: (element: T | HTMLBodyElement) => void;
}) {
  const window = useWindow();
  const [resolvedRef, setRef] = createSignal<T | HTMLBodyElement | null>(
    resolveContainerRef(props.ref, window?.document),
  );

  createEffect(() => {
    if (props.onResolved && resolvedRef()) {
      props.onResolved(resolvedRef()!);
    }
  });

  createEffect(() => {
    const nextRef = resolveContainerRef(props.ref);
    if (nextRef !== resolvedRef()) {
      setRef(nextRef as any);
    }
  });

  return resolvedRef;
}

export default useWaitForDOMRef;
