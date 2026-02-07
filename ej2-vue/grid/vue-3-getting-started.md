---
layout: post
title: Vue 3 getting started with the Grid component | Syncfusion
description: Check out and learn about Vue 3 getting started with the Vue Grid component of Syncfusion Essential JS 2 and more details.
control: Vue 3 getting started
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Grid Component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, lifecycle hooks, and more.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup the Vite project

A recommended approach for beginning with Vue is to scaffold a project using [Vite](https://vitejs.dev). To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm create vite@latest
```

or

```bash
yarn create vite
```

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: The name of the project can be specified directly. For this article, the project name is set as `my-project`.

```bash
? Project name: » my-project
```

2.Select `Vue` as the framework. It will create a Vue 3 project.

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

3.Choose `JavaScript` as the framework variant to build this Vite project using JavaScript and Vue.

```bash
? Select a variant: » - Use arrow-keys. Return to submit.
> JavaScript
  TypeScript
  Customize with create-vue ↗
  Nuxt ↗
```

4.Rolldown is Vite's new experimental faster bundler (rust-based, replacing rollup). Choose `No` uses the stable, proven rollup-based Vite (recommended for most users)

```bash
Use rolldown-vite (Experimental)? No
```

5.Install dependencies and start the dev server.

```bash
Install with npm and start now?: Yes
```

Since you selected `Yes`, the development server should start automatically. If you selected `No`, please follow these steps to set up and start the project manually:

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

This article uses the [Vue Grid component](https://www.syncfusion.com/vue-components/vue-grid) as an example. To use the Vue Grid component in the project, the `@syncfusion/ej2-vue-grids` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```

or

```bash
yarn add @syncfusion/ej2-vue-grids
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> components require CSS stylesheets to display correctly. You can import themes in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG, and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to reference themes in a Vue project.

In this article, `Material3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material3` CSS styles for the Grid component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>

{% endhighlight %}
{% endtabs %}

> The order of CSS imports matters. Import base styles first, then component-specific styles. Missing CSS imports can result in misaligned layouts, buttons without styling, or missing visual elements in popups and dialogs.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Grid component using `Composition API` or `Options API`:

First, import and register the Grid component and its child directives in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<script setup>
  import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids';
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
//Component registration
export default {
  name: "App",
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Defining row data

Bind data to the Grid component by using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid#datasource) property and value is defined in the vue component. It accepts either array of JavaScript object or **DataManager** instance.

```
<template>
    <div id="app">
        <ejs-grid :dataSource="data"> </ejs-grid>
    </div>
</template>

<script setup>
  import { GridComponent as EjsGrid } from "@syncfusion/ej2-vue-grids";
  const data = [
      { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
      { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
      { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
      { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
      { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
      { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
      { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
      { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
      { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 }
  ];
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
```

## Defining columns

The Grid has an option to define columns as directives. These column directives include various properties that allow customization of the columns. Let’s check the properties used here:

* The [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column#field) to map with a property name an array of JavaScript objects.
* The [headerText](https://ej2.syncfusion.com/vue/documentation/api/grid/column#headertext) to change the title of columns.
* The `textAlign` property controls the text alignment within columns. By default, columns will be left aligned. To change columns to right align, set [`textAlign`](https://ej2.syncfusion.com/vue/documentation/api/grid/column#textalign) as **Right**.
* The [format](https://ej2.syncfusion.com/vue/documentation/api/grid/column#format). property enables formatting of numeric and date values to standard or custom formats.
Here, the conversion of numeric values to currency format has been defined.

```
<ejs-grid :dataSource="data">
    <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
    </e-columns>
</ejs-grid>
```

## Module injection

To create Vue Grid with additional features, inject the required modules. The following modules are used to extend Grid's basic functionality.

* **Page** - Inject this module to use paging feature.
* **Sort** - Inject this module to use sorting feature.
* **Filter** - Inject this module to use filtering feature.
* **Group** - Inject this module to use grouping feature.
* **Aggregate** - Inject this module to use aggregate feature.

Register the required array of modules under the key **grid** in the **provide** section.

> Additional feature modules are available [here](./module)

Register required modules using the `provide` function in the `<script>` section and pass them as an array under the key **'grid'**:

```
<script setup>
  import { provide } from "vue";
  import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Sort, Filter, Group } from "@syncfusion/ej2-vue-grids";
  provide('grid', [Page, Sort, Filter, Group]);
</script>
```

## Enable paging

The paging feature enables users to view the Grid record in a paged view.
It can be enabled by setting [`allowPaging`](https://ej2.syncfusion.com/vue/documentation/api/grid#allowpaging) property to true. Also, need to inject the **Page** module in the **provide** section as follows.

If the **Page** module is not injected, the pager will not be rendered in Grid. The pager can be customized using [`pageSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid#pagesettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs1" %}

## Enable sorting

The sorting feature enables the user to order the records. It can be enabled by setting [`allowSorting`](	https://ej2.syncfusion.com/vue/documentation/api/grid#allowsorting) property as true. Also, need to inject the **Sort** module in the **provide** section as follow. If the **Sort** module is not injected, the user are not able to sort when click on headers. Sorting feature can be customized using [`sortSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid#sortsettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs2" %}

## Enable filtering

The filtering feature enables the user to view the reduced amount of records based on filter criteria. It can be enabled by setting [`allowFiltering`](	https://ej2.syncfusion.com/vue/documentation/api/grid#allowfiltering) property as true. Also, need to inject the **Filter** module in the **provide** section as follow. If the **Filter** module is not injected, the filter bar will not be rendered in Grid. Filtering feature can be customized using [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid#filtersettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs3" %}

## Enable grouping

The grouping feature enables users to view the Grid record in a grouped view. It can be enabled by setting [`allowGrouping`](	https://ej2.syncfusion.com/vue/documentation/api/grid#allowgrouping) property to true. Also, need to inject the **Group** module in the **provide** section as follow. If the **Group** module is not injected, the group drop area will not be rendered in Grid. Grouping feature can be customized using [`groupSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid#groupsettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs4" %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource="data" :allowPaging="true" :allowSorting='true' :allowFiltering='true' :allowGrouping='true' :pageSettings='pageSettings' >
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
          </e-columns>
          <e-aggregates>
            <e-aggregate>
                <e-columns>
                    <e-column type="Sum" field="Freight" format="C2" :footerTemplate='footerSum'></e-column>
                </e-columns>
            </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, createApp } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Page, Sort, Filter, Group, Aggregate } from "@syncfusion/ej2-vue-grids";
const app = createApp();
      const data = [
          { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
          { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
          { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
          { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
          { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
          { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
          { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
          { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 }
      ];
      const pageSettings = { pageSize: 5 };
      const footerSum = function () {
        return  { template : app.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {data: {}}};}
            })
          }
      }
  provide('grid',  [Page, Sort, Filter, Group, Aggregate]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
<template>
    <div id="app">
        <ejs-grid :dataSource="data" :allowPaging="true" :allowSorting='true' :allowFiltering='true' :allowGrouping='true' :pageSettings='pageSettings' >
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
          </e-columns>
          <e-aggregates>
            <e-aggregate>
                <e-columns>
                    <e-column type="Sum" field="Freight" format="C2" :footerTemplate='footerSum'></e-column>
                </e-columns>
            </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnDirective, ColumnsDirective, AggregateDirective, AggregatesDirective, Page, Sort, Filter, Group, Aggregate } from "@syncfusion/ej2-vue-grids";
export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'e-aggregates': AggregatesDirective,
    'e-aggregate': AggregateDirective,
  },
  data() {
    return {
      data: [
          { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
          { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
          { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
          { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
          { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
          { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
          { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
          { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 }
      ],
      pageSettings: { pageSize: 5 },
      footerSum: function () {
        return  { template : Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {data: {}}};}
            })
          }
      }
    };
  },
  provide: {
    grid: [Page, Sort, Filter, Group, Aggregate]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs6" %}

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](../guide/introduction.html#composition-api)
* [Getting Started with Vue UI Components using Options API and TypeScript](../guide/introduction.html#options-api)
* [Getting Started with Vue UI Components with the Nuxt Framework](https://ej2.syncfusion.com/vue/documentation/getting-started/nuxt-3)
* [Getting Started with Vue UI Components with Vite and PNPM](https://ej2.syncfusion.com/vue/documentation/getting-started/pnpm)
* [Getting started with testing Vue UI components in the Vitest project](https://ej2.syncfusion.com/vue/documentation/getting-started/vitest)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI Components using direct scripts](https://ej2.syncfusion.com/vue/documentation/getting-started/direct-scripts)