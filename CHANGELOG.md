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
