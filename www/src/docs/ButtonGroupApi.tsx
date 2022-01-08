const ButtonGroupApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>ButtonGroup</h3>
    <code>
      import {"{"} ButtonGroup {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">role </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'group'</code>
            </td>
            <td>
              <div>
                <p>
                  An ARIA role describing the button group. Usually the default "group" role is
                  fine. An <code>aria-label</code> or <code>aria-labelledby</code> prop is also
                  recommended.
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
                <p>Sets the size for all Buttons in the group.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">vertical </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Make the set of Buttons appear vertically stacked.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'btn-group'</code>
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
    <h3>ButtonToolbar</h3>
    <code>
      import {"{"} ButtonToolbar {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">role </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'toolbar'</code>
            </td>
            <td>
              <div>
                <p>
                  The ARIA role describing the button toolbar. Generally the default "toolbar" role
                  is correct. An <code>aria-label</code> or <code>aria-labelledby</code> prop is
                  also recommended.
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
              <code>'btn-toolbar'</code>
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

export default ButtonGroupApi;
