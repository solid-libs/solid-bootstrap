import { createContext } from "solid-js";
import { EventKey } from "../../core/src/types";

interface NavContextType {
  role?: string; // used by NavLink to determine it's role
  activeKey: EventKey | null;
  getControlledId: (key: EventKey | null) => string;
  getControllerId: (key: EventKey | null) => string;
}

const NavContext = createContext<NavContextType | null>(null);

export default NavContext;
