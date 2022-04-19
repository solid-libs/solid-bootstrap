import {useContext} from "solid-js";
import Offcanvas, {OffcanvasProps} from "./Offcanvas";
import NavbarContext from "./NavbarContext";

const NavbarOffcanvas = (props: OffcanvasProps) => {
  const context = useContext(NavbarContext);

  return (
    <Offcanvas show={!!context?.expanded} {...props}/>
  );
};

export default NavbarOffcanvas;
