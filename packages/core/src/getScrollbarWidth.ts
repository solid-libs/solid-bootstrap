/**
 * Get the width of the vertical window scrollbar if it's visible
 */
export function getBodyScrollbarWidth(ownerDocument = document) {
  const window = ownerDocument.defaultView!;

  return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}

export default getBodyScrollbarWidth;
