import contains from "dom-helpers/contains";
import { EventHandler } from "dom-helpers/esm/addEventListener";
import listen from "dom-helpers/listen";
import ownerDocument from "dom-helpers/ownerDocument";
import { createEffect, createSignal, mergeProps, onCleanup } from "solid-js";

const escapeKeyCode = 27;
const noop = () => {};

export type MouseEvents = {
  [K in keyof GlobalEventHandlersEventMap]: GlobalEventHandlersEventMap[K] extends MouseEvent
    ? K
    : never;
}[keyof GlobalEventHandlersEventMap];

function isLeftClickEvent(event: MouseEvent) {
  return event.button === 0;
}

function isModifiedEvent(event: MouseEvent) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export interface RootCloseOptions {
  disabled?: boolean;
  clickTrigger?: MouseEvents;
}
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(
  ref: () => Element | null | undefined,
  onRootClose: (e: Event) => void,
  rootCloseoptions: RootCloseOptions = {}
) {
  let options = mergeProps({ clickTrigger: "click" }, rootCloseoptions);
  const [preventMouseRootCloseRef, setPreventMouseRootCloseRef] =
    createSignal(false);
  const onClose = onRootClose || noop;

  const handleMouseCapture: EventHandler<MouseEvents> = (e) => {
    const currentTarget = ref();

    setPreventMouseRootCloseRef(
      !currentTarget ||
        isModifiedEvent(e) ||
        !isLeftClickEvent(e) ||
        !!contains(currentTarget, e.target as Element)
    );
  };

  const handleMouse = (e: MouseEvent) => {
    if (!preventMouseRootCloseRef()) {
      onClose(e);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  };

  createEffect(() => {
    if (options.disabled || ref() == null) return;

    // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074
    let currentEvent = window.event;

    const doc = ownerDocument(ref()!);

    // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.
    const removeMouseCaptureListener = listen(
      doc as any,
      options.clickTrigger!,
      handleMouseCapture,
      true
    );

    const removeMouseListener = listen(
      doc as any,
      options.clickTrigger!,
      (e) => {
        // skip if this event is the same as the one running when we added the handlers
        if (e === currentEvent) {
          currentEvent = undefined;
          return;
        }
        handleMouse(e);
      }
    );

    const removeKeyupListener = listen(doc as any, "keyup", (e) => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleKeyUp(e);
    });

    let mobileSafariHackListeners = [] as Array<() => void>;
    if ("ontouchstart" in doc.documentElement) {
      mobileSafariHackListeners = [].slice
        .call(doc.body.children)
        .map((el) => listen(el, "mousemove", noop));
    }

    onCleanup(() => {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach((remove) => remove());
    });
  });
}

export default useRootClose;
