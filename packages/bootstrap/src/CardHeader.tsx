import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "./classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import CardHeaderContext from "./CardHeaderContext";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface CardHeaderProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {}

const defaultProps = {
  as: "div",
};

const CardHeader: BsPrefixRefForwardingComponent<"div", CardHeaderProps> = (
  p: CardHeaderProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "card-header");
  const contextValue = {
    get cardHeaderBsPrefix() {
      return prefix;
    },
  };

  return (
    <CardHeaderContext.Provider value={contextValue}>
      <Dynamic
        component={local.as}
        {...props}
        className={classNames(local.className, prefix)}
      >
        {props.children}
      </Dynamic>
    </CardHeaderContext.Provider>
  );
};

export default CardHeader;
