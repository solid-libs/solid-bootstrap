import { JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { callEventHandler } from "./utils";

export type ButtonType = "button" | "reset" | "submit";

export interface AnchorOptions {
  href?: string;
  rel?: string;
  target?: string;
}

export interface UseButtonPropsOptions<T extends HTMLElement>
  extends AnchorOptions {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: JSX.EventHandlerUnion<T, MouseEvent>;
  tabIndex?: string | number;
  tagName?: keyof JSX.IntrinsicElements;
}

export function isTrivialHref(href?: string) {
  return !href || href.trim() === "#";
}

export interface AriaButtonProps<T> {
  type?: ButtonType | undefined;
  disabled: boolean | undefined;
  role?: "button";
  tabIndex?: string | number | undefined;
  href?: string | undefined;
  target?: string | undefined;
  rel?: string | undefined;
  "aria-disabled"?: true | undefined;
  onClick?: JSX.EventHandler<T, MouseEvent>;
  onKeyDown?: JSX.EventHandler<T, KeyboardEvent>;
}

export interface UseButtonPropsMetadata {
  tagName: keyof JSX.IntrinsicElements;
}

export function useButtonProps<T extends HTMLElement>({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type,
}: UseButtonPropsOptions<T>): [AriaButtonProps<T>, UseButtonPropsMetadata] {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = "a";
    } else {
      tagName = "button";
    }
  }

  const meta: UseButtonPropsMetadata = { tagName };
  if (tagName === "button") {
    return [{ type: (type as any) || "button", disabled }, meta];
  }

  const handleClick: JSX.EventHandler<T, MouseEvent> = (event) => {
    if (disabled || (tagName === "a" && isTrivialHref(href))) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }
    callEventHandler(onClick, event);
  };

  const handleKeyDown: JSX.EventHandler<T, KeyboardEvent> = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      handleClick(
        event as any /*HACK calling click handler with keyboard event*/
      );
    }
  };

  return [
    {
      role: "button",
      // explicitly undefined so that it overrides the props disabled in a spread
      // e.g. <Tag {...props} {...hookProps} />
      disabled: undefined,
      tabIndex: disabled ? undefined : tabIndex,
      href: tagName === "a" && disabled ? undefined : href,
      target: tagName === "a" ? target : undefined,
      "aria-disabled": !disabled ? undefined : disabled,
      rel: tagName === "a" ? rel : undefined,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
    },
    meta,
  ];
}

export interface BaseButtonProps {
  /**
   * Control the underlying rendered element directly by passing in a valid
   * component type
   */
  as?: keyof JSX.IntrinsicElements | undefined;

  /** The disabled state of the button */
  disabled?: boolean | undefined;

  /** Optionally specify an href to render a `<a>` tag styled as a button */
  href?: string | undefined;

  /** Anchor target, when rendering an anchor as a button */
  target?: string | undefined;

  rel?: string | undefined;
}

export interface ButtonProps
  extends BaseButtonProps,
    JSX.HTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const [local, otherProps] = splitProps(props, ["as"]);

  let a = props.tabIndex;

  const [buttonProps, { tagName }] = useButtonProps({
    tagName: local.as,
    ...otherProps,
  });

  return <Dynamic {...otherProps} {...buttonProps} as={tagName} />;
};

Button.displayName = "Button";

export default Button;
