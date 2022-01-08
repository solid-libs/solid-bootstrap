const PlaceholderApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Placeholder</h3>
    <code>
      import {"{"} Placeholder {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">animation </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'glow'</code>
                  <span> | </span>
                  <code>'wave'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Changes the animation of the placeholder.</p>
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
                  <code>'light'</code>
                  <span> | </span>
                  <code>'dark'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Change the background color of the placeholder.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">size </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'xs'</code>
                  <span> | </span>
                  <code>'sm'</code>
                  <span> | </span>
                  <code>'lg'</code>
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
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'placeholder'</code>
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

    <h3>Placeholder.Button</h3>
    <code>
      import {"{"} Placeholder {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">animation </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'glow'</code>
                  <span> | </span>
                  <code>'wave'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Changes the animation of the placeholder.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">size </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'xs'</code>
                  <span> | </span>
                  <code>'sm'</code>
                  <span> | </span>
                  <code>'lg'</code>
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
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Button variant.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'placeholder'</code>
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

export default PlaceholderApi;
