const ProgressBarApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>ProgressBar</h3>
    <code>import ProgressBar from 'solid-bootstrap/ProgressBar'</code>
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
            <td class="font-monospace">animated </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Animate's the stripes from right to left</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">children </td>
            <td class="font-monospace">
              <div>onlyProgressBar</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  {`Child elements (only allows elements of type <progressbar>)`}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">isChild </td>
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
            <td class="font-monospace">label </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Show label that represents visual percentage. EG. 60%</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">max </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td>
              <code>100</code>
            </td>
            <td>
              <div>
                <p>Maximum value progress can reach</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">min </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td>
              <code>0</code>
            </td>
            <td>
              <div>
                <p>Minimum value progress can begin from</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">now </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Current value of progress</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">striped </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Uses a gradient to create a striped effect.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">variant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'success'</code>
                  <span> | </span>
                  <code>'danger'</code>
                  <span> | </span>
                  <code>'warning'</code>
                  <span> | </span>
                  <code>'info'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Sets the background class of the progress bar.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">visuallyHidden </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>Hide's the label visually.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'progress-bar'</code>
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

export default ProgressBarApi;
