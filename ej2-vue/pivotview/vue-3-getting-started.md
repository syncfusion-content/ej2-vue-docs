---
layout: post
title: Vue 3 getting started with the Pivotview component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Pivotview component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Pivot Table component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Pivotview component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Set up the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev/). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

**1.** Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
? Project name: » my-project
```

**2.** Select `Vue` as the framework. It will create a Vue 3 project.

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

**3.** Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

**4.** Upon completing the aforementioned steps to create the `my-project`, run the following command to install its dependencies:

```bash
cd my-project
npm install
```

or

```bash
cd my-project
yarn install
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in the project, install the corresponding npm package.
This article uses the [Vue Pivotview component](https://www.syncfusion.com/vue-components/vue-pivot-table) as an example. To use the Vue Pivotview component in the project, the `@syncfusion/ej2-vue-pivotview` package needs to be installed using the following command:
```bash
npm install @syncfusion/ej2-vue-pivotview --save
```
or
```bash
yarn add @syncfusion/ej2-vue-pivotview
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `material3` theme is applied using CSS styles, which are available in installed packages. The necessary `material3` CSS styles for the Pivotview component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Pivotview component using `Composition API` or `Options API`:

**1.** First, import and register the Pivotview component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { PivotViewComponent, FieldList, GroupingBar, CalculatedField } from "@syncfusion/ej2-vue-pivotview";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import { PivotViewComponent, FieldList, GroupingBar, CalculatedField } from "@syncfusion/ej2-vue-pivotview";
  //Component registeration.
  export default {
    name: "App",
    components: {
      "ejs-pivotview": PivotViewComponent
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

**2.** In the `template` section, define the Pivotview component with the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/pivotview/idataoptions#datasource) property and column definitions.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-pivotview :height="height" :width="width" :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList" :showGroupingBar="showGroupingBar" :allowCalculatedField="allowCalculatedField"></ejs-pivotview>
</template>

{% endhighlight %}
{% endtabs %}

**3.** Declare the values for the `dataSource` property in the `script` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  const dataSource = [
    { Amount: 5100, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 21, State: "Alberta" },
    { Amount: 1900, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 23, State: "Alberta" },
    { Amount: 1000, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 29, State: "Alberta" },
    { Amount: 2060, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 93, State: "British Columbia" },
    { Amount: 6200, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 36, State: "British Columbia" },
    { Amount: 2000, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 31, State: "British Columbia" },
    { Amount: 1300, Country: "Canada", Date: "FY 2005", Product: "Car", Quantity: 45, State: "Brunswick" },
    { Amount: 3400, Country: "France", Date: "FY 2006", Product: "Car", Quantity: 47, State: "Brunswick" },
    { Amount: 2300, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 43, State: "Brunswick" },
  ]
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  data() {
    return {
      dataSourceSettings: {
        dataSource: [
          { Amount: 5100, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 21, State: "Alberta" },
          { Amount: 1900, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 23, State: "Alberta" },
          { Amount: 1000, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 29, State: "Alberta" },
          { Amount: 2060, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 93, State: "British Columbia" },
          { Amount: 6200, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 36, State: "British Columbia" },
          { Amount: 2000, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 31, State: "British Columbia" },
          { Amount: 1300, Country: "Canada", Date: "FY 2005", Product: "Car", Quantity: 45, State: "Brunswick" },
          { Amount: 3400, Country: "France", Date: "FY 2006", Product: "Car", Quantity: 47, State: "Brunswick" },
          { Amount: 2300, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 43, State: "Brunswick" },
        ],
        rows: [{ name: 'Country' }],
        columns: [{ name: 'Date' }],
        values: [{ name: 'Amount' }, { name: 'Total', type: 'CalculatedField' }],
        formatSettings: [{ name: 'Amount', format: 'C1' }],
        calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Quantity)"' }]
      },
      showFieldList: true,
      showGroupingBar: true,
      allowCalculatedField: true,
      height: '350px',
      width: '100%'
    };
  }
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pivotview :height="height" :width="width" :dataSourceSettings="dataSourceSettings"></ejs-pivotview>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";

const dataSourceSettings = {
  dataSource: [
    { Amount: 5100, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 21, State: "Alberta" },
    { Amount: 1900, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 23, State: "Alberta" },
    { Amount: 1000, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 29, State: "Alberta" },
    { Amount: 2060, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 93, State: "British Columbia" },
    { Amount: 6200, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 36, State: "British Columbia" },
    { Amount: 2000, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 31, State: "British Columbia" },
    { Amount: 1300, Country: "Canada", Date: "FY 2005", Product: "Car", Quantity: 45, State: "Brunswick" },
    { Amount: 3400, Country: "France", Date: "FY 2006", Product: "Car", Quantity: 47, State: "Brunswick" },
    { Amount: 2300, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 43, State: "Brunswick" }
  ],
  rows: [{ name: 'Country' }],
  columns: [{ name: 'Date' }],
  values: [{ name: 'Amount' }],
  formatSettings: [{ name: 'Amount', format: 'C1' }]
};
const height = 350;
const width = '100%';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-pivotview :height="height" :width="width" :dataSourceSettings="dataSourceSettings"></ejs-pivotview>
</template>

<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";

export default {
  name: "App",
  // Declaring component and its directives.
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  // Bound properties declaration.
  data() {
    return {
      dataSourceSettings: {
        dataSource: [
          { Amount: 5100, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 21, State: "Alberta" },
          { Amount: 1900, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 23, State: "Alberta" },
          { Amount: 1000, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 29, State: "Alberta" },
          { Amount: 2060, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 93, State: "British Columbia" },
          { Amount: 6200, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 36, State: "British Columbia" },
          { Amount: 2000, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 31, State: "British Columbia" },
          { Amount: 1300, Country: "Canada", Date: "FY 2005", Product: "Car", Quantity: 45, State: "Brunswick" },
          { Amount: 3400, Country: "France", Date: "FY 2006", Product: "Car", Quantity: 47, State: "Brunswick" },
          { Amount: 2300, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 43, State: "Brunswick" },
        ],
        rows: [{ name: 'Country' }],
        columns: [{ name: 'Date' }],
        values: [{ name: 'Amount' }],
        formatSettings: [{ name: 'Amount', format: 'C1' }]
      },
      height: '350px',
      width: '100%'
    };
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![vue-3-js-pivot-table](./images/vue-3-js-pivot-table.png)

> **Sample**: [vue-3-pivot-table-getting-started](https://github.com/SyncfusionExamples/vue3-pivottable-getting-started).

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../getting-started/vue-3-ts-composition.md)
* [Getting Started with Vue UI Components using Options API and TypeScript](../getting-started/vue-3-ts-options.md)
* [Data Binding](./data-binding)
* [Field List](./field-list)
* [Grouping Bar](./grouping-bar)