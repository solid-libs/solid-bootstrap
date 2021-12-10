const ListGroupApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>ListGroup</h3>
    <code>
      import {"{"} ListGroup {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">horizontal </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>true</code>
                  <span> | </span>
                  <code>'sm'</code>
                  <span> | </span>
                  <code>'md'</code>
                  <span> | </span>
                  <code>'lg'</code>
                  <span> | </span>
                  <code>'xl'</code>
                  <span> | </span>
                  <code>'xxl'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Changes the flow of the list group items from vertical to
                  horizontal. A value of <code>null</code> (the default) sets it
                  to vertical for all breakpoints; Just including the prop sets
                  it for all breakpoints, while{" "}
                  <code>{`{sm | md | lg | xl | xxl}`}</code>
                  makes the list group horizontal starting at that breakpoint’s{" "}
                  <code>min-width</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">numbered </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Generate numbered list items.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">variant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'flush'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Adds a variant to the list-group</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'list-group'</code>
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

    <h3>ListGroup.Item</h3>
    <code>
      import {"{"} ListGroup {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">action </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Marks a ListGroupItem as actionable, applying additional
                  hover, active and disabled styles for links and buttons.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">active </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Sets list item as active</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;{`{div | a | button}`}&gt;</code>
            </td>
            <td>
              <div>
                <p>
                  You can use a custom element type for this component. For none{" "}
                  <code>action</code> items, items render as <code>li</code>.
                  For actions the default is an achor or button element
                  depending on whether a <code>href</code> is provided.
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
                <p>Sets list item state as disabled</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">eventKey </td>
            <td class="font-monospace">
              <div>string | number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A unique identifier for the Component, the{" "}
                  <code>eventKey</code> makes it distinguishable from others in
                  a set. Similar to React's <code>key</code> prop, in that it
                  only needs to be unique amongst the Components siblings, not
                  globally.
                </p>
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
              <div></div>
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
                  <code>'dark'</code>
                  <span> | </span>
                  <code>'light'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Sets contextual classes for list item</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'list-group-item'</code>
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

export default ListGroupApi;
