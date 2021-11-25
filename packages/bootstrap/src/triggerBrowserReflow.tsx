// source https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/triggerBrowserReflow.tsx

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
export default function triggerBrowserReflow(node: HTMLElement): void {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}
