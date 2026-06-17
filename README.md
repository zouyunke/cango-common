# cango-common

Vue 3 component library for Cango common UI components.

## Install

```bash
npm install cango-common
```

The consuming project must install Vue 3:

```bash
npm install vue
```

## Usage

### Full import

```js
import { createApp } from 'vue'
import CgUI from 'cango-common'
import 'cango-common/style.css'
import App from './App.vue'

createApp(App)
  .use(CgUI)
  .mount('#app')
```

```vue
<template>
  <cg-input v-model="value" />
  <cg-alert title="Saved" type="success" />
  <cg-switch v-model="enabled" />
</template>
```

### Named imports

```js
import { createApp } from 'vue'
import { CgInput, CgAlert, CgSwitch } from 'cango-common'
import 'cango-common/style.css'
import App from './App.vue'

const app = createApp(App)

app.component(CgInput.name, CgInput)
app.component(CgAlert.name, CgAlert)
app.component(CgSwitch.name, CgSwitch)
app.mount('#app')
```

## Development

```bash
npm install
npm run dev
```

The Vite dev server opens the local demo from `src/App.vue`.

## Build

```bash
npm run build
```

Library output is written to `dist/`:

- `dist/cango-common.es.js`
- `dist/cango-common.umd.cjs`
- `dist/style.css`

Vue is declared as a peer dependency and is not bundled into the library.

## Publish

1. Make sure the package metadata in `package.json` is correct.
2. Build and inspect the package:

   ```bash
   npm run build
   npm run pack:dry
   ```

3. Publish to the configured npm registry:

   ```bash
   npm publish
   ```

`prepublishOnly` runs `npm run build` automatically before `npm publish`.
