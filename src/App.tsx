import { Component, ErrorBoundary } from "solid-js";
import Overlay from "./overlays/Overlay";
import { createSignal } from "solid-js";
import { Placement } from "./overlays/usePopper";
import styles from "./App.module.css";

const PLACEMENTS: Placement[] = ["left", "top", "right", "bottom"];

const App: Component = () => {
  const [target, setTarget] = createSignal<HTMLElement>();
  const [container, setContainer] = createSignal<HTMLElement>();
  const [show, setShow] = createSignal(false);
  const [placement, setPlacement] = createSignal<Placement>("bottom");

  function handleClick() {
    if (!show()) {
      setPlacement("left");
      setShow(true);
    } else {
      if (placement() === "bottom") {
        setShow(false);
      }
      setPlacement(PLACEMENTS[PLACEMENTS.indexOf(placement()) + 1]);
    }
  }

  return (
    <div class="container" ref={setContainer}>
      <header>
        <h2>Overlay</h2>
        <p>Click the button to show/position an overlay</p>
        <div class="d-flex justify-content-center">
          <button ref={setTarget} onclick={handleClick} class="btn btn-primary">
            I am an overlay target
          </button>
        </div>
        <Overlay
          target={target}
          container={container}
          show={show()}
          placement={placement()}
          offset={[0, 10]}
          flip
        >
          {(props, meta) => (
            <div class="tooltip bs-tooltip-auto show" {...props()}>
              <div class="tooltip-arrow" {...meta().arrowProps}></div>
              <div class="tooltip-inner">I am a overlay!</div>
            </div>
          )}
        </Overlay>
      </header>
    </div>
  );
};

export default App;
