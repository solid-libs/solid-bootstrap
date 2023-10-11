import {Component, createSignal, useContext} from "solid-js";
import {Overlay, OverlayContext} from "solid-bootstrap-core";
import GithubSource from "../GithubSource";

const PLACEMENTS = ["top", "right", "bottom", "left"];

export const CoreOverlayDocs: Component = () => {
  const [target, setTarget] = createSignal<HTMLElement>();
  const [container, setContainer] = createSignal<HTMLElement | null>(null);
  const [show, setShow] = createSignal(false);
  const [placement, setPlacement] = createSignal<any>();

  function showOverlayClick() {
    if (!show()) {
      setPlacement("top");
      setShow(true);
    } else if (placement() === "left") {
      setShow(false);
    } else {
      setPlacement(PLACEMENTS[PLACEMENTS.indexOf(placement()!) + 1]);
    }
  }

  return (
    <div class="row gy-4" ref={setContainer}>
      <div>
        <GithubSource name="CoreOverlayDocs" />
        <h2>Overlays (core)</h2>
        <p class="lead">
          A powerful and flexible overlay component for showing things over, and next to, other
          things.
        </p>
        <p>
          This example is styled to look like a tooltip (with an adaptive arrow). It also
          demonstates using an optional <code>{"<Transition />"}</code>.
        </p>
        <p>Click the button to cycle through placement options.</p>
      </div>
      <div class="d-flex justify-content-center">
        {/* Button is the overlay target to position around */}
        <button ref={setTarget} onclick={showOverlayClick} class="btn btn-primary">
          I am an overlay target
        </button>
      </div>
      <div>
        <Overlay
          show={show()}
          offset={[0, 5]}
          container={container}
          target={target}
          placement={placement()}
          flip
        >
          {/* Render overlay (tooltip) with props from popperjs */}
          {() => {
            const context = useContext(OverlayContext);
            return (
              <div class="tooltip bs-tooltip-auto show" {...context?.wrapperProps}>
                <div class="tooltip-arrow" {...context?.arrowProps}></div>
                <div class="tooltip-inner">I am a overlay!</div>
              </div>
            );
          }}
        </Overlay>
      </div>
    </div>
  );
};

export default CoreOverlayDocs;
