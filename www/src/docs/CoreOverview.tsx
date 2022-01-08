import {Component} from "solid-js";

const CoreOverview: Component = () => (
  <div class="container my-4 overflow-hidden" style={{"padding-bottom": "200px"}}>
    <div class="row gy-5">
      <h1 class="display-4">Solid Bootstrap Core</h1>
      <div>
        <p class="lead">
          Solid-Bootstrap/Core is a port of{" "}
          <a href="https://github.com/react-restart/ui">
            <code>@restart/ui</code>
          </a>{" "}
          (formally react-overlays and a core dependancy of{" "}
          <a href="https://react-bootstrap.github.io/">React Bootstrap</a>).
        </p>
        <p>
          These are "headless" (unstyled) components, and utilities and designed to integrate into
          any styling framework or system (not tied to Bootstrap). Components encapsulate the
          complicated logic and and state without being prescriptive about their look and feel.
        </p>
        <p>
          Refer to the original <a href="https://react-restart.github.io/ui/">restart/ui</a>{" "}
          documentation to supplement this page.
        </p>
      </div>
    </div>
  </div>
);

export default CoreOverview;
