import { Component } from "solid-js";
import Modal, {
  RenderModalBackdropProps,
} from "../../../packages/core/src/Modal";
import { createSignal } from "solid-js";

let rand = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min));

const RandomlyPositionedModal = () => {
  return (
    <div
      class="modal-dialog"
      style={{
        "margin-top": `${rand(5, 20)}%`,
        "margin-left": `${rand(20, 60)}%`,
      }}
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="modal-label">Text in a modal</h5>
        </div>
        <div class="modal-body">
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
        <div class="modal-footer">{<ModalExample />}</div>
      </div>
    </div>
  );
};

const ModalExample = () => {
  const [show, setShow] = createSignal(false);
  return (
    <>
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-primary" onClick={() => setShow(true)}>
          Open modal
        </button>
        <span class="ps-2">Click to get the full Modal experience!</span>
      </div>
      <p></p>

      <Modal
        class="modal d-block pe-none"
        show={show()}
        onHide={() => setShow(false)}
        renderBackdrop={(props: RenderModalBackdropProps) => (
          <div class="modal-backdrop show" {...props} />
        )}
        aria-labelledby="modal-label"
      >
        <RandomlyPositionedModal />
      </Modal>
    </>
  );
};

export const CoreModalDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Modals (core)</h3>
        <p class="lead">
          Love them or hate them, <code>{"<Modal />"}</code> provides a solid
          foundation for creating dialogs, lightboxes, or whatever else. The
          Modal component renders its children node in front of a backdrop
          component.
        </p>
        <p>
          The Modal offers a few helpful features over using just a{" "}
          <code>{"<Portal />"}</code> component and some styles:
        </p>
        <ul>
          <li>Manages dialog stacking when one-at-a-time just isn't enough.</li>
          <li>
            Creates a backdrop, for disabling interaction below the modal.
          </li>
          <li>
            It properly manages focus; moving to the modal content, and keeping
            it there until the modal is closed.
          </li>
          <li>It disables scrolling of the page content while open.</li>
          <li>Adds the appropriate ARIA roles are automatically.</li>
          <li>
            Easily-pluggable animations via a <code>{"<Transition />"}</code>{" "}
            component.
          </li>
        </ul>
      </div>
      <div>
        <ModalExample />
      </div>
    </div>
  );
};

export default CoreModalDocs;
