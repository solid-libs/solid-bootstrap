const SpinnerApi = () => (
  <div class="mt-5">
    <h2>API</h2>
    <h3>Spinner</h3>
    <code>
      import {"{"} Spinner {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">
              animation <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'border'</code>
                  <span> | </span>
                  <code>'grow'</code>
                </span>
              </div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>Changes the animation style of the spinner.</p>
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
            <td class="font-monospace">children </td>
            <td class="font-monospace">
              <div>element</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>This component may be used to wrap child elements or components.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">role </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  An ARIA accessible role applied to the Menu component. This should generally be
                  set to 'status'
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
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Component size variations.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">variant </td>
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
                  <code>'light'</code>
                  <span> | </span>
                  <code>'dark'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The visual color style of the spinner</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'spinner'</code>
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

export default SpinnerApi;
