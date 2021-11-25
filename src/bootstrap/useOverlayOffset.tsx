import {
  Accessor,
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  splitProps,
} from "solid-js";
import hasClass from "dom-helpers/hasClass";
import { Options } from "../overlays/usePopper";
import { useBootstrapPrefix } from "./ThemeProvider";
import Popover from "./Popover";

// This is meant for internal use.
// This applies a custom offset to the overlay if it's a popover.
export default function useOverlayOffset(): [
  (ref: HTMLElement | null) => void,
  Accessor<Options["modifiers"]>
] {
  const [overlayRef, setOverlayRef] = createSignal<HTMLElement | null>(null);
  const popoverClass = useBootstrapPrefix(undefined, "popover");

  const offset = createMemo(() => [
    {
      name: "offset",
      options: {
        offset: () => {
          if (overlayRef() && hasClass(overlayRef()!, popoverClass)) {
            return Popover.POPPER_OFFSET;
          }
          return [0, 0];
        },
      },
    },
  ]);

  return [setOverlayRef, offset];
}
