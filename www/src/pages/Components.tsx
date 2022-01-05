import { Component, lazy } from "solid-js";
import { Route, Routes } from "solid-app-router";
import Layout from "../layout/Layout";

const Components: Component = (props) => (
  <Layout>
    <Routes>
      <Route
        path="alerts"
        component={lazy(() => import("../docs/AlertDocs"))}
      />
      <Route
        path="accordion"
        component={lazy(() => import("../docs/AccordionDocs.mdx"))}
      />
      <Route path="badge" component={lazy(() => import("../docs/BadgeDocs"))} />
      <Route
        path="breadcrumb"
        component={lazy(() => import("../docs/BreadcrumbDocs"))}
      />
      <Route
        path="buttons"
        component={lazy(() => import("../docs/ButtonDocs"))}
      />
      <Route
        path="button-group"
        component={lazy(() => import("../docs/ButtonGroupDocs"))}
      />
      <Route path="cards" component={lazy(() => import("../docs/CardsDocs"))} />
      <Route
        path="carousel"
        component={lazy(() => import("../docs/CarouselDocs"))}
      />
      <Route
        path="close-button"
        component={lazy(() => import("../docs/CloseButtonDocs"))}
      />
      <Route
        path="dropdowns"
        component={lazy(() => import("../docs/DropdownDocs"))}
      />
      <Route
        path="figures"
        component={lazy(() => import("../docs/FigureDocs"))}
      />
      <Route path="forms" component={lazy(() => import("../docs/FormDocs"))} />
      <Route
        path="images"
        component={lazy(() => import("../docs/ImageDocs"))}
      />
      <Route
        path="input-group"
        component={lazy(() => import("../docs/InputGroupDocs"))}
      />
      <Route
        path="list-group"
        component={lazy(() => import("../docs/ListGroupDocs"))}
      />
      <Route path="modal" component={lazy(() => import("../docs/ModalDocs"))} />
      <Route path="navs" component={lazy(() => import("../docs/NavDocs"))} />
      <Route
        path="navbar"
        component={lazy(() => import("../docs/NavbarDocs"))}
      />
      <Route
        path="offcanvas"
        component={lazy(() => import("../docs/OffcanvasDocs"))}
      />
      <Route
        path="popovers"
        component={lazy(() => import("../docs/PopoverDocs"))}
      />
      <Route
        path="pagination"
        component={lazy(() => import("../docs/PaginationDocs"))}
      />
      <Route
        path="placeholder"
        component={lazy(() => import("../docs/PlaceholderDocs"))}
      />
      <Route
        path="progress"
        component={lazy(() => import("../docs/ProgressBarDocs"))}
      />
      <Route
        path="spinners"
        component={lazy(() => import("../docs/SpinnerDocs"))}
      />
      <Route path="table" component={lazy(() => import("../docs/TableDocs"))} />
      <Route
        path="tooltips"
        component={lazy(() => import("../docs/TooltipDocs"))}
      />
      <Route
        path="toasts"
        component={lazy(() => import("../docs/ToastDocs"))}
      />
      <Route path="tabs" component={lazy(() => import("../docs/TabsDocs"))} />

      <Route
        path="coreDropdown"
        component={lazy(() => import("../docs/CoreDropdownDocs"))}
      />
      <Route
        path="coreModal"
        component={lazy(() => import("../docs/CoreModalDocs"))}
      />
      <Route
        path="coreOverlay"
        component={lazy(() => import("../docs/CoreOverlayDocs"))}
      />
    </Routes>
  </Layout>
);

export default Components;
