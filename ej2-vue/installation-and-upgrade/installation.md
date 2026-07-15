---
layout: post
title: Installation in Vue Installation and upgrade component | Syncfusion
description: Learn here all about Installation in Syncfusion Vue Installation and upgrade component of Syncfusion Essential JS 2 and more.
control: Installation
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Installation of Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Controls

This guide explains how to install Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 Vue UI components into an existing Vue project using either the **npm CLI** or the **`package.json`** file.

**Prerequisites**

* [Node.js](https://nodejs.org/) and npm installed. npm is bundled with Node.js.
* An existing Vue 2 or Vue 3 project created with the [Vue CLI](https://cli.vuejs.org/) or [Vite](https://vitejs.dev/).
* Access to the npm registry (public, or your private registry if applicable).

## Install by Using the npm CLI

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on [npm](https://www.npmjs.com/search?q=scope:syncfusion). You can install the required packages using npm. For example, the Vue Grid package can be installed with the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```

For a list of available packages and the latest version, see [`@syncfusion/ej2-vue-grids`](https://www.npmjs.com/package/@syncfusion/ej2-vue-grids) on npm.

## Install by Using package.json

1. Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue (Essential<sup style="font-size:70%">&reg;</sup> JS 2) package references to the `dependencies` section of your project's `package.json` file:

    ```json
    {
        "dependencies": {
            "@syncfusion/ej2-vue-grids": "^20.2.38",
            "@syncfusion/ej2-vue-charts": "^20.2.38"
        }
    }
    ```

    > Replace `^20.2.38` with the version you need. For details on version ranges, see the [npm `package.json` documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies).

2. From the root of your project, run the following command to install all npm dependencies at once:

    ```bash
    npm install
    ```

    > For more information, see the [npm `package.json` documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).

## Next Steps

After installing the package, you typically need to:

1. Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in your application. For example, in a Vue 3 app using `createApp`:

    ```javascript
    import { createApp } from 'vue';
    import { GridComponent } from '@syncfusion/ej2-vue-grids';
    import App from './App.vue';

    const app = createApp(App);
    app.component('ejs-grid', GridComponent);
    app.mount('#app');
    ```

    For Vue 2, register the components globally through `Vue.use(...)` from the package's plugin entry point, or import the component into a single-file component (SFC).

2. Import the required CSS for the theme. For example:

    ```css
    @import "@syncfusion/ej2-vue-grids/styles/material.css";
    ```

For component-specific configuration, theming, and usage examples, refer to the documentation of the individual Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component you are using.

## Troubleshooting

| Issue | Possible Cause | Suggested Fix |
| --- | --- | --- |
| `npm install` reports a peer-dependency warning about Vue versions. | Installed package version does not match your Vue 2 / Vue 3 version. | Use the Vue 3 package (default `@syncfusion/ej2-vue-*`) for Vue 3, or the `ej2-vue-*` packages built for Vue 2. |
| `package.json` shows the package version as `*` and `npm install` fails. | `*` is a placeholder, not a valid npm range. | Replace `*` with an explicit version such as `^20.2.38` or a specific version. |
| Component template does not render. | The component is not registered globally, or the import path is wrong. | Verify the component import path matches the installed package, and register it via `app.component` (Vue 3) or `Vue.use` / `components: { ... }` (Vue 2). |
| Stylesheet does not load. | The theme CSS was not imported. | Import the theme CSS for the component, for example `@import "@syncfusion/ej2-vue-grids/styles/material.css";`. |

For additional help, see [Common Installation Errors](https://ej2.syncfusion.com/vue/documentation/installation-and-upgrade/common-installation-errors).