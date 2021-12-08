import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import Collapse, { CollapseProps } from "./Collapse";
import { useBootstrapPrefix } from "./ThemeProvider";
import NavbarContext from "./NavbarContext";
import { BsPrefixProps } from "./helpers";
import classnames from "./classnames";

export interface NavbarCollapseProps
  extends Omit<CollapseProps, "children">,
    JSX.HTMLAttributes<HTMLDivElement>,
    BsPrefixProps {}

const defaultProps = {};

const NavbarCollapse = (p: NavbarCollapseProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "className",
    "children",
    "ref",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "navbar-collapse");
  const context = useContext(NavbarContext);

  return (
    <Collapse in={!!context?.expanded} {...props}>
      <div ref={local.ref} className={classnames(bsPrefix, local.className)}>
        {local.children}
      </div>
    </Collapse>
  );
};

export default NavbarCollapse;
