import * as Popper from "@popperjs/core";
import {Accessor, createEffect, createMemo, createSignal, on} from "solid-js";
import {createPopper} from "./popper";

const disabledApplyStylesModifier = {
  name: "applyStyles",
  enabled: false,
  phase: "afterWrite",
  fn: () => undefined,
};

// until docjs supports type exports...
export type Modifier<Name, Options> = Popper.Modifier<Name, Options>;
export type Options = Popper.Options;
export type Instance = Popper.Instance;
export type Placement = Popper.Placement;
export type VirtualElement = Popper.VirtualElement;
export type State = Popper.State;

export type OffsetValue = [number | null | undefined, number | null | undefined];
export type OffsetFunction = (details: {
  popper: Popper.Rect;
  reference: Popper.Rect;
  placement: Placement;
}) => OffsetValue;

export type Offset = OffsetFunction | OffsetValue;

export type ModifierMap = Record<string, Partial<Modifier<any, any>>>;
export type Modifiers = Popper.Options["modifiers"] | Record<string, Partial<Modifier<any, any>>>;

export type UsePopperOptions = Omit<Options, "modifiers" | "placement" | "strategy"> & {
  enabled?: boolean;
  placement?: Options["placement"];
  strategy?: Options["strategy"];
  modifiers?: Options["modifiers"];
};

export interface UsePopperState {
  placement: Placement;
  update: () => void;
  forceUpdate: () => void;
  attributes: Record<string, Record<string, any>>;
  styles: Record<string, Partial<CSSStyleDeclaration>>;
  state?: State;
}

const ariaDescribedByModifier: Modifier<"ariaDescribedBy", undefined> = {
  name: "ariaDescribedBy",
  enabled: true,
  phase: "afterWrite",
  effect:
    ({state}) =>
    () => {
      const {reference, popper} = state.elements;
      if ("removeAttribute" in reference) {
        const ids = (reference.getAttribute("aria-describedby") || "")
          .split(",")
          .filter((id) => id.trim() !== popper.id);

        if (!ids.length) reference.removeAttribute("aria-describedby");
        else reference.setAttribute("aria-describedby", ids.join(","));
      }
    },
  fn: ({state}) => {
    const {popper, reference} = state.elements;

    const role = popper.getAttribute("role")?.toLowerCase();

    if (popper.id && role === "tooltip" && "setAttribute" in reference) {
      const ids = reference.getAttribute("aria-describedby");
      if (ids && ids.split(",").indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute("aria-describedby", ids ? `${ids},${popper.id}` : popper.id);
    }
  },
};

const EMPTY_MODIFIERS = [] as any;
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state accessor
 */
function usePopper(
  referenceElement: () => VirtualElement | null | undefined,
  popperElement: () => HTMLElement | null | undefined,
  options: UsePopperOptions,
): Accessor<UsePopperState | undefined> {
  const [popperInstance, setPopperInstance] = createSignal<Instance>();

  const enabled = createMemo(() => options.enabled ?? true);

  const update = createMemo(
    on(popperInstance, (popper) => () => {
      popper?.update();
    }),
  );

  const forceUpdate = createMemo(
    on(popperInstance, (popper) => () => {
      popper?.forceUpdate();
    }),
  );

  const [popperState, setPopperState] = createSignal<UsePopperState>({
    placement: options.placement ?? "bottom",
    get update() {
      return update();
    },
    get forceUpdate() {
      return forceUpdate();
    },
    attributes: {},
    styles: {
      popper: {},
      arrow: {},
    },
  });

  const updateModifier: Modifier<"updateStateModifier", any> = {
    name: "updateStateModifier",
    enabled: true,
    phase: "write",
    requires: ["computeStyles"],
    fn: ({state}) => {
      const styles: UsePopperState["styles"] = {};
      const attributes: UsePopperState["attributes"] = {};

      Object.keys(state.elements).forEach((element) => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });

      setPopperState((s) => ({
        ...s,
        state,
        styles,
        attributes,
        placement: state.placement,
      }));
    },
  };

  createEffect(() => {
    const instance = popperInstance();
    if (!instance || !enabled()) return;
    instance.setOptions({
      onFirstUpdate: options.onFirstUpdate,
      placement: options.placement ?? "bottom",
      modifiers: [
        ...(options.modifiers ?? EMPTY_MODIFIERS),
        ariaDescribedByModifier,
        updateModifier,
        disabledApplyStylesModifier,
      ],
      strategy: options.strategy ?? "absolute",
    });
    /** Hack to force update as popper doesn't seem to position properly after options change **/
    queueMicrotask(() => {
      update()();
    });
  });

  createEffect(() => {
    const target = referenceElement();
    const popper = popperElement();

    if (target && popper && enabled()) {
      let instance: ReturnType<typeof createPopper>;
      instance = createPopper(target, popper, {});
      setPopperInstance(instance);
    } else {
      if (popperInstance()) {
        popperInstance()!.destroy();
        setPopperInstance(undefined);
        setPopperState((s) => ({
          ...s,
          attributes: {},
          styles: {popper: {}},
        }));
      }
    }
  });

  return popperState;
}

export default usePopper;
