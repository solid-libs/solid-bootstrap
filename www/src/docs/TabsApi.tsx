const TabsApi = () => (
  <div class="mt-5">
    <h2>API</h2>
    <h3>Tabs</h3>
    <code>
      import {"{"} Tabs {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">activeKey </td>
            <td class="font-monospace">
              <div>string | number</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onSelect</code>, initial prop:{" "}
                      <code>defaultActivekey</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>
                  Mark the Tab with a matching <code>eventKey</code> as active.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">defaultActiveKey </td>
            <td class="font-monospace">
              <div>string | number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The default active key that is selected on start</p>
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
                  HTML id attribute, required if no <code>generateChildId</code> prop is specified.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">mountOnEnter </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Wait until the first "enter" transition to mount tabs (add them to the DOM)</p>
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
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controls <code>activeKey</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>Callback fired when a Tab is selected.</p>
                <div class="gatsby-highlight" data-language="js">
                  <pre class="language-js">
                    <code class="language-js">
                      <span class="token keyword">function</span>{" "}
                      <span class="token punctuation">(</span>
                      <span class="token parameter">
                        Any eventKey<span class="token punctuation">,</span>
                        SyntheticEvent event
                        <span class="token operator">?</span>
                      </span>
                      <span class="token punctuation">)</span>
                    </code>
                  </pre>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">transition </td>
            <td class="font-monospace">
              <div>Transition | false</div>
            </td>
            <td>
              <code>{"{Fade}"}</code>
            </td>
            <td>
              <div>
                <p>
                  Sets a default animation strategy for all children <code>&lt;TabPane&gt;</code>
                  s.&lt;tbcont
                </p>
                <p>
                  Defaults to <code>&lt;Fade&gt;</code> animation, else use <code>false</code> to
                  disable or a solid-react-transition <code>&lt;Transition/&gt;</code> component.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">unmountOnExit </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Unmount tabs (remove it from the DOM) when it is no longer visible</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">variant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'tabs'</code>
                  <span> | </span>
                  <code>'pills'</code>
                </span>
              </div>
            </td>
            <td>
              <code>'tabs'</code>
            </td>
            <td>
              <div>
                <p>Navigation style</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Tab</h3>
    <code>
      import {"{"} Tab {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">disabled </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The disabled state of the tab.</p>
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
                  A unique identifier for the Component, the <code>eventKey</code> makes it
                  distinguishable from others in a set. It only needs to be unique amongst the
                  Components siblings, not globally.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">tabClass </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Class to pass to the underlying nav link.</p>
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
                <p>Content for the tab title.</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>TabContainer</h3>
    <code>
      import {"{"} TabContainer {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">activeKey </td>
            <td class="font-monospace">
              <div>string | number</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onSelect</code>, initial prop:{" "}
                      <code>defaultActivekey</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>
                  The <code>eventKey</code> of the currently active tab.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">generateChildId </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A function that takes an <code>eventKey</code> and <code>type</code> and returns a
                  unique id for child tab <code>&lt;NavItem&gt;</code>s and{" "}
                  <code>&lt;TabPane&gt;</code>
                  s. The function <em>must</em> be a pure function, meaning it should always return
                  the <em>same</em> id for the same set of inputs. The default value requires that
                  an <code>id</code> to be set for the
                  <code>&lt;TabContainer&gt;</code>.
                </p>
                <p>
                  The <code>type</code> argument will either be <code>"tab"</code> or{" "}
                  <code>"pane"</code>.
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
                  HTML id attribute, required if no <code>generateChildId</code> prop is specified.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">mountOnEnter </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Wait until the first "enter" transition to mount tabs (add them to the DOM)</p>
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
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controls <code>activeKey</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>A callback fired when a tab is selected.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">transition </td>
            <td class="font-monospace">
              <div>{"{Transition | false}"}</div>
            </td>
            <td>
              <code>{"{Fade}"}</code>
            </td>
            <td>
              <div>
                <p>
                  Sets a default animation strategy for all children <code>&lt;TabPane&gt;</code>s.
                  Defaults to <code>&lt;Fade&gt;</code> animation; else, use <code>false</code> to
                  disable, or a custom solid-react-transition <code>&lt;Transition/&gt;</code>{" "}
                  component.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">unmountOnExit </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Unmount tabs (remove it from the DOM) when they are no longer visible</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>TabContent</h3>
    <code>
      import {"{"} TabContent {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">
              bsPrefix <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'tab-content'</code>
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

    <h3>TabPane</h3>
    <code>
      import {"{"} TabPane {"}"} from 'solid-bootstrap'
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
            <td></td>
            <td>
              <div>
                <p>
                  Toggles the active state of the TabPane, this is generally controlled by a
                  TabContainer.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">aria-labelledby </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div></div>
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
            <td class="font-monospace">eventKey </td>
            <td class="font-monospace">
              <div>string | number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A key that associates the <code>TabPane</code> with it's controlling{" "}
                  <code>NavLink</code>.
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
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">mountOnEnter </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Wait until the first "enter" transition to mount the tab (add it to the DOM)</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onEnter </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Transition onEnter callback when animation is not <code>false</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onEntered </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Transition onEntered callback when animation is not <code>false</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onEntering </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Transition onEntering callback when animation is not <code>false</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onExit </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Transition onExit callback when animation is not <code>false</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onExited </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Transition onExited callback when animation is not <code>false</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onExiting </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Transition onExiting callback when animation is not <code>false</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">transition </td>
            <td class="font-monospace">
              <div>boolean | elementType</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Use animation when showing or hiding <code>&lt;TabPane&gt;</code>s. Defaults to{" "}
                  <code>&lt;Fade&gt;</code>
                  animation, else use <code>false</code> to disable or a solid-react-transition
                  <code>&lt;Transition/&gt;</code> component.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">unmountOnExit </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Unmount the tab (remove it from the DOM) when it is no longer visible</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'tab-pane'</code>
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

export default TabsApi;
