// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/helpers.ts

import {TransitionComponent} from "solid-react-transition";
import {Component, ComponentProps, JSX} from "solid-js";

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type ElementType = keyof JSX.IntrinsicElements | Component<any>;

export type ReplaceProps<Inner extends ElementType, P> = Omit<ComponentProps<Inner>, P> & P;

export interface BsPrefixOnlyProps {
  bsPrefix?: string;
}

export interface AsProp<As extends ElementType = ElementType> {
  as?: As;
}

export interface BsPrefixProps<As extends ElementType = ElementType>
  extends BsPrefixOnlyProps,
    AsProp<As> {}

export interface BsPrefixRefForwardingComponent<TInitial extends ElementType, P = unknown> {
  <As extends ElementType = TInitial>(
    props: ReplaceProps<As, BsPrefixProps<As> & P>,
    context?: any,
  ): JSX.Element | null;
}

export type TransitionType = boolean | TransitionComponent;

export function getOverlayDirection(placement: string, isRTL?: boolean) {
  let bsDirection = placement;
  if (placement === "left") {
    bsDirection = isRTL ? "end" : "start";
  } else if (placement === "right") {
    bsDirection = isRTL ? "start" : "end";
  }
  return bsDirection;
}
