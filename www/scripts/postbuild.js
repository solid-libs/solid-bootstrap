// Copies index.html for each route endpoint to workaround limitations
// of static server like Github pages not supporting SPA routing

import path from "path"
import fs from "fs-extra"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsPath = path.resolve(__dirname, "../../docs/");
const formsPath = path.join(docsPath, "forms");
const layoutPath = path.join(docsPath, "layout");
const componentsPath = path.join(docsPath, "components");
const corePath = path.join(docsPath, "core");

function main() {
  const source = docsPath + "/index.html";
  // Root routes
  fs.copyFileSync(source, path.join(docsPath, "getting-started.html"));

  // Component routes
  fs.mkdirSync(componentsPath);
  [
    "alerts",
    "accordion",
    "badge",
    "breadcrumb",
    "buttons",
    "button-group",
    "cards",
    "carousel",
    "close-button",
    "dropdowns",
    "figures",
    "images",
    "list-group",
    "modal",
    "navs",
    "navbar",
    "offcanvas",
    "popovers",
    "pagination",
    "placeholder",
    "progress",
    "spinners",
    "table",
    "tooltips",
    "toasts",
    "tabs",
  ].forEach((dest) => {
    fs.copyFileSync(source, path.join(componentsPath, `${dest}.html`));
  });

  // Core routes
  fs.mkdirSync(corePath);
  [
    "overview",
    "dropdowns",
    "modal",
    "overlays",
  ].forEach((dest) => {
    fs.copyFileSync(source, path.join(corePath, `${dest}.html`));
  });

  // Layout routes
  fs.mkdirSync(layoutPath);
  [
    "grid",
    "stack",
  ].forEach((dest) => {
    fs.copyFileSync(source, path.join(layoutPath, `${dest}.html`));
  });

  // Forms routes
  fs.mkdirSync(formsPath);
  [
    "overview", 
    "form-controls", 
    "form-text", 
    "select", 
    "checks-radios", 
    "range", 
    "input-group", 
    "floating-labels", 
    "layout", 
    "validation"
  ].forEach((dest) => {
    fs.copyFileSync(source, path.join(formsPath, `${dest}.html`));
  });
  
}

main();
