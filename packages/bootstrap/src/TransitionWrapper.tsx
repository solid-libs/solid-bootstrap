import { children, createSignal, JSX, mergeProps, splitProps } from "solid-js";
import {
  Transition,
  TransitionProps,
  TransitionStatus,
} from "solid-react-transition";

export type TransitionWrapperChildFunction = (
  status: TransitionStatus,
  props: Record<string, unknown>
) => JSX.Element;

export type TransitionWrapperProps = Omit<
  TransitionProps,
  | "addEndListener"
  | "onEnter"
  | "onEntering"
  | "onEntered"
  | "onExit"
  | "onExiting"
  | "onExited"
> & {
  childRef?: (r: HTMLElement) => void;
  children: JSX.Element | TransitionWrapperChildFunction;
  addEndListener?: (
    el: HTMLElement,
    done: (e: TransitionEvent) => void
  ) => void;
  onEnter?: (el: HTMLElement, isAppearing?: boolean) => void;
  onEntering?: (el: HTMLElement, isAppearing?: boolean) => void;
  onEntered?: (el: HTMLElement, isAppearing?: boolean) => void;
  onExit?: (el: HTMLElement) => void;
  onExiting?: (el: HTMLElement) => void;
  onExited?: (e?: HTMLElement) => void;
};

const defaultProps = {};

// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = (p: TransitionWrapperProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "onEnter",
    "onEntering",
    "onEntered",
    "onExit",
    "onExiting",
    "onExited",
    "addEndListener",
    "children",
    "childRef",
  ]);

  let [nodeRef, setNodeRef] = createSignal<HTMLElement>();
  const mergedRef = (ref: HTMLElement) => {
    setNodeRef(ref);
    local.childRef?.(ref);
  };

  function normalize(callback?: (node: HTMLElement, param: any) => void) {
    return (param: any) => {
      if (callback && nodeRef()) {
        callback(nodeRef()!, param);
      }
    };
  }

  const handlers = {
    get onEnter() {
      return normalize(local.onEnter);
    },
    get onEntering() {
      return normalize(local.onEntering);
    },
    get onEntered() {
      return normalize(local.onEntered);
    },
    get onExit() {
      return normalize(local.onExit);
    },
    get onExiting() {
      return normalize(local.onExiting);
    },
    get onExited() {
      return normalize(local.onExited);
    },
    get addEndListener() {
      return normalize(local.addEndListener);
    },
  };

  function renderChild() {
    if (typeof local.children === "function") {
      // wrap function to get ref
      return (status: TransitionStatus, innerProps: Record<string, unknown>) =>
        (local.children as Function)?.(status, {
          ...innerProps,
          ref: mergedRef,
        });
    } else {
      // get resolved ref now
      let childRef = children(() => local.children as JSX.Element)();
      mergedRef(childRef as HTMLElement);
      return childRef;
    }
  }

  return (
    <Transition {...props} {...handlers} nodeRef={nodeRef()}>
      {renderChild() as JSX.Element}
    </Transition>
  );
};

export default TransitionWrapper;
