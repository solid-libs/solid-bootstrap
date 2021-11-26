import ownerDocument from "dom-helpers/ownerDocument";
import { createEffect, createSignal } from "solid-js";

export type DOMContainer<T extends HTMLElement = HTMLElement> =
  | T
  | null
  | (() => T | null);

export const resolveContainerRef = <T extends HTMLElement>(
  ref: DOMContainer<T> | undefined
): T | HTMLBodyElement | null => {
  if (typeof document === "undefined") return null;
  if (ref == null) return ownerDocument().body as HTMLBodyElement;
  if (typeof ref === "function") ref = ref();

  if (ref?.nodeType) return ref || null;

  return null;
};

export default function useWaitForDOMRef<
  T extends HTMLElement = HTMLElement
>(props: {
  ref?: DOMContainer<T>;
  onResolved?: (element: T | HTMLBodyElement) => void;
}) {
  const [resolvedRef, setRef] = createSignal<T | HTMLBodyElement | null>(
    resolveContainerRef(props.ref)
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
