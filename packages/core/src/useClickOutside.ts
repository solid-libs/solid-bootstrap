import contains from "dom-helpers/contains";
import listen from "dom-helpers/listen";
import ownerDocument from "dom-helpers/ownerDocument";
import {createEffect, createSignal, onCleanup} from "solid-js";

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

export const getRefTarget = (ref: Element | null | undefined) => ref;

export interface ClickOutsideOptions {
  disabled?: boolean;
  clickTrigger?: MouseEvents;
}

/**
 * The `useClickOutside` hook registers your callback on the document that fires
 * when a pointer event is registered outside of the provided ref or element.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onClickOutside
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
export function useClickOutside(
  ref: () => Element | null | undefined,
  onClickOutside: (e: Event) => void = noop,
  {disabled, clickTrigger = "click"}: ClickOutsideOptions = {},
) {
  const [preventMouseClickOutsideRef, setPreventMouseClickOutsideRef] = createSignal(false);

  const handleMouseCapture = (e: any) => {
    const currentTarget = getRefTarget(ref());

    setPreventMouseClickOutsideRef(
      !currentTarget ||
        isModifiedEvent(e) ||
        !isLeftClickEvent(e) ||
        !!contains(currentTarget, e.target),
    );
  };

  const handleMouse = (e: MouseEvent) => {
    if (!preventMouseClickOutsideRef()) {
      onClickOutside(e);
    }
  };

  createEffect(() => {
    if (disabled || ref() == null) return undefined;

    const doc = ownerDocument(getRefTarget(ref())!);

    // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074
    let currentEvent = (doc.defaultView || window).event;

    // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.
    const removeMouseCaptureListener = listen(doc as any, clickTrigger, handleMouseCapture, true);

    const removeMouseListener = listen(doc as any, clickTrigger, (e) => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleMouse(e);
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
      mobileSafariHackListeners.forEach((remove) => remove());
    });
  });
}

export default useClickOutside;
