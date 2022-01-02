import { Accessor, createMemo, JSX, mergeProps, splitProps } from "solid-js";
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

const defaultOptions = {
  tabIndex: 0,
}

export function useButtonProps<T extends HTMLElement>(o : UseButtonPropsOptions<T>): [AriaButtonProps<T>, UseButtonPropsMetadata] {
  const options = mergeProps(defaultOptions, o);

  const tagName = createMemo(() => {
    if (!options.tagName) {
      if (options.href != null || options.target != null || options.rel != null) {
        return "a";
      } else {
        return "button";
      }
    }
    return options.tagName
  })

  const meta: UseButtonPropsMetadata = {
    get tagName() {
      return tagName();
    },
  };

  if (tagName() === "button") {
    return [{ 
      get type() {
        return (options.type as any) || "button"
      }, 
      get disabled() {
        return options.disabled
      } 
    }, meta];
  }

  const getClickHandler: Accessor<JSX.EventHandler<T, MouseEvent>> = createMemo(() => (event: MouseEvent) => {
    if (options.disabled || (tagName() === "a" && isTrivialHref(options.href))) {
      event.preventDefault();
    }

    if (options.disabled) {
      event.stopPropagation();
      return;
    }
    callEventHandler(options.onClick, event);
  });

  const getKeyDownHandler: Accessor<JSX.EventHandler<T, KeyboardEvent>> = createMemo(() => (event: KeyboardEvent) => {
    if (event.key === " ") {
      event.preventDefault();
      getClickHandler()(
        event as any /*HACK calling click handler with keyboard event*/
      );
    }
  });

  return [
    {
      role: "button",
      // explicitly undefined so that it overrides the props disabled in a spread
      // e.g. <Tag {...props} {...hookProps} />
      disabled: undefined,
      get tabIndex() {
        return options.disabled ? undefined : options.tabIndex;
      },
      get href() {
        return tagName() === "a" && options.disabled ? undefined : options.href;
      },
      get target() {
        return tagName() === "a" ? options.target : undefined;
      },
      get "aria-disabled"() {
        return !options.disabled ? undefined : options.disabled;
      },
      get rel() {
        return tagName() === "a" ? options.rel : undefined;
      },
      get onClick() {
        return getClickHandler();
      },
      get onKeyDown() {
        return getKeyDownHandler();
      }
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

  return (
    <Dynamic {...otherProps} {...buttonProps} as={tagName}>
      {otherProps.children}
    </Dynamic>
  );
};

Button.displayName = "Button";

export default Button;
