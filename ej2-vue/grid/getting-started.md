---
layout: post
title: Getting started with Vue Grid component | Syncfusion
description:  Checkout and learn about Getting started with Vue Grid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Grid Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component.

To get started quickly with Vue Grid, check this video:

{% youtube "https://www.youtube.com/watch?v=pU0ERPrY2go" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setup the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Grid component](https://www.syncfusion.com/vue-components/vue-grid) as an example. Install the `@syncfusion/ej2-vue-grids` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```
or

```bash
yarn add @syncfusion/ej2-vue-grids
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> components require CSS stylesheets to display correctly. You can import themes in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG, and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to reference themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Grid component and its dependents were imported into the `<style>` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

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

{% endhighlight %}
{% endtabs %}

>**Important** The order of CSS imports matters. Import base styles first, then component-specific styles. Missing CSS imports can result in misaligned layouts, buttons without styling, or missing visual elements in popups and dialogs.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Grid component:

1\. First, import and register the Grid component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<script>
import { GridComponent } from "@syncfusion/ej2-vue-grids";
export default {
name: "App",
  components: {
    'ejs-grid': GridComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Grid component.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-grid> </ejs-grid>
  </div>
</template>

{% endhighlight %}
{% endtabs %}


## Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

A Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component needs to be registered so that Vue knows where to locate its implementation when it is encountered in a template.

To use directives like `e-columns` and `e-column` for defining grid columns, import the Grid component along with the required child directives from the installed packages into the `<script>` section of the `src/App.vue` file. Register the Grid component along with the required child directives using the following code:

```js
  import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';

  // Component registration
  export default {
    name: "App",
    components: {
      'ejs-grid' : GridComponent,
      'e-columns' : ColumnsDirective,
      'e-column' : ColumnDirective
    }
  }
```

The Grid and column directives are now registered and ready to use in this application.

## Defining row data

Data for the Grid component is bound using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid#datasource) property. The value is defined in the Vue component and accepts either an array of JavaScript objects or a **DataManager** instance.

```
<template>
    <div id="app">
        <ejs-grid :dataSource="data"> </ejs-grid>
    </div>
</template>

<script>
import { GridComponent } from "@syncfusion/ej2-vue-grids";
export default {
  components: {
    'ejs-grid': GridComponent
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
      ]
    };
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Defining columns

The Grid has an option to define columns as directives. These column directives include various properties that allow customization of the columns. Let’s check the properties used here:

* The [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column#field) to map with a property name of an array of JavaScript objects.
* The [headerText](https://ej2.syncfusion.com/vue/documentation/api/grid/column#headertext) to change the title of columns.
* The `textAlign` property controls the text alignment within columns. By default, columns will be left aligned. To change columns to right align, set [`textAlign`](https://ej2.syncfusion.com/vue/documentation/api/grid/column#textalign) as **Right**.
* The [format](https://ej2.syncfusion.com/vue/documentation/api/grid/column#format) property enables formatting of numeric and date values to standard or custom formats.
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

> Additional feature modules are available [here](./module)

Register required modules using the `provide` function in the `<script>` section and pass them as an array under the key **'grid'**:

```js
import { GridComponent, Page, Sort, Filter } from '@syncfusion/ej2-vue-grids';

export default {
  components: { 'ejs-grid': GridComponent },
  provide: {
    grid: [Page, Sort, Filter]
  }
}
```

## Enable paging

The paging feature enables users to view the Grid records in a paged view.
It can be enabled by setting [`allowPaging`](https://ej2.syncfusion.com/vue/documentation/api/grid#allowpaging) property to true. Also, need to inject the **Page** module in the **provide** section as follows.

If the **Page** module is not injected, the pager will not be rendered in Grid. The pager can be customized using [`pageSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid#pagesettings) property.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs1" %}

## Enable sorting

The sorting feature enables the user to order the records. It can be enabled by setting [`allowSorting`](	https://ej2.syncfusion.com/vue/documentation/api/grid#allowsorting) property as true. Also, need to inject the **Sort** module in the **provide** section as follows. If the **Sort** module is not injected, the user not able to sort when click on headers. Sorting feature can be customized using [`sortSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid#sortsettings) property.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs2" %}

## Enable filtering

The filtering feature enables users to view a reduced set of records based on filter criteria. It can be enabled by setting [`allowFiltering`](	https://ej2.syncfusion.com/vue/documentation/api/grid#allowfiltering) property as true. Also, need to inject the **Filter** module in the **provide** section as follows. If the **Filter** module is not injected, the filter bar will not be rendered in Grid. Filtering feature can be customized using [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid#filtersettings) property.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs3" %}

## Enable grouping

The grouping feature enables users to view the Grid records in a grouped view. It can be enabled by setting the [`allowGrouping`](	https://ej2.syncfusion.com/vue/documentation/api/grid#allowgrouping) property to true.Also, need to inject the **Group** module in the **provide** section as follows. If the **Group** module is not injected, the group drop area will not be rendered in Grid. Grouping feature can be customized using [`groupSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid#groupsettings) property.

{% tabs %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs4" %}

## Enable aggregate

The Aggregate feature enables users to view the aggregates of Grid records. It can be enabled by configuring the **e-aggregates** directive. The **field** and **type** are the minimum properties required to represent an aggregate column.Also, need to inject the **Aggregate** module in the **provide** section as follows. If the **Aggregate** module is not injected, the footer table will not be rendered in Grid. Check [`aggregate`](./aggregates) to know more about its configuration.

To avoid runtime-compilation overhead and CSP restrictions, install the template compiler using the following code:

```bash
npm i vue-template-compiler
```

Additionally, you need to set **runtimeCompiler** to true in the Vue.js CLI configuration, as shown below:

```bash
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
})
```

{% tabs %}
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
name: "App",
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
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs5" %}

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
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs6" %}

> You can refer to our [Vue Grid]( https://www.syncfusion.com/vue-components/vue-grid) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Grid example]( https://ej2.syncfusion.com/vue/demos#/material/grid/grid-overview.html) that shows how to render the Grid in Vue.

## See also

* [Getting Started with the Vue Grid Component in Vue 3](https://ej2.syncfusion.com/vue/documentation/grid/vue-3-getting-started)
* [Testing the Vue Grid](https://www.syncfusion.com/forums/140772/testing-the-vue-grid)
* [Switching themes programmatically in Vue Grid](https://www.syncfusion.com/forums/145386/switching-themes-programmatically-in-vue-grid)