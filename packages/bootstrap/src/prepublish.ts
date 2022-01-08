import * as fs from "fs";
import path from "path";

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

import {fileURLToPath} from "url";
import {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function main() {
  const source = fs.readFileSync(__dirname + "/../../package.json").toString("utf-8");
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};
  if (sourceObj.main.startsWith("dist/")) {
    sourceObj.main = sourceObj.main.slice(5);
  }
  if (sourceObj.types.startsWith("dist/")) {
    sourceObj.types = sourceObj.types.slice(5);
  }
  fs.writeFileSync(
    path.join(__dirname, "../package.json"),
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"),
  );
  // fs.writeFileSync(
  //   __dirname + "/version.txt",
  //   Buffer.from(sourceObj.version, "utf-8")
  // );

  fs.copyFileSync(path.join(__dirname, "../../.npmignore"), path.join(__dirname, "../.npmignore"));
  fs.copyFileSync(path.join(__dirname, "../../README.md"), path.join(__dirname, "../README.md"));
}

main();
