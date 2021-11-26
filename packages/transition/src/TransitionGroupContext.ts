import { createContext, JSX } from "solid-js";

export type TransitionGroupContextType = {
  isMounting: boolean;
};

export default createContext<TransitionGroupContextType | null>(null);
