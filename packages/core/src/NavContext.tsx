import {createContext} from "solid-js";
import {EventKey} from "./types";

interface NavContextType {
  role?: string; // used by NavItem to determine it's role
  activeKey: EventKey | null;
  getControlledId: (key: EventKey) => string;
  getControllerId: (key: EventKey) => string;
}

const NavContext = createContext<NavContextType | null>(null);

export default NavContext;
