import {Component, lazy} from "solid-js";
import {Route, Routes} from "solid-app-router";
import Layout from "../layout/Layout";

const Core: Component = (props) => (
  <Layout>
    <Routes>
      <Route path="Overview" component={lazy(() => import("../docs/CoreOverview"))} />
      <Route path="dropdowns" component={lazy(() => import("../docs/CoreDropdownDocs"))} />
      <Route path="modal" component={lazy(() => import("../docs/CoreModalDocs"))} />
      <Route path="overlays" component={lazy(() => import("../docs/CoreOverlayDocs"))} />
    </Routes>
  </Layout>
);

export default Core;
