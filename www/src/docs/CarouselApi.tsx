const CarouselApi = () => (
  <div className="mt-5">
    <h2>API</h2>
    <h3>Carousel</h3>
    <code>import Carousel from 'solid-bootstrap/Carousel'</code>
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
            <td class="font-monospace">activeIndex </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onSelect</code>, initial prop:{" "}
                      <code>defaultActiveindex</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>Controls the current visible slide</p>
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
            <td class="font-monospace">controls </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  Show the Carousel previous and next arrows for changing the
                  current slide
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">fade </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Animates slides with a crossfade animation instead of the
                  default slide animation
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">indicatorLabels </td>
            <td class="font-monospace">
              <div>
                <span>array&lt;&gt;</span>
              </div>
            </td>
            <td>
              <code>[]</code>
            </td>
            <td>
              <div>
                <p>
                  An array of labels for the indicators. Defaults to "Slide #"
                  if not provided.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">indicators </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>Show a set of slide position indicators</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">interval </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td>
              <code>5000</code>
            </td>
            <td>
              <div>
                <p>
                  The amount of time to delay between automatically cycling an
                  item. If <code>null</code>, carousel will not automatically
                  cycle.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">keyboard </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>Whether the carousel should react to keyboard events.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">nextIcon </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td>
              <code>
                &lt;span aria-hidden="true"
                className="carousel-control-next-icon" /&gt;
              </code>
            </td>
            <td>
              <div>
                <p>Override the default button icon for the "next" control</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">nextLabel </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'Next'</code>
            </td>
            <td>
              <div>
                <p>
                  Label shown to screen readers only, can be used to show the
                  next element in the carousel. Set to null to deactivate.
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
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controls <code>activeIndex</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>Callback fired when the active item changes.</p>
                <div>
                  <pre>
                    <code>{`(eventKey: number, event: Object | null) => void`}</code>
                  </pre>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onSlid </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Callback fired when a slide transition ends.</p>
                <div>
                  <pre>
                    <code>
                      {`(eventKey: number, direction: 'left' | 'right') => void`}
                    </code>
                  </pre>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onSlide </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Callback fired when a slide transition starts.</p>
                <div>
                  <pre>
                    <code>
                      {`(eventKey: number, direction: 'left' | 'right') => void`}
                    </code>
                  </pre>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">pause </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'hover'</code>
                  <span> | </span>
                  <code>false</code>
                </span>
              </div>
            </td>
            <td>
              <code>'hover'</code>
            </td>
            <td>
              <div>
                <p>
                  If set to <code>"hover"</code>, pauses the cycling of the
                  carousel on <code>mouseenter</code> and resumes the cycling of
                  the carousel on <code>mouseleave</code>. If set to{" "}
                  <code>false</code>, hovering over the carousel won't pause it.
                </p>
                <p>
                  On touch-enabled devices, when set to <code>"hover"</code>,
                  cycling will pause on <code>touchend</code> (once the user
                  finished interacting with the carousel) for two intervals,
                  before automatically resuming. Note that this is in addition
                  to the above mouse behavior.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">prevIcon </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td>
              <code>
                &lt;span aria-hidden="true"
                className="carousel-control-prev-icon" /&gt;
              </code>
            </td>
            <td>
              <div>
                <p>
                  Override the default button icon for the "previous" control
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">prevLabel </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'Previous'</code>
            </td>
            <td>
              <div>
                <p>
                  Label shown to screen readers only, can be used to show the
                  previous element in the carousel. Set to null to deactivate.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">slide </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  Enables animation on the Carousel as it transitions between
                  slides.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">touch </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  Whether the carousel should support left/right swipe
                  interactions on touchscreen devices.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">variant </td>
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
                <p>
                  Color variant that controls the colors of the controls,
                  indicators and captions.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">wrap </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  Whether the carousel should cycle continuously or have hard
                  stops.
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
              <code>'carousel'</code>
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
    <h3>Carousel.Item</h3>
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
            <td class="font-monospace">interval </td>
            <td class="font-monospace">
              <div>number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The amount of time to delay between automatically cycling this
                  specific item. Will default to the Carousel's{" "}
                  <code>interval</code> prop value if none is specified.
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
              <code>'carousel-item'</code>
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

    <h3>Carousel.Caption</h3>
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
              <code>'carousel-caption'</code>
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

export default CarouselApi;
