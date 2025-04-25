---
layout: post
title: Getting Started with Nuxt Framework and Vue Component | Syncfusion
description:  Check out and learn about getting started with the Nuxt Framework and Vue Component of Syncfusion Essential JS 2 and more details.
control: Nuxt 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Vue UI Components with the Nuxt Framework

This article provides a step-by-step guide for setting up a [Nuxt](https://nuxt.com/) project and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api).

`Nuxt.js` is a powerful framework for building universal Vue.js applications. It is built on top of `Vue.js` and provides a higher-level structure and conventions to simplify the development of Vue applications.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](../system-requirements)

## Set up the Nuxt project

To initiate the creation of a new [Nuxt](https://nuxt.com/) project, use the following commands:

```bash
npx nuxi@latest init my-project

cd my-project

npm install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.

This article uses the [Vue Grid component](https://www.syncfusion.com/vue-components/vue-grid) as an example. To use the Vue Grid component in the project, the `@syncfusion/ej2-vue-grids` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```

## Configure transpilation for Syncfusion<sup style="font-size:70%">&reg;</sup> packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages utilize the ESM syntax, while Nuxt apps operate with the common JS syntax. To enable transpilation of Syncfusion<sup style="font-size:70%">&reg;</sup> packages, include the following configuration in the **nuxt.config.ts** file:

{% tabs %}
{% highlight html tabtitle="~/nuxt.config.ts" %}

export default defineNuxtConfig({
  build: {
    transpile: [/@syncfusion/]
  }
})

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to learn more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Grid component and its dependents were imported into the `<style>` section of the **app.vue** file.

{% tabs %}
{% highlight html tabtitle="~/app.vue" %}

<style>
  @import "./node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "./node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "./node_modules/@syncfusion/ej2-calendars/styles/material.css";
  @import "./node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "./node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "./node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "./node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "./node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "./node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with their dependency graph.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Grid component:

1\. First, add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`. And import the Grid component in the `script` section of the **app.vue** file.

{% tabs %}
{% highlight html tabtitle="~/app.vue" %}

<script setup>
  import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';
</script>

{% endhighlight %}
{% endtabs %}
   
2\. In the `template` section, define the Grid component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/app.vue" %}

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

{% endhighlight %}
{% endtabs %}

3\. Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/app.vue" %}

<script setup>
const data = [
  {
    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38 
  },
  {
    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61 
  },
  {
    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83 
  }
];
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for above steps in the **app.vue** file:

{% tabs %}
{% highlight html tabtitle="~/app.vue" %}

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
    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCountry: 'France', Freight: 32.38 
  },
  {
    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCountry: 'Germany', Freight: 11.61 
  },
  {
    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCountry: 'Brazil', Freight: 65.83 
  }
];
</script>

<style>
@import "./node_modules/@syncfusion/ej2-base/styles/material.css";
@import "./node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "./node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "./node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "./node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "./node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "./node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "./node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "./node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

The output will appear as follows:

![Nuxt sample output](../appearance/images/nuxt-3.png)