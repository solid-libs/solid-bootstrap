import {Component, ComponentProps, JSX, ParentProps, PropsWithChildren} from "solid-js";

export type EventKey = string | number;

export type IntrinsicElementTypes = keyof JSX.IntrinsicElements;

export type AssignProps<Inner extends string | Component<any>, P> = Omit<
  ComponentProps<Inner extends keyof JSX.IntrinsicElements | Component<any> ? Inner : never>,
  keyof P
> &
  P;

export type SelectCallback = (eventKey: string | null, e: Event) => void;
