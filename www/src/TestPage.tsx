import { Component } from "solid-js";
import AlertDocs from "./docs/AlertDocs";
import AccordianDocs from "./docs/AccordianDocs";
import BadgeDocs from "./docs/BadgeDocs";
import BreadcrumbDocs from "./docs/BreadcrumbDocs";
import ButtonDocs from "./docs/ButtonDocs";
import ButtonGroupDocs from "./docs/ButtonGroupDocs";
import CardsDocs from "./docs/CardsDocs";
import CarouselDocs from "./docs/CarouselDocs";
import CloseButtonDocs from "./docs/CloseButtonDocs";
import CoreDropdownDocs from "./docs/CoreDropdownDocs";
import CoreModalDocs from "./docs/CoreModalDocs";
import CoreOverlayDocs from "./docs/CoreOverlayDocs";
import DropdownDocs from "./docs/DropdownDocs";
import FigureDocs from "./docs/FigureDocs";
import FormDocs from "./docs/FormDocs";
import ImageDocs from "./docs/ImageDocs";
import InputGroupDocs from "./docs/InputGroupDocs";
import ListGroupDocs from "./docs/ListGroupDocs";
import ModalDocs from "./docs/ModalDocs";
import NavDocs from "./docs/NavDocs";
import NavbarDocs from "./docs/NavbarDocs";
import PaginationDocs from "./docs/PaginationDocs";
import PlaceholderDocs from "./docs/PlaceholderDocs";
import ProgressBarDocs from "./docs/ProgressBarDocs";
import SpinnerDocs from "./docs/SpinnerDocs";
import TableDocs from "./docs/TableDocs";
import TooltipDocs from "./docs/TooltipDocs";
import ToastDocs from "./docs/ToastDocs";
import LayoutGridDocs from "./docs/LayoutGridDocs";
import LayoutStackDocs from "./docs/LayoutStackDocs";
import TabsDocs from "./docs/TabsDocs";
import OffcanvasDocs from "./docs/OffcanvasDocs";
import PopoverDocs from "./docs/PopoverDocs";

const TestPage: Component = () => (
  <div
    class="container my-5 overflow-hidden"
    style={{ "padding-bottom": "200px" }}
  >
    <div class="row gy-5">
      <h2 class="display-5">Bootstrap Components</h2>
      <LayoutGridDocs />
      <LayoutStackDocs />
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
      <ModalDocs />
      <NavDocs />
      <NavbarDocs />
      <OffcanvasDocs />
      <PaginationDocs />
      <PopoverDocs />
      <PlaceholderDocs />
      <ProgressBarDocs />
      <SpinnerDocs />
      <TableDocs />
      <TabsDocs />
      <TooltipDocs />
      <ToastDocs />
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

export default TestPage;
