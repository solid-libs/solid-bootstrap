const BreadcrumbApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Breadcrumb</h3>
    <code>import Breadcrumb from 'solid-bootstrap/Breadcrumb'</code>
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
              <code>&lt;nav&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">label </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'breadcrumb'</code>
            </td>
            <td>
              <div>
                <p>
                  ARIA label for the nav element{" "}
                  <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">
                    https://www.w3.org/TR/wai-aria-practices/#breadcrumb
                  </a>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">listProps </td>
            <td class="font-monospace">
              <div>object</div>
            </td>
            <td>
              <code>{}</code>
            </td>
            <td>
              <div>
                <p>
                  Additional props passed as-is to the underlying{" "}
                  <code>&lt;ol&gt;</code> element
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
              <code>'breadcrumb'</code>
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
    <h3>Breadcrumb.Item</h3>
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
                  Adds a visual "active" state to a Breadcrumb Item and disables
                  the link.
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
              <code>&lt;li&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
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
              <div>
                <p>
                  <code>href</code> attribute for the inner <code>a</code>{" "}
                  element
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">linkAs </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;Anchor&gt;</code>
            </td>
            <td>
              <div>
                <p>
                  You can use a custom element type for this component's inner
                  link.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">linkProps </td>
            <td class="font-monospace">
              <div>object</div>
            </td>
            <td>
              <code>{}</code>
            </td>
            <td>
              <div>
                <p>
                  Additional props passed as-is to the underlying link for
                  non-active items.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">target </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  <code>target</code> attribute for the inner <code>a</code>{" "}
                  element
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">title </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  <code>title</code> attribute for the inner <code>a</code>{" "}
                  element
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
              <code>'breadcrumb-item'</code>
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

export default BreadcrumbApi;
