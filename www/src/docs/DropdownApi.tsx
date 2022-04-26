const DropdownApi = () => (
  <div class="mt-5">
    <h2>API</h2>
    <h3>DropdownButton</h3>
    <code>
      import {"{"} DropdownButton {"}"} from 'solid-bootstrap'
    </code>
    <p>
      A convenience component for simple or general use dropdowns. Renders a Button toggle and all
      children are passed directly to the default Dropdown.Menu. This component accepts all of
      Dropdown's props.
    </p>
    <p>
      All unknown props are passed through to the Dropdown component. Only the Button variant, size
      and bsPrefix props are passed to the toggle, along with menu-related props are passed to the
      Dropdown.Menu
    </p>
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
            <td class="font-monospace">align </td>
            <td class="font-monospace">
              <div>
                "start"|"end"|{"{"} sm: "start"|"end" {"}"}|{"{"} md: "start"|"end" {"}"}|{"{"} lg:
                "start"|"end" {"}"}|{"{"} xl: "start"|"end"{"}"}|{"{"} xxl: "start"|"end"{"}"}{" "}
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Aligns the dropdown menu.</p>
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
                <p>Disables both Buttons</p>
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
                  An <code>href</code> passed to the Toggle component
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
                  An html id attribute for the Toggle button, necessary for assistive technologies,
                  such as screen readers.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">menuRole </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  An ARIA accessible role applied to the Menu component. When set to 'menu', The
                  dropdown
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">menuVariant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'dark'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Menu color variant.</p>
                <p>Omitting this will use the default light color.</p>
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
                  An <code>onClick</code> handler passed to the Toggle component
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">renderMenuOnMount </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Whether to render the dropdown menu in the DOM before the first time it is shown
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">rootCloseEvent </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Which event when fired outside the component will cause it to be closed.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">size </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Component size variations.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              title <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The content of the non-toggle Button.</p>
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
                <p>Component visual or contextual style variants.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
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

    <h3>SplitButton</h3>
    <code>
      import {"{"} SplitButton {"}"} from 'solid-bootstrap'
    </code>
    <p>
      A convenience component for simple or general use split button dropdowns. Renders a
      ButtonGroup containing a Button and a Button toggle for the Dropdown. All children are passed
      directly to the default Dropdown.Menu. This component accepts all of Dropdown's props.
    </p>

    <p>
      All unknown props are passed through to the Dropdown component. The Button variant, size and
      bsPrefix props are passed to the button and toggle, and menu-related props are passed to the
      Dropdown.Menu
    </p>
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
            <td class="font-monospace">align </td>
            <td class="font-monospace">
              <div>
                "start"|"end"|{"{"} sm: "start"|"end" {"}"}|{"{"} md: "start"|"end" {"}"}|{"{"} lg:
                "start"|"end" {"}"}|{"{"} xl: "start"|"end"{"}"}|{"{"} xxl: "start"|"end"{"}"}{" "}
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Aligns the dropdown menu.</p>
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
                <p>Disables both Buttons</p>
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
                  An <code>href</code> passed to the non-toggle Button
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              id <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  An html id attribute for the Toggle button, necessary for assistive technologies,
                  such as screen readers.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">menuRole </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  An ARIA accessible role applied to the Menu component. When set to 'menu', The
                  dropdown
                </p>
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
                  An <code>onClick</code> handler passed to the non-toggle Button
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">renderMenuOnMount </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Whether to render the dropdown menu in the DOM before the first time it is shown
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">rootCloseEvent </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Which event when fired outside the component will cause it to be closed.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">size </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Component size variations.</p>
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
                  An anchor <code>target</code> passed to the non-toggle Button
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              title <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The content of the non-toggle Button.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">toggleLabel </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'Toggle dropdown'</code>
            </td>
            <td>
              <div>
                <p>
                  Accessible label for the toggle; the value of <code>title</code> if not specified.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">type </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'button'</code>
            </td>
            <td>
              <div>
                <p>
                  A <code>type</code> passed to the non-toggle Button
                </p>
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
                <p>Component visual or contextual style variants.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
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

    <h3>Dropdown</h3>
    <code>
      import {"{"} Dropdown {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">align </td>
            <td class="font-monospace">
              <div>
                "start"|"end"|{"{"} sm: "start"|"end" {"}"}|{"{"} md: "start"|"end" {"}"}|{"{"} lg:
                "start"|"end" {"}"}|{"{"} xl: "start"|"end"{"}"} {"{"} xxl: "start"|"end"{"}"}{" "}
              </div>
            </td>
            <td>
              <code>'start'</code>
            </td>
            <td>
              <div>
                <p>
                  Aligns the dropdown menu to the specified side of the Dropdown toggle. You can
                  also align the menu responsively for breakpoints starting at <code>sm</code> and
                  up. The alignment direction will affect the specified breakpoint or larger.
                </p>
                <p>
                  <em>
                    Note: Using responsive alignment will disable Popper usage for positioning.
                  </em>
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
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">autoClose </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>true</code>
                  <span> | </span>
                  <code>'outside'</code>
                  <span> | </span>
                  <code>'inside'</code>
                  <span> | </span>
                  <code>false</code>
                </span>
              </div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  Controls the auto close behaviour of the dropdown when clicking outside of the
                  button or the list.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">drop </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'up'</code>
                  <span> | </span>
                  <code>'start'</code>
                  <span> | </span>
                  <code>'end'</code>
                  <span> | </span>
                  <code>'down'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Determines the direction and location of the Menu in relation to it's Toggle.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">flip </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Allow Dropdown to flip in case of an overlapping on the reference element. For
                  more information refer to Popper.js's flip{" "}
                  <a href="https://popper.js.org/docs/v2/modifiers/flip/">docs</a>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">focusFirstItemOnShow </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>false</code>
                  <span> | </span>
                  <code>true</code>
                  <span> | </span>
                  <code>'keyboard'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Controls the focus behavior for when the Dropdown is opened. Set to
                  <code>true</code> to always focus the first menu item, <code>keyboard</code> to
                  focus only when navigating via the keyboard, or <code>false</code> to disable
                  completely
                </p>
                <p>
                  The Default behavior is <code>false</code> <strong>unless</strong> the Menu has a{" "}
                  <code>role="menu"</code>
                  where it will default to <code>keyboard</code> to match the recommended{" "}
                  <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton">
                    ARIA Authoring practices
                  </a>
                  .
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">navbar </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onSelect </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>A callback fired when a menu item is selected.</p>
                <div>
                  <pre>
                    <code>(eventKey: any, event: Object) ={">"} any</code>
                  </pre>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onToggle </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controls <code>show</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>
                  A callback fired when the Dropdown wishes to change visibility. Called with the
                  requested
                  <code>show</code> value, the DOM event, and the source that fired it:{" "}
                  <code>'click'</code>,<code>'keydown'</code>,<code>'rootClose'</code>, or{" "}
                  <code>'select'</code>.
                </p>
                <div>
                  <pre>
                    <code>
                      function(isOpen: boolean,event: SyntheticEvent,metadata: {"{"}source: 'select'
                      | 'click' | 'rootClose' | 'keydown'
                      {"}"}): void
                    </code>
                  </pre>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">show </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onToggle</code>, initial prop: <code>defaultShow</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>Whether or not the Dropdown is visible.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'dropdown'</code>
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

    <h3>Dropdown.Toggle</h3>
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
              <code>&lt;Button&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">childBsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>to passthrough to the underlying button or whatever from DropdownButton</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">id </td>
            <td class="font-monospace">
              <div>string|number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  An html id attribute, necessary for assistive technologies, such as screen
                  readers.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">split </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'dropdown-toggle'</code>
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

    <h3>Dropdown.Menu</h3>
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
            <td class="font-monospace">align </td>
            <td class="font-monospace">
              <div>
                "start"|"end"|{"{"} sm: "start"|"end" {"}"}|{"{"} md: "start"|"end" {"}"}|{"{"} lg:
                "start"|"end" {"}"}|{"{"} xl: "start"|"end"{"}"}|{"{"} xxl: "start"|"end"{"}"}{" "}
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Aligns the dropdown menu to the specified side of the container. You can also
                  align the menu responsively for breakpoints starting at <code>sm</code> and up.
                  The alignment direction will affect the specified breakpoint or larger.
                </p>
                <p>
                  <em>
                    Note: Using responsive alignment will disable Popper usage for positioning.
                  </em>
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
                <p>
                  Control the rendering of the DropdownMenu. All non-menu props (listed here) are
                  passed through to the <code>as</code> Component.
                </p>
                <p>
                  If providing a custom, non DOM, component. the <code>show</code>,{" "}
                  <code>close</code> and <code>align</code> props are also injected and should be
                  handled appropriately.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">flip </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  Have the dropdown switch to it's opposite placement when necessary to stay on
                  screen.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onSelect </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">popperConfig </td>
            <td class="font-monospace">
              <div>object</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>A set of popper options and props passed directly to Popper.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">renderOnMount </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Whether to render the dropdown menu in the DOM before the first time it is shown
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">rootCloseEvent </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'click'</code>
                  <span> | </span>
                  <code>'mousedown'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Which event when fired outside the component will cause it to be closed</p>
                <p>
                  <em>
                    Note: For custom dropdown components, you will have to pass the{" "}
                    <code>rootCloseEvent</code> to <code>&lt;RootCloseWrapper&gt;</code> in your
                    custom dropdown menu component ).
                  </em>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">show </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Controls the visibility of the Dropdown menu</p>
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
                <p>Menu color variant.</p>
                <p>Omitting this will use the default light color.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'dropdown-menu'</code>
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

    <h3>Dropdown.Item</h3>
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
            <td></td>
            <td>
              <div>
                <p>Highlight the menu item as active.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;Anchor&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
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
                <p>Disable the menu item, making it unselectable.</p>
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
                  Value passed to the <code>onSelect</code> handler, useful for identifying the
                  selected menu item.
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
              <div>
                <p>
                  HTML <code>href</code> attribute corresponding to <code>a.href</code>.
                </p>
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
                <p>Callback fired when the menu item is clicked.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'dropdown-item'</code>
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

    <h3>Dropdown.Header</h3>
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
              <code>'dropdown-header'</code>
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

    <h3>Dropdown.Divider</h3>
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
              <code>&lt;hr&gt;</code>
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
              <code>'dropdown-divider'</code>
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

export default DropdownApi;
