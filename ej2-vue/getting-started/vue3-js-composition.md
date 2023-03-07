---
layout: post
title: Vue3 js composition with Vue Getting started component | Syncfusion
description:  Checkout and learn about Vue3 js composition with Vue Getting started component of Syncfusion Essential JS 2 and more details.
control: Vue3 js composition 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Vue UI Components in JavaScript with the Composition API

This section provides a step-by-step guide on setting up a Vite project with a JavaScript environment and effectively integrating the Syncfusion Vue components with the Composition API.

## Prerequisites

[System requirements for Syncfusion Vue UI components](../system-requirements)

## Creating a Vue application with Vite

To get started with developing modern web projects quickly, consider using [Vite](https://vitejs.dev/), a rapid development tool. To create a new Vite project, choose any one of the ways listed [here](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). One of the commands is illustrated below:

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

When using Vite for the first time, it asks to install an additional package. This package is essential for creating a new Vite project, so select "y" to proceed.

```bash
Need to install the following packages:
create-vite@latest
Ok to proceed? (y)
```

Now, need to select a name for the new project. When choosing a name, it's recommended to use kebab-case for multiple words.

```bash
? Project name: » vite-project
```

The next step is to select Vue as the framework for the new project.

```bash
? Select a framework: » - Use arrow-keys. Return to submit.
  Vanilla
> Vue
  React
  Preact
  Lit
  Svelte
  Others
```

For this application, choose the JavaScript variant.
```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

After creating the application, execute the following command to install its dependencies:

```bash
cd vite-project
npm install
```

or

```bash
cd vite-project
yarn install
```

## Add Syncfusion packages to the application

To proceed, install the necessary Syncfusion Vue component package in this application. These packages can be found on the public [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry, so select the required component to install.

This article uses the Grid component as an example. To install the package for the Grid component, run the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```

or

```bash
yarn add @syncfusion/ej2-vue-grids
```

## Import the Syncfusion styles

Once the Syncfusion component packages are installed in this application, import the necessary themes based on the components. To add the styles, simply reference the CSS or SASS files of the Syncfusion Vue components in the following manner.

### Import CSS styles

To include the required CSS styles for the Grid component, along with its dependent styles, import them within the `<style>` section of the `src/App.vue` file in the following manner:

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

### Import SASS styles
To enable the usage of SASS files within this application, it requires the SASS package to be installed. Install it by executing the following command:

```bash
npm install sass
```

or

```bash
yarn add sass
```

In order to use SCSS styles for the Grid component and its dependencies, import the required styles within the `<style>` section of the `src/App.vue` file using the lang attribute to specify the language as SCSS. This can be accomplished as demonstrated below:

```
<style lang="scss">
  @import "../node_modules/@syncfusion/ej2-base/styles/material.scss";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.scss";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material.scss";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.scss";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.scss";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.scss";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.scss";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.scss";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.scss";
</style>
```

To utilize SASS files, include the following configuration setup in the `vite.config.js` file.

```js
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["node_modules/@syncfusion"]
      }
    }
  }
})
```

## Add the Syncfusion Vue component to the application

After completing all the necessary configurations required to render the Syncfusion Vue component with Composition API, add the Grid component using the following steps:

  1. In the `<script>` section of the `src/App.vue` file, add `setup` attribute and import the Grid component.

```
<script setup>
  import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';
</script>
```
   
  2. In the `template` section, define the Grid component and include bindings for the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid#datasource) property and column definitions.

```
<template>
  <ejs-grid :dataSource='data'>
    <e-columns>
      <e-column field='OrderID' width='100' textAlign="Right"></e-column>
      <e-column field='CustomerID' width='100'></e-column>
      <e-column field='EmployeeID' width='100' textAlign="Right"></e-column>
      <e-column field='Freight' width='100' format="C2" textAlign="Right"></e-column>
      <e-column field='ShipCountry' width='100'></e-column>
    </e-columns>
  </ejs-grid>
</template>
```

  3. In the `script` section, declare the properties that are bound, starting with the `data` collection that is bound to the `dataSource` property.

```js
<script setup>
const data = [
  {
    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
    ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
    ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
  },
  {
    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
    ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
    ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
  },
  {
    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
    ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
  }
];
</script>
```

  4. To summarize the above steps, update the `src/App.vue` file with the following code:

```
<template>
  <ejs-grid :dataSource='data'>
    <e-columns>
      <e-column field='OrderID' width='100' textAlign="Right"></e-column>
      <e-column field='CustomerID' width='100'></e-column>
      <e-column field='EmployeeID' width='100' textAlign="Right"></e-column>
      <e-column field='Freight' width='100' format="C2" textAlign="Right"></e-column>
      <e-column field='ShipCountry' width='100'></e-column>
    </e-columns>
  </ejs-grid>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';

const data = [
  {
    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
    ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
    ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
  },
  {
    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
    ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
    ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
  },
  {
    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
    ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
  }
];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Run the application

To run the application, execute the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appears as follows.

![vue3-js-composition](../appearance/images/vue3-js-composition.png)