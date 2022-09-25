import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import Collapse, {CollapseProps} from "./Collapse";
import {useBootstrapPrefix} from "./ThemeProvider";
import NavbarContext from "./NavbarContext";
import {BsPrefixProps} from "./helpers";
import classnames from "./classnames";

export interface NavbarCollapseProps
  extends Omit<CollapseProps, "children">,
    JSX.HTMLAttributes<HTMLDivElement>,
    BsPrefixProps {}

const defaultProps: Partial<NavbarCollapseProps> = {};

const NavbarCollapse = (p: NavbarCollapseProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "class",
    "children",
    "ref",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "navbar-collapse");
  const context = useContext(NavbarContext);

  return (
    <Collapse in={!!context?.expanded} {...props}>
      <div ref={local.ref} class={classnames(bsPrefix, local.class)}>
        {local.children}
      </div>
    </Collapse>
  );
};

export default NavbarCollapse;
