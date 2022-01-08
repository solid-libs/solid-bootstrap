import DropdownContext, {DropdownContextValue} from "./DropdownContext";
import usePopper, {UsePopperOptions, Placement, Offset, UsePopperState} from "./usePopper";
import useRootClose, {RootCloseOptions} from "./useRootClose";
import mergeOptionsWithPopperConfig from "./mergeOptionsWithPopperConfig";
import {
  createComputed,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  splitProps,
  useContext,
} from "solid-js";
import {createStore, reconcile} from "solid-js/store";

export interface UseDropdownMenuOptions {
  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or
   * toggle. See the [flip docs](https://popper.js.org/docs/v2/modifiers/flip/)
   * for more info.
   */
  flip?: boolean;

  /**
   * Controls the visible state of the menu, generally this is provided by the
   * parent `Dropdown` component, but may also be specified as a prop directly.
   */
  show?: boolean;

  /**
   * Use the `fixed` positioning strategy in Popper. This is used if the
   * dropdown toggle is in a fixed container.
   */
  fixed?: boolean;

  /**
   * The PopperJS placement for positioning the Dropdown menu in relation to it's Toggle.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  placement?: Placement;

  /**
   * Whether or not to use Popper for positioning the menu.
   */
  usePopper?: boolean;

  /**
   * Whether or not to add scroll and resize listeners to update menu position.
   *
   * See the [event listeners docs](https://popper.js.org/docs/v2/modifiers/event-listeners/)
   * for more info.
   */
  enableEventListeners?: boolean;

  /**
   * Offset of the dropdown menu from the dropdown toggle. See the
   * [offset docs](https://popper.js.org/docs/v2/modifiers/offset/) for more info.
   */
  offset?: Offset;

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent?: RootCloseOptions["clickTrigger"];

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig?: Omit<UsePopperOptions, "enabled" | "placement">;
}

export type UserDropdownMenuProps = Record<string, any> & {
  ref: (e: HTMLElement) => void;
  style?: JSX.CSSProperties;
  "aria-labelledby"?: string;
};

export type UserDropdownMenuArrowProps = Record<string, any> & {
  ref: (e: HTMLElement) => void;
  style: JSX.CSSProperties;
};

export interface UseDropdownMenuMetadata {
  show: boolean;
  placement: Placement;
  hasShown: boolean;
  toggle: DropdownContextValue["toggle"];
  popper: UsePopperState | null;
  arrowProps: Partial<UserDropdownMenuArrowProps>;
}

const noop: any = () => {};

/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */
export function useDropdownMenu(o: UseDropdownMenuOptions = {}) {
  const context = useContext(DropdownContext);
  const [arrowElement, attachArrowRef] = createSignal<Element>();
  const [hasShownRef, setHasShownRef] = createSignal(false);
  const [popperOptions, setPopperOptions] = createStore<UsePopperOptions>({});

  // merge in option defaults
  const options = mergeProps(
    {
      fixed: false,
      popperConfig: {},
      usePopper: !!context,
    },
    o,
  );

  const show = createMemo(() => {
    return context?.show == null ? !!options.show : context.show;
  });

  createEffect(() => {
    if (show() && !hasShownRef()) {
      setHasShownRef(true);
    }
  });

  /** sync popper with options */
  createComputed(() => {
    setPopperOptions(
      reconcile(
        mergeOptionsWithPopperConfig({
          placement: options.placement || context?.placement || "bottom-start",
          enabled: options.usePopper ?? !!context,
          enableEvents:
            options.enableEventListeners == null ? show() : options.enableEventListeners,
          offset: options.offset,
          flip: options.flip,
          fixed: options.fixed,
          arrowElement: arrowElement(),
          popperConfig: options.popperConfig,
        }),
      ),
    );
  });

  const handleClose = (e: Event) => {
    context?.toggle(false, e);
  };

  const popper = usePopper(
    () => context?.toggleElement,
    () => context?.menuElement,
    popperOptions,
  );

  createEffect(() => {
    if (context?.menuElement) {
      useRootClose(() => context.menuElement, handleClose, {
        get clickTrigger() {
          return options.rootCloseEvent;
        },
        get disabled() {
          return !show();
        },
      });
    }
  });

  const menuProps = mergeProps(
    {
      get ref() {
        return context?.setMenu || noop;
      },
      get style() {
        return popper()?.styles.popper as any;
      },
      get "aria-labelledby"() {
        return context?.toggleElement?.id;
      },
    },
    popper()?.attributes.popper ?? {},
  );

  const metadata: UseDropdownMenuMetadata = {
    get show() {
      return show();
    },
    get placement() {
      return context?.placement!;
    },
    get hasShown() {
      return hasShownRef();
    },
    get toggle() {
      return context?.toggle!;
    },
    get popper() {
      return options.usePopper ? popper()! : null;
    },
    get arrowProps() {
      return options.usePopper
        ? {
            ref: attachArrowRef,
            ...popper()?.attributes.arrow,
            style: popper()?.styles.arrow as any,
          }
        : {};
    },
  };

  return [menuProps, metadata] as const;
}

const defaultProps = {
  usePopper: true,
};

export interface DropdownMenuProps extends UseDropdownMenuOptions {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should be spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => Element}
   */
  children: (props: UserDropdownMenuProps, meta: UseDropdownMenuMetadata) => JSX.Element;
}

/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */
function DropdownMenu(p: DropdownMenuProps) {
  const [local, options] = splitProps(p, ["children"]);
  const [props, meta] = useDropdownMenu(options);

  return <>{local.children(props, meta)}</>;
}

DropdownMenu.displayName = "DropdownMenu";

DropdownMenu.defaultProps = defaultProps;

/** @component */
export default DropdownMenu;
