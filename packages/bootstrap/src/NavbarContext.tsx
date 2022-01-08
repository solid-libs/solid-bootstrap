import {createContext} from "solid-js";

// TODO: check
export interface NavbarContextType {
  onToggle: () => void;
  bsPrefix?: string;
  expanded: boolean;
}

const context = createContext<NavbarContextType | null>(null);

export default context;
