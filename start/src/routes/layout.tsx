import {Outlet} from "solid-start";
import Layout from "../layout/Layout";

export default function LayoutLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
