import {
  arrow,
  computeStyles,
  eventListeners,
  flip,
  hide,
  offset,
  popperOffsets,
  preventOverflow,
  popperGenerator,
} from "@popperjs/core";

export const createPopper = popperGenerator({
  defaultModifiers: [
    hide,
    popperOffsets,
    computeStyles,
    eventListeners,
    offset,
    flip,
    preventOverflow,
    arrow,
  ],
});
