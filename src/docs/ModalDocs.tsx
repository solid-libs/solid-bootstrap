import { Component, createEffect, splitProps } from "solid-js";
import Modal, { ModalProps, RenderModalBackdropProps } from "../overlays/Modal";
import { createSignal } from "solid-js";
import { Transition } from "solid-transition-group";

const ModalExample = () => {
  const [show, setShow] = createSignal(false);

  return (
    <>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary" onClick={() => setShow(true)}>
          Open modal
        </button>
      </div>
      <p>Click to get the full Modal experience!</p>

      <Modal
        class="modal fade show d-block"
        show={show()}
        onHide={() => setShow(false)}
        renderBackdrop={(props: RenderModalBackdropProps) => (
          <div class="modal-backdrop fade show" {...props} />
        )}
        aria-labelledby="modal-label"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 id="modal-label">Text in a modal</h5>
            </div>
            <div class="modal-body">
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
            <div class="modal-footer">{/* <ModalExample /> */}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export const ModalDocs: Component = () => {
  return (
    <div>
      <h3>Modal</h3>
      <p class="lead">
        Love them or hate them, <code>{"<Modal />"}</code> provides a solid
        foundation for creating dialogs, lightboxes, or whatever else. The Modal
        component renders its children node in front of a backdrop component.
      </p>
      <p>
        The Modal offers a few helpful features over using just a{" "}
        <code>{"<Portal />"}</code> component and some styles:
      </p>
      <ul>
        <li>Manages dialog stacking when one-at-a-time just isn't enough.</li>
        <li>Creates a backdrop, for disabling interaction below the modal.</li>
        <li>
          It properly manages focus; moving to the modal content, and keeping it
          there until the modal is closed.
        </li>
        <li>It disables scrolling of the page content while open.</li>
        <li>Adds the appropriate ARIA roles are automatically.</li>
        <li>
          Easily-pluggable animations via a <code>{"<Transition />"}</code>{" "}
          component.
        </li>
      </ul>
      <p>
        Note that, in the same way the backdrop element prevents users from
        clicking or interacting with the page content underneath the Modal,
        screen readers also need to be signaled to not to interact with page
        content while the Modal is open. To do this, we use a common technique
        of applying the <code>aria-hidden='true'</code> attribute to the
        non-Modal elements in the Modal <code>container</code>. This means that
        for a Modal to be truly modal, it should have a <code>container</code>{" "}
        that is <em>outside</em> your app's hierarchy (such as the default:
        document.body).
      </p>
      <ModalExample />
    </div>
  );
};
