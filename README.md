# Solid-Bootstrap

## Documentation

**[Documentation is available here.](https://solid-libs.github.io/solid-bootstrap/)**

## Overview

Solid-Bootstrap is a port of [React-Bootstrap](https://react-bootstrap.github.io/) for [SolidJS](https://www.solidjs.com/).

This is a complete implementation of the Bootstrap 5 components using SolidJS. It has no dependency on either bootstrap.js or jQuery. If you have SolidJS setup and Solid-Bootstrap installed, you have everything you need.

Refer to the original [React Bootstrap documentation](https://react-bootstrap.github.io/components/alerts) to supplement this page.

## Getting started

1. Create a new SolidJS website per [Solid's documentation](https://www.solidjs.com/guide) (if you don't have an existing site).
2. Add the Bootstrap 5 CSS to `index.html` per [Bootstrap's documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/).
3. Install `solid-bootstrap` with `npm`, `yarn`, `pnpm`, etc...

```
> npm install solid-bootstrap
```

> Tip! You may need to clear out some CSS in the default SolidJS template to get the full Bootstrap experience.

## Porting approach

We have changed as little as possible while porting this code.

Principles:

- The goal is to capture all of the proven behaviour of React-Bootstrap, @restart/ui (core) and related projects.
- Keep the source file structure the same.
- Keep the source code as similar as possible to enable future commits to the original projects to also be pulled into this project.
- Enable validation of the porting approach using a side-by-side comparison between the ported SolidJS code and the original implementation.
