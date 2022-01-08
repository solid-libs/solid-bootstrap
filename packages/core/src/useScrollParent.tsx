import getScrollParent from "dom-helpers/scrollParent";
import {createEffect, createSignal} from "solid-js";

export default function useScrollParent(element: () => null | HTMLElement) {
  const [parent, setParent] = createSignal<Document | HTMLElement | null | undefined>(null);

  createEffect(() => {
    if (element()) {
      setParent(() => getScrollParent(element()!, true));
    }
  });

  return parent;
}
