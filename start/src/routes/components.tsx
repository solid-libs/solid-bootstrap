import {Outlet} from "solid-start";
import Layout from "../layout/Layout";

export default function ComponentsLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
