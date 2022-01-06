import { Component, lazy } from "solid-js";
import { Route, Routes } from "solid-app-router";
import Layout from "../layout/Layout";

const Layouts: Component = (props) => (
  <Layout>
    <Routes>
      <Route
        path="grid"
        component={lazy(() => import("../docs/LayoutGridDocs.mdx"))}
      />
      <Route
        path="stack"
        component={lazy(() => import("../docs/LayoutStackDocs.mdx"))}
      />
    </Routes>
  </Layout>
);

export default Layouts;
