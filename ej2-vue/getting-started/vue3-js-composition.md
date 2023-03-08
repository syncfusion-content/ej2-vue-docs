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

This section offers a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion Vue components with the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) effectively. If you need information on getting started with the Vue [Options API](https://vuejs.org/guide/introduction.html#options-api), follow this [link](./vite-vue.md).

## Prerequisites

[System requirements for Syncfusion Vue UI components](../system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, you can execute one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Executing one of the above commands will lead you to set up additional configurations for the project:

1. Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

2. Select `Vue` as the framework.

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

3. Choose `JavaScript` as framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4. Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add Syncfusion packages to the project

In order to proceed, install the required Syncfusion Vue component package from the public [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

This article utilizes the Grid component as an example. So, run the below command to install the Syncfusion Grid component package.

```bash
npm install @syncfusion/ej2-vue-grids --save
```

or

```bash
yarn add @syncfusion/ej2-vue-grids
```

## Import the Syncfusion styles

Once you have installed the Syncfusion component packages, you will need to import the necessary themes based on the components.

Syncfusion Vue component comes with built-in [themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme/), which are available in installed packages. It is quite simple to adapt the Syncfusion Vue components based on the project style by referring to any of the built-in themes.

To add the styles, you can reference the CSS or SASS files of the Syncfusion Vue components as follows:

### Import CSS styles

To import the necessary CSS styles for the Grid component, as well as its dependent styles, into the `src/App.vue` file, you can use the provided code snippet within the `<style>` section. Let's import the `Material` theme for the Grid component.

```html
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

Run the below command to add the SASS package in order to use SCSS styles for the Grid component and its dependencies in this project.

```bash
npm install sass
```

or

```bash
yarn add sass
```

Then, within the `<style>` section of the `src/App.vue` file, import the necessary styles and specify the language as `SCSS` using the `lang` attribute. Let's import the `Material` theme for the Grid component.

```html
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

To make use of SASS files in a Vite project, add the following configuration setup to the `vite.config.js` file.

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

You can checkout the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer themes in Vue project.

## Integrate the Syncfusion Vue component to the project

Once we have finished all the essential configurations for rendering the Syncfusion Vue component with the Composition API in your Vite project, proceed with the following steps to add the Grid component:

  1. First, add the `setup` attribute to the `script` tag to indicate that Vue will be using the Composition API. And import the Grid component in the `script` section of the `src/App.vue` file.

```html
<script setup>
  import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';
</script>
```
   
  2. In the `template` section, define the Grid component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid#datasource) property and column definitions.

```html
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

  3. Declare the values for the `dataSource` property in the `script` section.

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

The `src/App.vue` file contains the summarized code for the above steps.

```html
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

## Run the project

To run the project, execute the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vue3-js-composition](../appearance/images/vue3-js-composition.png)