const LayoutGridApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Container</h3>
    <code>import Container from 'solid-bootstrap/Container'</code>
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
                <p>You can use a custom element for this component</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">fluid </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>true</code>
                  <span> | </span>
                  <code>"sm"</code>
                  <span> | </span>
                  <code>"md"</code>
                  <span> | </span>
                  <code>"lg"</code>
                  <span> | </span>
                  <code>"xl"</code>
                  <span> | </span>
                  <code>"xxl"</code>
                </span>
              </div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Allow the Container to fill all of its available horizontal
                  space.
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
              <code>'container'</code>
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

    <h3>Row</h3>
    <code>import Row from 'solid-bootstrap/Row'</code>
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
            <td class="font-monospace">lg </td>
            <td class="font-monospace">
              <div>{`number | 'auto' | { cols: number | 'auto' }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns that will fit next to each other on
                  large devices (≥992px). Use <code>auto</code> to give columns
                  their natural widths.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">md </td>
            <td class="font-monospace">
              <div>{`number | 'auto' | { cols: number | 'auto' }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns that will fit next to each other on
                  medium devices (≥768px). Use <code>auto</code> to give columns
                  their natural widths.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">sm </td>
            <td class="font-monospace">
              <div>{`number | 'auto' | { cols: number | 'auto' }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns that will fit next to each other on
                  small devices (≥576px). Use <code>auto</code> to give columns
                  their natural widths.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">xl </td>
            <td class="font-monospace">
              <div>{`number | 'auto' | { cols: number | 'auto' }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns that will fit next to each other on
                  extra large devices (≥1200px). Use <code>auto</code> to give
                  columns their natural widths.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">xs </td>
            <td class="font-monospace">
              <div>{`number | 'auto' | { cols: number | 'auto' }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns that will fit next to each other on
                  extra small devices (&lt;576px). Use <code>auto</code> to give
                  columns their natural widths.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">xxl </td>
            <td class="font-monospace">
              <div>{`number | 'auto' | { cols: number | 'auto' }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns that will fit next to each other on
                  extra extra large devices (≥1400px). Use <code>auto</code> to
                  give columns their natural widths.
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
              <code>'row'</code>
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

    <h3>Col</h3>
    <code>import Col from 'solid-bootstrap/Col'</code>
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
            <td class="font-monospace">lg </td>
            <td class="font-monospace">
              <div>{`boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The number of columns to span on large devices (≥992px)</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">md </td>
            <td class="font-monospace">
              <div>{`boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The number of columns to span on medium devices (≥768px)</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">sm </td>
            <td class="font-monospace">
              <div>{`boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The number of columns to span on small devices (≥576px)</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">xl </td>
            <td class="font-monospace">
              <div>{`boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns to span on extra large devices (≥1200px)
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">xs </td>
            <td class="font-monospace">
              <div>{`boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns to span on extra small devices
                  (&lt;576px)
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">xxl </td>
            <td class="font-monospace">
              <div>{`boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The number of columns to span on extra extra large devices
                  (≥1400px)
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
              <code>'col'</code>
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

export default LayoutGridApi;
