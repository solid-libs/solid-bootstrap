import { hashIntegration, Route, Router, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import TopNavbar from "./layout/TopNavbar";
import Home from "./pages/Home";
import "./App.css";

const App: Component = () => (
  <Router source={hashIntegration()}>
    <TopNavbar />
    <Routes>
      <Route
        path="/components/*"
        component={lazy(() => import("./pages/Components"))}
      />
      <Route
        path="/layout/*"
        component={lazy(() => import("./pages/Layouts"))}
      />
      <Route path="/core/*" component={lazy(() => import("./pages/Core"))} />
      <Route
        path="/getting-started"
        component={lazy(() => import("./pages/GettingStarted"))}
      />
      <Route path="/*all" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
