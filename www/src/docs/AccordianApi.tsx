const AccordianApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Accordion</h3>
    <code>import Accordion from 'solid-bootstrap/Accordion'</code>
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
            <td class="font-monospace">activeKey </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The current active key that corresponds to the currently
                  expanded card
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Set a custom element for this component</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">defaultActiveKey </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The default active key that is expanded on start</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">flush </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Renders accordion edge-to-edge with its parent container</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'accordion'</code>
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
    <h3>Accordion.Item</h3>
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
                <p>Set a custom element for this component</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              eventKey <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>A unique key used to control this item's collapse/expand.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'accordion-item'</code>
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
    <h3>Accordion.Header</h3>
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
              <code>&lt;h2&gt;</code>
            </td>
            <td>
              <div>
                <p>Set a custom element for this component</p>
              </div>
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
                <p>
                  Click handler for the <code>AccordionButton</code> element
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
              <code>'accordion-header'</code>
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
    <h3>Accordion.Body</h3>
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
                <p>Set a custom element for this component</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'accordion-body'</code>
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
    <h3>Accordion.Button</h3>
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
              <code>&lt;button&gt;</code>
            </td>
            <td>
              <div>
                <p>Set a custom element for this component</p>
              </div>
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
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'accordion-button'</code>
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
    <h3>Accordion.Collapse</h3>
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
                <p>Set a custom element for this component</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              children <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>element</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Children prop should only contain a single child, and is
                  enforced as such
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              eventKey <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A key that corresponds to the toggler that triggers this
                  collapse's expand or collapse.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AccordianApi;
