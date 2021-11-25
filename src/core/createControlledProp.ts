import {
  Accessor,
  createComputed,
  createMemo,
  createSignal,
  on,
} from "solid-js";

// Ported from https://github.com/jquense/uncontrollable/blob/dd40d92600566b0af14e66e0942b3066e2f62528/src/hook.tsx

export declare type Handler = (...args: any[]) => any;

/**
 * Either returns passed in [value, handler] or creates a signal to control value.
 *
 * @param propValue if controlled
 * @param defaultValue optional default if value not controlled
 * @param handler called in both modes
 * @returns
 */
export function createControlledProp<TProp, THandler extends Handler = Handler>(
  propValue: Accessor<TProp | undefined>,
  defaultValue: Accessor<TProp | undefined>,
  handler?: THandler
) {
  const [stateValue, setState] = createSignal<TProp | undefined>(
    defaultValue()
  );

  const isControlled = createMemo(() => propValue() !== undefined);

  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */
  createComputed(
    on(isControlled, (is, was) => {
      if (!is && was && stateValue() !== defaultValue()) {
        setState(() => defaultValue());
      }
    })
  );

  return [
    isControlled() ? propValue : stateValue,
    ((value: TProp, ...args: any[]) => {
      if (handler) handler(value, ...args);
      setState(() => value);
    }) as THandler,
  ] as const;
}
