import { onMount } from "solid-js";

export const useHolderJSRefresh = () => {
  // workaround for holder.js not refreshing placeholder images
  onMount(() => {
    // @ts-ignore
    Holder.run({});
  });
};

export function HolderJSRefresh() {
  useHolderJSRefresh()
  return null;
}