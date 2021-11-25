// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionContext.ts

import { createContext } from "solid-js";
import { SelectCallback } from "../../core/src/types";

export interface AccordionContextValue {
  activeEventKey?: string;
  onSelect?: SelectCallback;
}

const context = createContext<AccordionContextValue>({});

export default context;