const ModalApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Modal</h3>
    <code>import Modal from 'solid-bootstrap/Modal'</code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">animation </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>Open and close the Modal with a slide and fade animation.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">aria-labelledby </td>
            <td class="font-monospace">
              <div>any</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">autoFocus </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  When <code>true</code> The modal will automatically shift
                  focus to itself when it opens, and replace it to the last
                  focused element when it closes. Generally this should never be
                  set to false as it makes the Modal less accessible to
                  assistive technologies, like screen-readers.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">backdrop </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'static'</code>
                  <span> | </span>
                  <code>true</code>
                  <span> | </span>
                  <code>false</code>
                </span>
              </div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  Include a backdrop component. Specify 'static' for a backdrop
                  that doesn't trigger an "onHide" when clicked.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">backdropClassName </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Add an optional extra class name to .modal-backdrop It could
                  end up looking like class="modal-backdrop foo-modal-backdrop
                  in".
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">centered </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>vertically center the Dialog in the window</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">container </td>
            <td class="font-monospace">
              <div>any</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">contentClassName </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Add an optional extra class name to .modal-content</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">dialogAs </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;ModalDialog&gt;</code>
            </td>
            <td>
              <div>
                <p>
                  A Component type that provides the modal content Markup. This
                  is a useful prop when you want to use your own styles and
                  markup to create a custom modal component.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">dialogClassName </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>A css class to apply to the Modal dialog DOM node.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">enforceFocus </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  When <code>true</code> The modal will prevent focus from
                  leaving the Modal while open. Consider leaving the default
                  value here, as it is necessary to make the Modal work well
                  with assistive technologies, such as screen readers.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">fullscreen </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>true</code>
                  <span> | </span>
                  <code>'sm-down'</code>
                  <span> | </span>
                  <code>'md-down'</code>
                  <span> | </span>
                  <code>'lg-down'</code>
                  <span> | </span>
                  <code>'xl-down'</code>
                  <span> | </span>
                  <code>'xxl-down'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Renders a fullscreen modal. Specifying a breakpoint will
                  render the modal as fullscreen <strong>below</strong> the
                  breakpoint size.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">keyboard </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>Close the modal when escape key is pressed</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">manager </td>
            <td class="font-monospace">
              <div>object</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A ModalManager instance used to track and manage the state of
                  open Modals. Useful when customizing how modals interact
                  within a container
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onEnter </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Callback fired before the Modal transitions in</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onEntered </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Callback fired after the Modal finishes transitioning in</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onEntering </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Callback fired as the Modal begins to transition in</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onEscapeKeyDown </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A callback fired when the escape key, if specified in{" "}
                  <code>keyboard</code>, is pressed.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onExit </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Callback fired right before the Modal transitions out</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onExited </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Callback fired after the Modal finishes transitioning out</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onExiting </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Callback fired as the Modal begins to transition out</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onHide </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A callback fired when the header closeButton or non-static
                  backdrop is clicked. Required if either are specified.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onShow </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>A callback fired when the Modal is opening.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">restoreFocus </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  When <code>true</code> The modal will restore focus to
                  previously focused element once modal is hidden
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">restoreFocusOptions </td>
            <td class="font-monospace">
              <div>shape</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Options passed to focus function when{" "}
                  <code>restoreFocus</code> is set to <code>true</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">scrollable </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Allows scrolling the <code>&lt;Modal.Body&gt;</code> instead
                  of the entire Modal when overflowing.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">show </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  When <code>true</code> The modal will show itself.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">size </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'sm'</code>
                  <span> | </span>
                  <code>'lg'</code>
                  <span> | </span>
                  <code>'xl'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Render a large, extra large or small modal. When not provided,
                  the modal is rendered with medium (default) size.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'modal'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and
                  modifier class names prefix.{" "}
                  <strong>This is an escape hatch</strong> for working with
                  heavily customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>ModalDialog</h3>
    <code>import ModalDialog from 'solid-bootstrap/ModalDialog'</code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">centered </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Specify whether the Component should be vertically centered
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">contentClassName </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">fullscreen </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>true</code>
                  <span> | </span>
                  <code>'sm-down'</code>
                  <span> | </span>
                  <code>'md-down'</code>
                  <span> | </span>
                  <code>'lg-down'</code>
                  <span> | </span>
                  <code>'xl-down'</code>
                  <span> | </span>
                  <code>'xxl-down'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Renders a fullscreen modal. Specifying a breakpoint will
                  render the modal as fullscreen <strong>below</strong> the
                  breakpoint size.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">scrollable </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Allows scrolling the <code>&lt;Modal.Body&gt;</code> instead
                  of the entire Modal when overflowing.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">size </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'sm'</code>
                  <span> | </span>
                  <code>'lg','xl'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Render a large, extra large or small modal.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'modal'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and
                  modifier class names prefix.{" "}
                  <strong>This is an escape hatch</strong> for working with
                  heavily customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>ModalHeader</h3>
    <code>import ModalHeader from 'solid-bootstrap/ModalHeader'</code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">closeButton </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Specify whether the Component should contain a close button
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">closeLabel </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'Close'</code>
            </td>
            <td>
              <div>
                <p>
                  Provides an accessible label for the close button. It is used
                  for Assistive Technology when the label text is not readable.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">closeVariant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'white'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Sets the variant for close button.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onHide </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A Callback fired when the close button is clicked. If used
                  directly inside a Modal component, the onHide will
                  automatically be propagated up to the parent Modal{" "}
                  <code>onHide</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'modal-header'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and
                  modifier class names prefix.{" "}
                  <strong>This is an escape hatch</strong> for working with
                  heavily customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="overflow-auto mt-4 mb-5 border border-light">
        <table class="bg-white mb-0 table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-monospace">as </td>
              <td class="font-monospace">
                <div>elementType</div>
              </td>
              <td>
                <code>&lt;DivStyledAsH4&gt;</code>
              </td>
              <td>
                <div>
                  <p>You can use a custom element type for this component.</p>
                </div>
              </td>
            </tr>
            <tr>
              <td class="font-monospace">
                bsPrefix <sup class="text-danger">required</sup>
              </td>
              <td class="font-monospace">
                <div>string</div>
              </td>
              <td>
                <code>'modal-title'</code>
              </td>
              <td>
                <div>
                  <p>
                    Change the underlying component CSS base class name and
                    modifier class names prefix.{" "}
                    <strong>This is an escape hatch</strong> for working with
                    heavily customized bootstrap css.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h3>ModalTitle</h3>
    <code>import ModalTitle from 'solid-bootstrap/ModalTitle'</code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;DivStyledAsH4&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              bsPrefix <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'modal-title'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and
                  modifier class names prefix.{" "}
                  <strong>This is an escape hatch</strong> for working with
                  heavily customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>ModalBody</h3>
    <code>import ModalBody from 'solid-bootstrap/ModalBody'</code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;div&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              bsPrefix <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'modal-body'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and
                  modifier class names prefix.{" "}
                  <strong>This is an escape hatch</strong> for working with
                  heavily customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>ModalFooter</h3>
    <code>import ModalFooter from 'solid-bootstrap/ModalFooter'</code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;div&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              bsPrefix <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'modal-footer'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and
                  modifier class names prefix.{" "}
                  <strong>This is an escape hatch</strong> for working with
                  heavily customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ModalApi;
