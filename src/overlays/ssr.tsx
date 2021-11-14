// import {
//   useSSRSafeId,
//   useIsSSR,
//   SSRProvider,
//   SSRProviderProps,
// } from '@react-aria/ssr';

// export type { SSRProviderProps };

// export { useSSRSafeId, useIsSSR, SSRProvider };

/* Hacks to replace above from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/ssr/src/SSRProvider.tsx  */

let currentId: number = 0;
export function useSSRSafeId(defaultId?: string) {
  return defaultId || `solid-aria-${++currentId}`;
}
