import { Component } from "solid-js";
import { ModalDocs } from "./docs/ModalDocs";
import { OverlayDocs } from "./docs/OverlayDocs";

const App: Component = () => {
  function showModalClick() {}

  return (
    <div class="container">
      <div class="row gy-5">
        <h1 class="display-4">Solid Overlays</h1>
        <div>
          <h3>Overview</h3>
          <p class="lead">
            Solid-Overlays is a <a href="https://www.solidjs.com/">SolidJS</a>{" "}
            port of{" "}
            <a href="https://github.com/react-restart/ui">
              <code>@restart/ui</code>
            </a>{" "}
            (formally react-overlays and a core dependancy of{" "}
            <a href="https://react-bootstrap.github.io/">React Bootstrap</a>).
          </p>
          <p>
            It is a set of full featured, extensible, and accessible UI
            components, designed to integrate into any styling framework or
            system. These components, are "headless", meaning they don't provide
            any styles. Components encapsulate the complicated logic and and
            state without being prescriptive about their look and feel.
          </p>
          <p>
            Refer to the original{" "}
            <a href="https://react-bootstrap.github.io/react-overlays/">
              React Overlays
            </a>{" "}
            documentation to supplement this page.
          </p>
        </div>
        <div>
          <h3>Porting approach</h3>
          <p class="lead">
            We have changed as little as possible while porting this code.
          </p>
          Principles:
          <ul>
            <li>
              The goal is to capture all of the proven behaviour of{" "}
              <a href="https://github.com/react-restart/ui">
                <code>@restart/ui</code>
              </a>
              .
            </li>
            <li>Keep the source file structure the same.</li>
            <li>
              Keep the source code as similar as possible to enable future
              commits to @restart/ui to also be pulled into this project.
            </li>
            <li>
              Enable validaiton of the porting approach using a side-by-side
              comparison between the ported SolidJS code and the original
              implementation.
            </li>
          </ul>
        </div>
        <div>
          <h3>Future goals</h3>
          <p class="lead">
            Use this library to support a SolidJS port of{" "}
            <a href="https://react-bootstrap.github.io/">React Bootstrap</a>.
          </p>
        </div>
        <h2 class="display-5">Components</h2>
        <OverlayDocs />
        <ModalDocs />
      </div>
    </div>
  );
};

export default App;
