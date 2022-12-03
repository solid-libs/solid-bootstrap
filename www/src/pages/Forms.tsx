import {Component, lazy} from "solid-js";
import {Route, Routes} from "@solidjs/router";
import Layout from "../layout/Layout";

const Forms: Component = (props) => (
  <Layout>
    <Routes>
      <Route path="overview" component={lazy(() => import("../docs/FormOverviewDocs.mdx"))} />
      <Route path="form-controls" component={lazy(() => import("../docs/FormControlDocs.mdx"))} />
      <Route path="form-text" component={lazy(() => import("../docs/FormTextDocs.mdx"))} />
      <Route path="select" component={lazy(() => import("../docs/FormSelectDocs.mdx"))} />
      <Route path="checks-radios" component={lazy(() => import("../docs/FormChecksDocs.mdx"))} />
      <Route path="range" component={lazy(() => import("../docs/FormRangeDocs.mdx"))} />
      <Route path="input-group" component={lazy(() => import("../docs/FormInputGroupDocs.mdx"))} />
      <Route
        path="floating-labels"
        component={lazy(() => import("../docs/FormFloatingLabelDocs.mdx"))}
      />
      <Route path="layout" component={lazy(() => import("../docs/FormLayoutDocs.mdx"))} />
      <Route path="validation" component={lazy(() => import("../docs/FormValidationDocs.mdx"))} />
    </Routes>
  </Layout>
);

export default Forms;
