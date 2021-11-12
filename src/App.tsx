import { Component, ErrorBoundary } from "solid-js";
import Overlay from "./overlays/Overlay";
import { createSignal } from "solid-js";
import { Placement } from "./overlays/usePopper";
import styles from "./App.module.css";

const PLACEMENTS: Placement[] = ["bottom", "left", "top", "right"];

const App: Component = () => {
  const [target, setTarget] = createSignal<HTMLElement>();
  const [container, setContainer] = createSignal<HTMLElement>();
  const [show, setShow] = createSignal(false);
  const [placement, setPlacement] = createSignal<Placement>();

  function handleClick() {
    setPlacement(PLACEMENTS[PLACEMENTS.indexOf(placement()!) + 1]);
    setShow(!!placement());
  }

  return (
    <div class="container" ref={setContainer}>
      <h1>Solid-Overlays</h1>
      <header>
        <h3>Overlay</h3>
        <p>
          For this example the overlay is styled to look like a tooltip (with an
          adaptive arrow). <br />
          Click the button to cycle through placement options.
        </p>
        <div class="d-flex justify-content-center">
          {/* Button is the overlay target to position around */}
          <button ref={setTarget} onclick={handleClick} class="btn btn-primary">
            I am an overlay target
          </button>
        </div>
        <Overlay
          target={target}
          container={container}
          show={show()}
          placement={placement()}
          offset={[0, 5]}
          flip
        >
          {/* Render overlay (tooltip) with props from popperjs */}
          {(props, more) => (
            <div class="tooltip bs-tooltip-auto show" {...props()}>
              <div class="tooltip-arrow" {...more().arrowProps}></div>
              <div class="tooltip-inner">I am a overlay!</div>
            </div>
          )}
        </Overlay>
      </header>
    </div>
  );
};

export default App;
