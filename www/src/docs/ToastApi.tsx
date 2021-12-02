const ToastApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Toast</h3>
    <code>import Toast from 'solid-bootstrap/Toast'</code>
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
                <p>Apply a CSS fade transition to the toast</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">autohide </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Auto hide the toast</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bg </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'primary'</code>
                  <span> | </span>
                  <code>'secondary'</code>
                  <span> | </span>
                  <code>'success'</code>
                  <span> | </span>
                  <code>'danger'</code>
                  <span> | </span>
                  <code>'warning'</code>
                  <span> | </span>
                  <code>'info'</code>
                  <span> | </span>
                  <code>'dark'</code>
                  <span> | </span>
                  <code>'light'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Sets Toast background</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">delay </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td>
              <code>5000</code>
            </td>
            <td>
              <div>
                <p>Delay hiding the toast (ms)</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onClose </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>A Callback fired when the close button is clicked.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">show </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
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
            <td class="font-monospace">transition </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;ToastFade&gt;</code>
            </td>
            <td>
              <div>
                <p>
                  A <code>react-transition-group</code> Transition component
                  used to animate the Toast on dismissal.
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
              <code>'toast'</code>
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

    <h3>ToastHeader</h3>
    <code>import ToastHeader from 'solid-bootstrap/ToastHeader'</code>
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
              <code>true</code>
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
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
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

    <h3>ToastBody</h3>
    <code>import ToastBody from 'solid-bootstrap/ToastBody'</code>
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
              <code>'toast-body'</code>
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

    <h3>ToastContainer</h3>
    <code>import ToastContainer from 'solid-bootstrap/ToastContainer'</code>
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
            <td class="font-monospace">position </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'top-start'</code>
                  <span> | </span>
                  <code>'top-center'</code>
                  <span> | </span>
                  <code>'top-end'</code>
                  <span> | </span>
                  <code>'middle-start'</code>
                  <span> | </span>
                  <code>'middle-center'</code>
                  <span> | </span>
                  <code>'middle-end'</code>
                  <span> | </span>
                  <code>'bottom-start'</code>
                  <span> | </span>
                  <code>'bottom-center'</code>
                  <span> | </span>
                  <code>'bottom-end'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Where the toasts will be placed within the container.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'toast-container'</code>
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

export default ToastApi;
