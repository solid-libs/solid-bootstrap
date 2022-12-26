import {createSignal} from "solid-js";
import {Button, Modal} from "solid-bootstrap-core";

export const ModalExample1 = () => {
  const [show, setShow] = createSignal(false);
  return (
    <div>
      {/* Using Bootstrap CSS here - but you can use whatever you like */}
      <Button class="btn btn-primary" onClick={() => setShow(true)}>
        Open Modal
      </Button>

      <Modal
        show={show()}
        aria-labelledby="modal-1-label"
        onHide={() => setShow(false)}
        renderBackdrop={(props: any) => <div class="modal-backdrop show" {...props} />}
        class="modal d-block pe-none"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 id="modal-1-label">Alert!</h4>
            </div>
            <div class="modal-body">
              <p>Some important content!</p>
            </div>
            <div class="modal-footer">
              <Button onClick={() => setShow(false)} class="btn btn-secondary float-right">
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

let rand = (min: number, max: number) => min + Math.floor(Math.random() * (max - min));

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
          <h4 id="modal-label">Text in a modal</h4>
        </div>
        <div class="modal-body">
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          <ModalExample2 />
        </div>
      </div>
    </div>
  );
};

export const ModalExample2 = () => {
  const [show, setShow] = createSignal(false);
  return (
    <>
      <div>
        <button class="btn btn-primary" onClick={() => setShow(true)}>
          Open modal
        </button>
        <div class="pt-3">Click to get the full Modal experience!</div>
      </div>
      <p></p>

      <Modal
        class="modal d-block pe-none"
        show={show()}
        onHide={() => setShow(false)}
        renderBackdrop={(props: any) => (
          <div class="modal-backdrop show" style={{"z-index": 1055}} {...props} />
        )}
        aria-labelledby="modal-label"
      >
        <RandomlyPositionedModal />
      </Modal>
    </>
  );
};
