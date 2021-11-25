import { createContext } from "solid-js";
import { EventKey, SelectCallback } from "./types";

const SelectableContext = createContext<SelectCallback | null>(null);

export const makeEventKey = (
  eventKey?: EventKey | null,
  href: string | null = null
): string | null => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};

export default SelectableContext;
