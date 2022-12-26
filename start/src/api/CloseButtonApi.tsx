const CloseButtonApi = () => (
  <div class="mt-5">
    <h2>API</h2>
    <h3>CloseButton</h3>
    <code>
      import {"{"} CloseButton {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">aria-label </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'Close'</code>
            </td>
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
                  <code>'white'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Render different color variant for the button.</p>
                <p>Omitting this will render the default dark color.</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CloseButtonApi;
