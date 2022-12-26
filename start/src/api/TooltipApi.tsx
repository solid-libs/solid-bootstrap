const TooltipApi = () => (
  <div class="mt-5">
    <h2>API</h2>
    <h3>Tooltip</h3>
    <code>
      import {"{"} Tooltip {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">arrowProps </td>
            <td class="font-monospace">
              <div>{`{ ref: Ref, style: Object }`}</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>An Overlay injected set of props for positioning the tooltip arrow.</p>
                <blockquote>
                  <p>
                    This is generally provided by the <code>Overlay</code> component positioning the
                    tooltip
                  </p>
                </blockquote>
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
                <p>An html id attribute, necessary for accessibility</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">placement </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'auto-start'</code>
                  <span> | </span>
                  <code>'auto'</code>
                  <span> | </span>
                  <code>'auto-end'</code>
                  <span> | </span>
                  <code>'top-start'</code>
                  <span> | </span>
                  <code>'top'</code>
                  <span> | </span>
                  <code>'top-end'</code>
                  <span> | </span>
                  <code>'right-start'</code>
                  <span> | </span>
                  <code>'right'</code>
                  <span> | </span>
                  <code>'right-end'</code>
                  <span> | </span>
                  <code>'bottom-end'</code>
                  <span> | </span>
                  <code>'bottom'</code>
                  <span> | </span>
                  <code>'bottom-start'</code>
                  <span> | </span>
                  <code>'left-end'</code>
                  <span> | </span>
                  <code>'left'</code>
                  <span> | </span>
                  <code>'left-start'</code>
                </span>
              </div>
            </td>
            <td>
              <code>'right'</code>
            </td>
            <td>
              <div>
                <p>Sets the direction the Tooltip is positioned towards.</p>
                <blockquote>
                  <p>
                    This is generally provided by the <code>Overlay</code> component positioning the
                    tooltip
                  </p>
                </blockquote>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">popper </td>
            <td class="font-monospace">
              <div>object</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">show </td>
            <td class="font-monospace">
              <div>any</div>
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
              <code>'tooltip'</code>
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
    <h3>Overlay</h3>
    <code>
      import {"{"} Overlay {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">container </td>
            <td class="font-monospace">
              <div>componentOrElement</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A component instance, DOM node. The <code>container</code> element will have the
                  Overlay appended to it via a Solid portal.
                </p>
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
                <p>Callback fired before the Overlay transitions in</p>
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
                <p>Callback fired after the Overlay finishes transitioning in</p>
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
                <p>Callback fired as the Overlay begins to transition in</p>
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
                <p>Callback fired right before the Overlay transitions out</p>
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
                <p>Callback fired after the Overlay finishes transitioning out</p>
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
                <p>Callback fired as the Overlay begins to transition out</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onHide </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A callback invoked by the overlay when it wishes to be hidden. Required if
                  <code>rootClose</code> is specified.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">placement </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'auto-start'</code>
                  <span> | </span>
                  <code>'auto'</code>
                  <span> | </span>
                  <code>'auto-end'</code>
                  <span> | </span>
                  <code>'top-start'</code>
                  <span> | </span>
                  <code>'top'</code>
                  <span> | </span>
                  <code>'top-end'</code>
                  <span> | </span>
                  <code>'right-start'</code>
                  <span> | </span>
                  <code>'right'</code>
                  <span> | </span>
                  <code>'right-end'</code>
                  <span> | </span>
                  <code>'bottom-end'</code>
                  <span> | </span>
                  <code>'bottom'</code>
                  <span> | </span>
                  <code>'bottom-start'</code>
                  <span> | </span>
                  <code>'left-end'</code>
                  <span> | </span>
                  <code>'left'</code>
                  <span> | </span>
                  <code>'left-start'</code>
                </span>
              </div>
            </td>
            <td>
              <code>'top'</code>
            </td>
            <td>
              <div>
                <p>
                  The placement of the Overlay in relation to it's <code>target</code>.
                </p>
              </div>
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
            <td class="font-monospace">rootClose </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Specify whether the overlay should trigger onHide when the user clicks outside the
                  overlay
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
                <p>Specify event for triggering a "root close" toggle.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">show </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Set the visibility of the Overlay</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">target </td>
            <td class="font-monospace">
              <div>componentOrElement</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A component instance, DOM node. The overlay will be positioned in relation to the{" "}
                  <code>target</code>
                </p>
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
                  Animate the entering and exiting of the Overlay. <code>true</code> will use the{" "}
                  <code>&lt;Fade&gt;</code> transition, or a custom solid-react-transition{" "}
                  <code>&lt;Transition&gt;</code> component can be provided.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>OverlayTrigger</h3>
    <code>
      import {"{"} OverlayTrigger {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">
              children <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>element</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">defaultShow </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>The initial visibility state of the Overlay.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">delay </td>
            <td class="font-monospace">
              <div>number | shape</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>A millisecond delay amount to show and hide the Overlay once triggered</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">flip </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>{`placement && placement.indexOf('auto') !== -1`}</code>
            </td>
            <td>
              <div>
                <p>The initial flip state of the Overlay.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onHide </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>null</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div></div>
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
                      controls <code>'show'</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>A callback that fires when the user triggers a change in tooltip visibility.</p>
                <p>
                  <code>onToggle</code> is called with the desired next <code>show</code>, and
                  generally should be passed back to the <code>show</code> prop.{" "}
                  <code>onToggle</code> fires <em>after</em> the configured <code>delay</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              overlay <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>element</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>An element or text to overlay next to the target.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">placement </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'auto-start'</code>
                  <span> | </span>
                  <code>'auto'</code>
                  <span> | </span>
                  <code>'auto-end'</code>
                  <span> | </span>
                  <code>'top-start'</code>
                  <span> | </span>
                  <code>'top'</code>
                  <span> | </span>
                  <code>'top-end'</code>
                  <span> | </span>
                  <code>'right-start'</code>
                  <span> | </span>
                  <code>'right'</code>
                  <span> | </span>
                  <code>'right-end'</code>
                  <span> | </span>
                  <code>'bottom-end'</code>
                  <span> | </span>
                  <code>'bottom'</code>
                  <span> | </span>
                  <code>'bottom-start'</code>
                  <span> | </span>
                  <code>'left-end'</code>
                  <span> | </span>
                  <code>'left'</code>
                  <span> | </span>
                  <code>'left-start'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The placement of the Overlay in relation to it's <code>target</code>.
                </p>
              </div>
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
                <p>A Popper.js config object passed to the the underlying popper instance.</p>
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
                <p>
                  The visibility of the Overlay. <code>show</code> is a <em>controlled</em> prop so
                  should be paired with <code>onToggle</code> to avoid breaking user interactions.
                </p>
                <p>
                  Manually toggling <code>show</code> does <strong>not</strong> wait for{" "}
                  <code>delay</code> to change the visibility.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">target </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>null</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">trigger </td>
            <td class="font-monospace">
              <div>'hover' | 'click' |'focus' | Array&lt;'hover' | 'click' |'focus'&gt;</div>
            </td>
            <td>
              <code>{`['hover', 'focus']`}</code>
            </td>
            <td>
              <div>
                <p>Specify which action or actions trigger Overlay visibility</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TooltipApi;
