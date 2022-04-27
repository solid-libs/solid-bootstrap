## Repository Layout

This repository uses [NPM workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
to make it easier to manipulate its three NPM packages
(in [`packages`](packages)).

### How To Build Packages

After you clone the repository, you can build all three packages like so:

```sh
npm install
npm run build
```

In particular, `npm run build` runs `npm run build` within each package.

### How To Build The Website

In the `www` directory, you can start a development server like so:

```sh
npm install
npm run dev
```

Note that the development server relies on the built packages, so you need to
`npm run build` in the root directory whenever you change something.

To build a deployable site in the `dist` subdirectory,
run the following in the `www` directory:

```sh
npm run build
```

To build a deployable site and deploy it to GitHub Pages,
run the following in the `www` directory:

```sh
npm run gh-pages
```

Again, be sure to `npm run build` in the root directory first.
