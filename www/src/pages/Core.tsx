import {Component, lazy} from "solid-js";
import {Route, Routes} from "solid-app-router";
import Layout from "../layout/Layout";

const Core: Component = (props) => (
  <Layout>
    <Routes>
      <Route path="Overview" component={lazy(() => import("../docs/core/CoreOverview.mdx"))} />
      <Route path="button" component={lazy(() => import("../docs/core/CoreButtonDocs.mdx"))} />
      <Route path="dropdown" component={lazy(() => import("../docs/core/CoreDropdownDocs.mdx"))} />
      <Route path="modal" component={lazy(() => import("../docs/core/CoreModalDocs.mdx"))} />
      <Route path="navsandtabs" component={lazy(() => import("../docs/core/CoreNavDocs.mdx"))} />
      <Route path="overlays" component={lazy(() => import("../docs/core/CoreOverlayDocs"))} />
    </Routes>
  </Layout>
);

export default Core;
