## Unreleased

- [Fix: No-op transitions, as needed in Accordion `alwaysOpen` #19](https://github.com/solid-libs/solid-bootstrap/commit/e606ab2e5f067ed9f79e95d59359368d327af5c6)

## 2022-04-28 - (1.0.8)

- [Feat: Support `class` attribute in addition to `className` attribute (for adding classes to components) #17](https://github.com/solid-libs/solid-bootstrap/commit/7d4055ce0bd09cc9794aa743a90a4c3d025c9639)
- [Fix: Make `x-placement` attribute reactive #16](https://github.com/solid-libs/solid-bootstrap/commit/5e10673a430fda8bfb11274b210e3d822d51d022)
- [Fix: `x-placement` attribute inherits from `Overlay`](https://github.com/solid-libs/solid-bootstrap/commit/63f3a3e8853e8fe7aabee7e1e7592d4e7303e217)
- [Feat: All submodules now have named exports in addition to default exports](https://github.com/solid-libs/solid-bootstrap/commit/11518f5a9b6ac927e2fcc091ea11d77be82b7f75)
- [Fix: React to children changes without constructing multiple times](https://github.com/solid-libs/solid-bootstrap/commit/e81432380d131859f28471f5447955a4b6c2d142)
- Various code cleanup

## 2022-03-26 - (1.0.7)

- [Upstream: fix: issue NavItem - do not include aria-controls if the related element is not mounted](https://github.com/react-restart/ui/commit/a81ec97dd32ade77217840a3a0f0d357959fe72f)
- [Upstream: feat(Tabs): support passing custom attributes to Tab](https://github.com/react-bootstrap/react-bootstrap/commit/6afa734cf29027cda36e188181762dca88fc48d)
- [Upstream feat: support custom breakpoint](https://github.com/react-bootstrap/react-bootstrap/commit/0910a21b7d35eb859ca9e160c4492ef41a33810e)
- resolve more typing issues with newer Solid versions

## 2022-02-21 - (1.0.5)

- bump dependencies and resolve typing issues with newer Solid versions

## 2022-02-06 - (1.0.4)

### Bug Fixes

- [Fix: core Nav missing tablist role](https://github.com/solid-libs/solid-bootstrap/commit/46f82e9dfc8968895459a3ba5140b673a1cd1c93)

## 2022-02-06 - (1.0.3)

### Bug Fixes

- [Upstream: core NavItem - do not include aria-controls if the related element is not mounted](https://github.com/solid-libs/solid-bootstrap/commit/10c789852676a779c56a0ac3d32a05d155c4ad92)
- [Fix: Tooltips do not always close #12](https://github.com/solid-libs/solid-bootstrap/commit/fa46cf68cde62a1b2a2913820d1150c9624bb0e6)

## 2022-02-01 - (1.0.2)

### Bug Fixes

- [SSR - suppress event listeners on server](https://github.com/solid-libs/solid-bootstrap/commit/49f2df94a0dfac7b401f2804caa0d9f12a87e87f)

## 2022-02-01 - (1.0.1)

### Bug Fixes

- [Upstream: fix dropdown close](https://github.com/solid-libs/solid-bootstrap/commit/e3b8393c153d0ea1dd1df1d05f2c42353fe0d2b3)
- [Dropdown focus on escape - 2nd attempt](https://github.com/solid-libs/solid-bootstrap/commit/852b7320b7b76593a101ec8928a4cd77de6703f9)
- [Upstream: export role from useTabPanel hook](https://github.com/solid-libs/solid-bootstrap/commit/b092a6bb9dec0206aca4d00408c4ff9bc1ddc1bf)
- [Upstream: core Button add href="#" when no href provided for anchors](https://github.com/solid-libs/solid-bootstrap/commit/6f3ba80fbcc354e2cc6f6b9997a583be4dcddc81)
- [Fix: core Button and NavItem incorrect Dynamic prop](https://github.com/solid-libs/solid-bootstrap/commit/6aa1cc04cfe700b73942c343c6fe29898a818d94)
- [Core NavItem - default to render as Button](https://github.com/solid-libs/solid-bootstrap/commit/ff7758b37cc91e641116dd9f21a12a9190a2b964)
- [Upstream: - ToggleButton: remove role="button" from label](https://github.com/solid-libs/solid-bootstrap/commit/dbe5a7df64a8fdb0e1ab351aeaeb25e8ef24e351)

## 2022-01-23 - (1.0.0)

### Bug Fixes

- [Fix: Dropdown trigger not focused on Escape](https://github.com/solid-libs/solid-bootstrap/commit/13e35001731261d68cd95291fcd3f04dbe85c8e1)

## 2022-01-08 - solid-bootstrap (0.2.7)

### Bug Fixes

- [Fix: Transition - not (re)showing unless on initial appear](https://github.com/solid-libs/solid-bootstrap/commit/15be5b1e493dc2005e48cbc3e7fc570b5d2f29a7)

## 2022-01-04 - solid-bootstrap (0.2.6)

### Bug Fixes

- [New data-active-key not set upon initialization](https://github.com/solid-libs/solid-bootstrap/issues/7)

## 2022-01-04 - solid-bootstrap (0.2.5)

### New Features

- Tabs & Nav - add data-active-key attribute

### Bug Fixes

- [Form.Control id prop doesn't work for checkboxes](https://github.com/solid-libs/solid-bootstrap/issues/6)

## 2022-01-03 - solid-bootstrap (0.2.4)

### Bug Fixes

- [core anchor and button not responsive](https://github.com/solid-libs/solid-bootstrap/issues/5)

## 2022-01-01 - solid-bootstrap (0.2.3)

### Upstream changes

- [Accordion - add new `alwaysOpen` prop](https://github.com/react-bootstrap/react-bootstrap/pull/6091)

## 2021-12-21 - solid-bootstrap (0.2.2)

### Upstream changes

- [add support for iframe and differing owner documents](https://github.com/react-restart/ui/pull/38)
- [fix NavDropdown onSelect](https://github.com/react-bootstrap/react-bootstrap/pull/6151)

## 2021-12-10 - solid-bootstrap (0.2.0)

### BREAKING CHANGE

Remove component default exports due to incompatibilty with SolidJS.

Any components previously imported like this...

```
import Alert from 'solid-bootstrap/Alert'
```

...now need to be imported like this...

```
import { Alert } from 'solid-bootstrap'
```

## 2021-12-09 - solid-bootstrap (0.1.12)

Remove external dependancy on `classnames` ([#2](https://github.com/solid-libs/solid-bootstrap/issues/2))

## 2021-12-02 - solid-bootstrap (0.1.3)

### Bug Fixes

Fix - carousel prev/next icons only show once if multiple on page

## 2021-12-01 - solid-bootstrap (0.1.2)

### Bug Fixes

- **FormCheck:** fix `Form.Check.Label` spacing ([react-bootstrap/#5938](https://github.com/react-bootstrap/react-bootstrap/issues/5938))
