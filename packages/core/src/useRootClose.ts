import listen from "dom-helpers/listen";
import ownerDocument from "dom-helpers/ownerDocument";
import {createEffect, createSignal, onCleanup} from "solid-js";
import useClickOutside, {ClickOutsideOptions} from "./useClickOutside";

const escapeKeyCode = 27;
const noop = () => {};

export interface RootCloseOptions extends ClickOutsideOptions {
  disabled?: boolean;
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
export function useRootClose(
  ref: () => Element | null | undefined,
  onRootClose: (e: Event) => void,
  options: RootCloseOptions = {},
) {
  const [preventMouseRootCloseRef, setPreventMouseRootCloseRef] = createSignal(false);
  const onClose = onRootClose || noop;

  useClickOutside(ref, onClose, {
    get disabled() {
      return options.disabled;
    },
    get clickTrigger() {
      return options.clickTrigger;
    },
  });

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  };

  createEffect(() => {
    if (options.disabled || ref() == null) return;

    const doc = ownerDocument(ref()!);

    // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074
    let currentEvent = (doc.defaultView || window).event;

    const removeKeyupListener = listen(doc as any, "keyup", (e) => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleKeyUp(e);
    });

    onCleanup(() => {
      removeKeyupListener();
    });
  });
}

export default useRootClose;
