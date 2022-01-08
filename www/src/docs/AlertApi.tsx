const AlertApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Alert</h3>
    <code>
      import {"{"} Alert {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">closeLabel </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'Close alert'</code>
            </td>
            <td>
              <div>
                <p>Sets the text for alert close button.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">closeVariant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'white'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Sets the variant for close button.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">dismissible </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Renders a properly aligned dismiss button, as well as adding extra horizontal
                  padding to the Alert.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onClose </td>
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
                <p>Callback fired when alert is closed.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">show</td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onClose</code>, initial prop: <code>defaultShow</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>Controls the visual state of the Alert.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">transition </td>
            <td class="font-monospace">
              <div>boolean | elementType</div>
            </td>
            <td>
              <code>Fade</code>
            </td>
            <td>
              <div>
                <p>
                  Animate the alert dismissal. Defaults to using{" "}
                  <code class=" language-text">&lt;Fade&gt;</code> animation or use{" "}
                  <code class=" language-text">false</code> to disable. A custom{" "}
                  <code class=" language-text">solid-react-transition</code> Transition can also be
                  provided.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">variant </td>
            <td class="font-monospace">
              <div>
                'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' |
                'light'
              </div>
            </td>
            <td>
              <code>'primary'</code>
            </td>
            <td>
              <div>
                <p>The Alert visual variant</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'alert'</code>
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

    <h3>Alert.Heading</h3>
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
              <code>&lt;DivStyledAsH4&gt;</code>
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
              <code>'alert-heading'</code>
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

    <h3>Alert.Link</h3>
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
              <code>&lt;Anchor&gt;</code>
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
              <code>'alert-link'</code>
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

export default AlertApi;
