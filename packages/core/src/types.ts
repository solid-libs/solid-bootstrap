import { Component, ComponentProps, JSX, PropsWithChildren } from "solid-js";
import { Dynamic } from "solid-js/web";

export type EventKey = string | number;

export type IntrinsicElementTypes = keyof JSX.IntrinsicElements;

export type AssignProps<Inner extends string | Component<any>, P> = Omit<
  ComponentProps<
    Inner extends keyof JSX.IntrinsicElements | Component<any> ? Inner : never
  >,
  keyof P
> &
  P;

export interface DynamicRefForwardingComponent<
  TInitial extends string | Component<any>,
  P = unknown
> {
  <As extends string | Component<any> = TInitial>(
    props: PropsWithChildren<AssignProps<As, { as?: As } & P>>,
    context?: any
  ): JSX.Element | null;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}

// export class DynamicComponent<
//   As extends string | React.ComponentType<any>,
//   P = unknown,
// > extends React.Component<AssignProps<As, { as?: As } & P>> {}

// // Need to use this instead of typeof Component to get proper type checking.
// export type DynamicComponentClass<
//   As extends string | React.ComponentType<any>,
//   P = unknown,
// > = React.ComponentClass<AssignProps<As, { as?: As } & P>>;

export type SelectCallback = (eventKey: string | null, e: Event) => void;

// export interface TransitionCallbacks {
//   /**
//    * Callback fired before the component transitions in
//    */
//   onEnter?(node: HTMLElement, isAppearing: boolean): any;
//   /**
//    * Callback fired as the component begins to transition in
//    */
//   onEntering?(node: HTMLElement, isAppearing: boolean): any;
//   /**
//    * Callback fired after the component finishes transitioning in
//    */
//   onEntered?(node: HTMLElement, isAppearing: boolean): any;
//   /**
//    * Callback fired right before the component transitions out
//    */
//   onExit?(node: HTMLElement): any;
//   /**
//    * Callback fired as the component begins to transition out
//    */
//   onExiting?(node: HTMLElement): any;
//   /**
//    * Callback fired after the component finishes transitioning out
//    */
//   onExited?(node: HTMLElement): any;
// }

// export interface TransitionProps extends TransitionCallbacks {
//   name?: string;
//   enterActiveClass?: string;
//   enterClass?: string;
//   enterToClass?: string;
//   exitActiveClass?: string;
//   exitClass?: string;
//   exitToClass?: string;
//   children?: JSX.Element;
//   appear?: boolean;
//   mode?: "inout" | "outin";
// }

// export type TransitionComponent = Component<TransitionProps>;
