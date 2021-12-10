const TableApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Table</h3>
    <code>
      import {"{"} Table {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">bordered </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Adds borders on all sides of the table and cells.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">borderless </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Removes all borders on the table and cells, including table
                  header.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">hover </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Enable a hover state on table rows within a{" "}
                  <code>&lt;tbody&gt;</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">responsive </td>
            <td class="font-monospace">
              <div>boolean | string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Responsive tables allow tables to be scrolled horizontally
                  with ease. Across every breakpoint, use{" "}
                  <code>responsive</code> for horizontally scrolling tables.
                  Responsive tables are wrapped automatically in a{" "}
                  <code>div</code>. Use <code>responsive="sm"</code>,{" "}
                  <code>responsive="md"</code>, <code>responsive="lg"</code>, or
                  <code>responsive="xl"</code> as needed to create responsive
                  tables up to a particular breakpoint. From that breakpoint and
                  up, the table will behave normally and not scroll
                  horizontally.
                </p>
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
                <p>
                  Make tables more compact by cutting cell padding in half by
                  setting size as <code>sm</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">striped </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Adds zebra-striping to any table row within the{" "}
                  <code>&lt;tbody&gt;</code>.
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
                <p>
                  Invert the colors of the table — with light text on dark
                  backgrounds by setting variant as <code>dark</code>.
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
              <code>'table'</code>
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

export default TableApi;
