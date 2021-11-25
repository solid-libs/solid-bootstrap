import { JSX, splitProps } from "solid-js";

import { useButtonProps } from "./Button";
import { callEventHandler } from "./utils";

export function isTrivialHref(href?: string) {
  return !href || href.trim() === "#";
}

export interface AnchorProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  disabled?: boolean;
  tabIndex?: string | number;
  target?: string;
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = (props: AnchorProps) => {
  const [local, otherProps] = splitProps(props, ["onKeyDown"]);
  const [buttonProps] = useButtonProps<HTMLAnchorElement>({
    tagName: "a",
    ...otherProps,
  });

  const handleKeyDown = ((e) => {
    callEventHandler(buttonProps.onKeyDown, e);
    callEventHandler(local.onKeyDown, e);
  }) as JSX.EventHandler<HTMLAnchorElement, KeyboardEvent>;

  return (isTrivialHref(props.href) && !props.role) ||
    props.role === "button" ? (
    <a {...otherProps} {...buttonProps} onKeyDown={handleKeyDown} />
  ) : (
    <a {...otherProps} onKeyDown={local.onKeyDown} />
  );
};

export default Anchor;
