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

export type SelectCallback = (eventKey: string | null, e: Event) => void;
