import { Component } from "solid-js";
import { AlertDocs } from "./docs/AlertDocs";
import { AccordianDocs } from "./docs/AccordianDocs";
import { BadgeDocs } from "./docs/BadgeDocs";
import { BreadcrumbDocs } from "./docs/BreadcrumbDocs";
import { ButtonDocs } from "./docs/ButtonDocs";
import { ButtonGroupDocs } from "./docs/ButtonGroupDocs";
import { CardsDocs } from "./docs/CardsDocs";
import { CarouselDocs } from "./docs/CarouselDocs";
import { CloseButtonDocs } from "./docs/CloseButtonDocs";
import { CoreDropdownDocs } from "./docs/CoreDropdownDocs";
import { CoreModalDocs } from "./docs/CoreModalDocs";
import { CoreOverlayDocs } from "./docs/CoreOverlayDocs";
import { DropdownDocs } from "./docs/DropdownDocs";
import { FigureDocs } from "./docs/FigureDocs";
import { FormDocs } from "./docs/FormDocs";
import { ImageDocs } from "./docs/ImageDocs";
import { InputGroupDocs } from "./docs/InputGroupDocs";
import { ListGroupDocs } from "./docs/ListGroupDocs";

const App: Component = () => (
  <div class="container mb-5" style={{ "padding-bottom": "200px" }}>
    <div class="row gy-5">
      <h1 class="display-4">Solid Bootstrap</h1>
      <div>
        <h3>Overview</h3>
        <p class="lead">
          Solid-Bootstrap is a port of{" "}
          <a href="https://react-bootstrap.github.io/">React-Bootstrap</a> for{" "}
          <a href="https://www.solidjs.com/">SolidJS</a>.
        </p>
        <p>
          It is a set of full featured, extensible, and accessible UI
          components, designed to integrate into any styling framework or
          system. These components, are "headless", meaning they don't provide
          any styles. Components encapsulate the complicated logic and and state
          without being prescriptive about their look and feel.
        </p>
        <p>
          Refer to the original{" "}
          <a href="https://react-bootstrap.github.io/components/alerts">
            React Boostrap
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
            <a href="https://github.com/react-bootstrap/react-bootstrap">
              <code>React-Bootstrap</code>
            </a>
            ,{" "}
            <a href="https://github.com/react-restart/ui">
              <code>@restart/ui</code>
            </a>{" "}
            (core) and related projects.
          </li>
          <li>Keep the source file structure the same.</li>
          <li>
            Keep the source code as similar as possible to enable future commits
            to the original projects to also be pulled into this project.
          </li>
          <li>
            Enable validation of the porting approach using a side-by-side
            comparison between the ported SolidJS code and the original
            implementation.
          </li>
        </ul>
      </div>
      <div>
        <h3>Known Issues</h3>
        <ul>
          <li>Accordion - Transitions</li>
          <li>Dropdown - autoClose not working</li>
          <li>Tabs - getDefaultActiveKey (was reading from child props)</li>
          <li>TabPane - Transitions</li>
        </ul>
      </div>
      <h2 class="display-5">Bootstrap Components</h2>
      <AlertDocs />
      <AccordianDocs />
      <BadgeDocs />
      <BreadcrumbDocs />
      <ButtonDocs />
      <ButtonGroupDocs />
      <CardsDocs />
      <CarouselDocs />
      <CloseButtonDocs />
      <DropdownDocs />
      <FigureDocs />
      <FormDocs />
      <ImageDocs />
      <InputGroupDocs />
      <ListGroupDocs />
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
          These are "headless" (unstyled) components, and utilities and designed
          to integrate into any styling framework or system (not tied to
          Bootstrap). Components encapsulate the complicated logic and and state
          without being prescriptive about their look and feel.
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
        <CoreOverlayDocs />
        <CoreModalDocs />
        <CoreDropdownDocs />
      </div>
    </div>
  </div>
);

export default App;
