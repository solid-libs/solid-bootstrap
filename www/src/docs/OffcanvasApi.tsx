const OffcanvasApi = () => (
  <div class="mt-5">
    <h2>API</h2>
    <h3>Offcanvas</h3>
    <code>
      import {"{"} Offcanvas {"}"} from 'solid-bootstrap'
    </code>
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
            <td class="font-monospace">aria-labelledby </td>
            <td class="font-monospace">
              <div>string</div>
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
                  When <code>true</code> The offcanvas will automatically shift focus to itself when
                  it opens, and replace it to the last focused element when it closes. Generally
                  this should never be set to false as it makes the offcanvas less accessible to
                  assistive technologies, like screen-readers.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">backdrop </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>Include a backdrop component.</p>
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
                <p>Add an optional extra class name to .offcanvas-backdrop.</p>
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
                  When <code>true</code> The offcanvas will prevent focus from leaving the offcanvas
                  while open. Consider leaving the default value here, as it is necessary to make
                  the offcanvas work well with assistive technologies, such as screen readers.
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
                <p>Closes the offcanvas when escape key is pressed.</p>
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
                <p>Callback fired before the offcanvas transitions in</p>
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
                <p>Callback fired after the offcanvas finishes transitioning in</p>
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
                <p>Callback fired as the offcanvas begins to transition in</p>
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
                  A callback fired when the escape key, if specified in <code>keyboard</code>, is
                  pressed.
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
                <p>Callback fired right before the offcanvas transitions out</p>
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
                <p>Callback fired after the offcanvas finishes transitioning out</p>
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
                <p>Callback fired as the offcanvas begins to transition out</p>
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
                  A callback fired when the header closeButton or backdrop is clicked. Required if
                  either are specified.
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
                <p>A callback fired when the offcanvas is opening.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">placement </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'start'</code>
                  <span> | </span>
                  <code>'end'</code>
                  <span> | </span>
                  <code>'top'</code>
                  <span> | </span>
                  <code>'bottom'</code>
                </span>
              </div>
            </td>
            <td>
              <code>'start'</code>
            </td>
            <td>
              <div>
                <p>Which side of the viewport the offcanvas will appear from.</p>
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
                  When <code>true</code> The offcanvas will restore focus to previously focused
                  element once offcanvas is hidden
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
                  Options passed to focus function when <code>restoreFocus</code> is set to{" "}
                  <code>true</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">scroll </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Allow body scrolling while offcanvas is open.</p>
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
                  When <code>true</code> The offcanvas will show itself.
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
              <code>'offcanvas'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and modifier class names
                  prefix. <strong>This is an escape hatch</strong> for working with heavily
                  customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>OffcanvasHeader</h3>
    <code>
      import {"{"} OffcanvasHeader {"}"} from 'solid-bootstrap'
    </code>
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
                <p>Specify whether the Component should contain a close button</p>
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
                  Provides an accessible label for the close button. It is used for Assistive
                  Technology when the label text is not readable.
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
                  A Callback fired when the close button is clicked. If used directly inside a
                  Offcanvas component, the onHide will automatically be propagated up to the parent
                  Offcanvas <code>onHide</code>.
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
              <code>'offcanvas-header'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and modifier class names
                  prefix. <strong>This is an escape hatch</strong> for working with heavily
                  customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>OffcanvasTitle</h3>
    <code>
      import {"{"} OffcanvasTitle {"}"} from 'solid-bootstrap'
    </code>
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
              <code>&lt;DivStyledAsH5&gt;</code>
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
              <code>'offcanvas-title'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and modifier class names
                  prefix. <strong>This is an escape hatch</strong> for working with heavily
                  customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>OffcanvasBody</h3>
    <code>
      import {"{"} OffcanvasBody {"}"} from 'solid-bootstrap'
    </code>
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
              <code>'offcanvas-body'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and modifier class names
                  prefix. <strong>This is an escape hatch</strong> for working with heavily
                  customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OffcanvasApi;
