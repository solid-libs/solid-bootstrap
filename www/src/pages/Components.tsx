import {Component, lazy} from "solid-js";
import {Route, Routes} from "solid-app-router";
import Layout from "../layout/Layout";

const Components: Component = (props) => (
  <Layout>
    <Routes>
      <Route path="accordion" component={lazy(() => import("../docs/AccordionDocs.mdx"))} />
      <Route path="alerts" component={lazy(() => import("../docs/AlertDocs.mdx"))} />
      <Route path="badge" component={lazy(() => import("../docs/BadgeDocs.mdx"))} />
      <Route path="breadcrumb" component={lazy(() => import("../docs/BreadcrumbDocs.mdx"))} />
      <Route path="buttons" component={lazy(() => import("../docs/ButtonDocs.mdx"))} />
      <Route path="button-group" component={lazy(() => import("../docs/ButtonGroupDocs.mdx"))} />
      <Route path="cards" component={lazy(() => import("../docs/CardsDocs.mdx"))} />
      <Route path="carousel" component={lazy(() => import("../docs/CarouselDocs.mdx"))} />
      <Route path="close-button" component={lazy(() => import("../docs/CloseButtonDocs.mdx"))} />
      <Route path="dropdowns" component={lazy(() => import("../docs/DropdownDocs.mdx"))} />
      <Route path="figures" component={lazy(() => import("../docs/FigureDocs.mdx"))} />
      <Route path="images" component={lazy(() => import("../docs/ImageDocs.mdx"))} />
      <Route path="list-group" component={lazy(() => import("../docs/ListGroupDocs.mdx"))} />
      <Route path="modal" component={lazy(() => import("../docs/ModalDocs.mdx"))} />
      <Route path="navs" component={lazy(() => import("../docs/NavDocs.mdx"))} />
      <Route path="navbar" component={lazy(() => import("../docs/NavbarDocs.mdx"))} />
      <Route path="offcanvas" component={lazy(() => import("../docs/OffcanvasDocs.mdx"))} />
      <Route path="pagination" component={lazy(() => import("../docs/PaginationDocs.mdx"))} />
      <Route path="placeholder" component={lazy(() => import("../docs/PlaceholderDocs.mdx"))} />
      <Route path="popovers" component={lazy(() => import("../docs/PopoverDocs.mdx"))} />
      <Route path="progress" component={lazy(() => import("../docs/ProgressBarDocs.mdx"))} />
      <Route path="spinners" component={lazy(() => import("../docs/SpinnerDocs.mdx"))} />
      <Route path="table" component={lazy(() => import("../docs/TableDocs.mdx"))} />
      <Route path="tabs" component={lazy(() => import("../docs/TabsDocs.mdx"))} />
      <Route path="tooltips" component={lazy(() => import("../docs/TooltipDocs.mdx"))} />
      <Route path="toasts" component={lazy(() => import("../docs/ToastDocs.mdx"))} />
    </Routes>
  </Layout>
);

export default Components;
