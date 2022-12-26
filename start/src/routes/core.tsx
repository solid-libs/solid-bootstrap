import {Outlet} from "solid-start";
import Layout from "../layout/Layout";

export default function CoreLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
