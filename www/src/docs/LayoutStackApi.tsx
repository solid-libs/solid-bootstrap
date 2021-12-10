const LayoutStackApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Stack</h3>
    <code>
      import {"{"} Stack {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">gap </td>
            <td class="font-monospace">
              <div>responsivePropType(PropTypes.number)</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Sets the spacing between each item. Valid values are{" "}
                  <code>0-5</code>.
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
              <code>'hstack | vstack'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and
                  modifier class names prefix.
                  <strong>This is an escape hatch</strong> for working with
                  heavily customized bootstrap css.
                </p>
                <p>
                  Defaults to <code>hstack</code> if direction is{" "}
                  <code>horizontal</code> or <code>vstack</code> if direction is{" "}
                  <code>vertical</code>.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default LayoutStackApi;
