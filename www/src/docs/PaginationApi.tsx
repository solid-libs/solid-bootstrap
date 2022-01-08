const PaginationApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Pagination</h3>
    <code>
      import {"{"} Pagination {"}"} from 'solid-bootstrap'
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
                <p>Set's the size of all PageItems.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'pagination'</code>
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
    <h3>PageItem</h3>
    <code>
      import {"{"} PageItem {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">active </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Styles PageItem as active, and renders a <code>&lt;span&gt;</code> instead of an{" "}
                  <code>&lt;a&gt;</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">activeLabel </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'(current)'</code>
            </td>
            <td>
              <div>
                <p>An accessible label indicating the active state..</p>
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
                <p>Disables the PageItem</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">href </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onClick </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>A callback function for when this component is clicked</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PaginationApi;
