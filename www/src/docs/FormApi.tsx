const FormApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Form</h3>
    <code>
      import {"{"} Form {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">ref </td>
            <td class="font-monospace">
              <div>ReactRef</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The Form <code>ref</code> will be forwarded to the underlying
                  element, which means, unless it's rendered <code>as</code> a
                  composite component, it will be a DOM node, when resolved.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;form&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">validated </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Mark a form as having been validated. Setting it to{" "}
                  <code>true</code> will toggle any validation styles on the
                  forms elements.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Form.Floating</h3>
    <code>
      import {"{"} Form {"}"} from 'solid-bootstrap'
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
              <code>'form-floating'</code>
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
    <h3>Form.Group</h3>
    <code>
      import {"{"} Form {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">ref </td>
            <td class="font-monospace">
              <div>ReactRef</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The FormGroup <code>ref</code> will be forwarded to the
                  underlying element. Unless the FormGroup is rendered{" "}
                  <code>as</code> a composite component, it will be a DOM node,
                  when resolved.
                </p>
              </div>
            </td>
          </tr>
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
            <td class="font-monospace">controlId </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Sets <code>id</code> on <code>&lt;FormControl&gt;</code> and{" "}
                  <code>htmlFor</code> on <code>&lt;FormGroup.Label&gt;</code>.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Form.Text</h3>
    <code>
      import {"{"} Form {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">ref </td>
            <td class="font-monospace">
              <div>ReactRef</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The FormText <code>ref</code> will be forwarded to the
                  underlying element. Unless the FormText is rendered{" "}
                  <code>as</code> a composite component, it will be a DOM node,
                  when resolved.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;small&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">muted </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A convenience prop for add the <code>text-muted</code> class,
                  since it's so commonly used here.
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
              <code>'form-text'</code>
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
    <h3>Form.Control</h3>
    <code>
      import {"{"} Form {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">ref </td>
            <td class="font-monospace">
              <div>ReactRef</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The FormControl <code>ref</code> will be forwarded to the
                  underlying input element, which means unless <code>as</code>{" "}
                  is a composite component, it will be a DOM node, when
                  resolved.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>'input' | 'textarea' | elementType</div>
            </td>
            <td>
              <code>'input'</code>
            </td>
            <td>
              <div>
                <p>
                  The underlying HTML element to use when rendering the
                  FormControl.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">disabled </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Make the control disabled</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">htmlSize </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The size attribute of the underlying HTML element. Specifies
                  the visible width in characters if <code>as</code> is{" "}
                  <code>'input'</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">id </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Uses <code>controlId</code> from{" "}
                  <code>&lt;FormGroup&gt;</code> if not explicitly specified.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isInvalid </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Add "invalid" validation styles to the control and
                  accompanying label
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isValid </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Add "valid" validation styles to the control</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onChange </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A callback fired when the <code>value</code> prop changes
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">plaintext </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Render the input as plain text. Generally used along side{" "}
                  <code>readOnly</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">readOnly </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Make the control readonly</p>
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
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Input size variants</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">type </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The HTML input <code>type</code>, which is only relevant if{" "}
                  <code>as</code> is <code>'input'</code> (the default).
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">value </td>
            <td class="font-monospace">
              <div>string | arrayOf | number</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onChange</code>, initial prop:{" "}
                      <code>defaultValue</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>
                  The <code>value</code> attribute of underlying input
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
              <code>{"form-control"}</code>
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
    <h3>FormControl.Feedback</h3>
    <code>
      import {"{"} FormControl {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">tooltip </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Display feedback as a tooltip.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">type </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'valid'</code>
                  <span> | </span>
                  <code>'invalid'</code>
                </span>
              </div>
            </td>
            <td>
              <code>'valid'</code>
            </td>
            <td>
              <div>
                <p>
                  Specify whether the feedback is for valid or invalid fields
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>Form.Check</h3>
    <code>
      import {"{"} Form {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">ref </td>
            <td class="font-monospace">
              <div>ReactRef</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The FormCheck <code>ref</code> will be forwarded to the
                  underlying input element, which means it will be a DOM node,
                  when resolved.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>'input' | elementType</div>
            </td>
            <td>
              <code>'input'</code>
            </td>
            <td>
              <div>
                <p>
                  The underlying HTML element to use when rendering the
                  FormCheck.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">children </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Provide a function child to manually handle the layout of the
                  FormCheck's inner components.
                </p>
                <div>
                  <pre class="language-jsx">
                    <code class="language-jsx">
                      {`<FormCheck>
  <FormCheck.Input isInvalid type={radio} /> 
  <FormCheck.Label>Allow us to contact you?</FormCheck.Label>
  <Feedback type='invalid'>Yo this is required</Feedback>"
</FormCheck>`}
                    </code>
                  </pre>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">disabled </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Disables the control.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">feedback </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A message to display when the input is in a validation state
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">feedbackTooltip </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Display feedback as a tooltip.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">id </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A HTML id attribute, necessary for proper form accessibility.
                  An id is recommended for allowing label clicks to toggle the
                  check control.
                </p>
                <p>
                  This is <strong>required</strong> when{" "}
                  <code>type="switch"</code> due to how they are rendered.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">inline </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Groups controls horizontally with other <code>FormCheck</code>
                  s.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isInvalid </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Manually style the input as invalid</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isValid </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Manually style the input as valid</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">label </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Label for the control.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">title </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>''</code>
            </td>
            <td>
              <div>
                <p>
                  <code>title</code> attribute for the underlying{" "}
                  <code>FormCheckLabel</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">type </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'radio'</code>
                  <span> | </span>
                  <code>'checkbox'</code>
                  <span> | </span>
                  <code>'switch'</code>
                </span>
              </div>
            </td>
            <td>
              <code>'checkbox'</code>
            </td>
            <td>
              <div>
                <p>The type of checkable.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'form-check'</code>
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
          <tr>
            <td class="font-monospace">bsSwitchPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'form-switch'</code>
            </td>
            <td>
              <div>
                <p>bsPrefix override for the base switch class.</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>FormCheck.Input</h3>
    <code>
      import {"{"} FormCheck {"}"} from 'solid-bootstrap'
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
              <div>'input' | elementType</div>
            </td>
            <td>
              <code>'input'</code>
            </td>
            <td>
              <div>
                <p>
                  The underlying HTML element to use when rendering the
                  FormCheckInput.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">id </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A HTML id attribute, necessary for proper form accessibility.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isInvalid </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Manually style the input as invalid</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isValid </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Manually style the input as valid</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">type </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'radio'</code>
                  <span> | </span>
                  <code>'checkbox'</code>
                </span>
              </div>
            </td>
            <td>
              <code>'checkbox'</code>
            </td>
            <td>
              <div>
                <p>The type of checkable.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'form-check-input'</code>
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
    <h3>FormCheck.Label</h3>
    <code>
      import {"{"} FormCheck {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">htmlFor </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The HTML for attribute for associating the label with an input
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
              <code>'form-check-label'</code>
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
    <h3>Form.Range</h3>
    <code>
      import {"{"} Form {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">disabled </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Make the control disabled</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">id </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Uses <code>controlId</code> from{" "}
                  <code>&lt;FormGroup&gt;</code> if not explicitly specified.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onChange </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A callback fired when the <code>value</code> prop changes
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">value </td>
            <td class="font-monospace">
              <div>string | arrayOf | number</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onChange</code>, initial prop:{" "}
                      <code>defaultValue</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>
                  The <code>value</code> attribute of underlying input
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
              <code>{"form-range"}</code>
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
    <h3>Form.Select</h3>
    <code>
      import {"{"} Form {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">disabled </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Make the control disabled</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">htmlSize </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The size attribute of the underlying HTML element. Specifies
                  the number of visible options.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isInvalid </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Add "invalid" validation styles to the control and
                  accompanying label
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isValid </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Add "valid" validation styles to the control</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onChange </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A callback fired when the <code>value</code> prop changes
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
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Size variants</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">value </td>
            <td class="font-monospace">
              <div>string | arrayOf | number</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onChange</code>, initial prop:{" "}
                      <code>defaultValue</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>
                  The <code>value</code> attribute of underlying input
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
              <code>{"form-select"}</code>
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
    <h3>FloatingLabel</h3>
    <code>
      import {"{"} FloatingLabel {"}"} from 'solid-bootstrap'
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
            <td></td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">controlId </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Sets <code>id</code> on <code>&lt;FormControl&gt;</code> and{" "}
                  <code>htmlFor</code> on <code>&lt;label&gt;</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              label <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Form control label.</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default FormApi;
