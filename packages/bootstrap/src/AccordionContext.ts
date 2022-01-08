// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionContext.ts

import {createContext} from "solid-js";

export type AccordionEventKey = string | string[] | null | undefined;

export declare type AccordionSelectCallback = (eventKey: AccordionEventKey, e: Event) => void;

export interface AccordionContextValue {
  activeEventKey?: AccordionEventKey;
  onSelect?: AccordionSelectCallback;
  alwaysOpen?: boolean;
}

export function isAccordionItemSelected(
  activeEventKey: AccordionEventKey,
  eventKey: string,
): boolean {
  return Array.isArray(activeEventKey)
    ? activeEventKey.includes(eventKey)
    : activeEventKey === eventKey;
}

const context = createContext<AccordionContextValue>({});

export default context;
