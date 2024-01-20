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

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Grid component

To get start quickly with Vue Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=pU0ERPrY2go" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

### Vue 3 Application

Select the option `Default ([Vue 3] babel, eslint)` from the menu.

![Vue 3 project](images/vue3-terminal.png)

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Grid component](https://www.syncfusion.com/vue-components/vue-grid) as an example. Install the `@syncfusion/ej2-vue-grids` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-grids --save
```
or

```bash
yarn add @syncfusion/ej2-vue-grids
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Grid component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

>Grid components use other Syncfusion components as well, so CSS references for the dependent component must be added in order to use all grid functionalities. Use this same order to display the Syncfusion Grid component's predefined appearance.


## Add Syncfusion Vue component

Follow the below steps to add the Vue Grid component:

1\. First, import and register the Grid component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { GridComponent } from "@syncfusion/ej2-vue-grids";

export default {
  components: {
    'ejs-grid': GridComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Grid component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-grid> </ejs-grid>
  </div>
</template>

{% endhighlight %}
{% endtabs %}


## Register the Syncfusion Vue component

A Syncfusion Vue component needs to be registered so that Vue knows where to locate its implementation when it is encountered in a template.

## Vue 3 Application

Import the Grid component along with the required child directives from the installed packages into the `<script>` section of the `src/App.vue` file. Register the Grid component along with the required child directives using following code.

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

Now, the Grid and column directives are registered to use it in this application.

## Defining Row Data

Data for the Grid component is bind by using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property and value is defined in the vue component. It accepts either array of JavaScript object or **DataManager** instance.

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
  data () {
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
    }
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Defining Columns

The Grid has an option to define columns as directives. In these column directives, we have properties to customize columns.Let’s check the properties used here:

* We have added [`field`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#field) to map with a property name an array of JavaScript objects.
* We have added [headerText](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertext) to change the title of columns.
* We have used `textAlign` to change the alignment of columns. By default, columns will be left aligned. To change columns to right align, we need to define [`textAlign`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#textalign) as **Right**.
* Also, we have used another useful property, [format](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#format). Using this, we can format number and date values to standard or custom formats.
Here, we have defined it for the conversion of numeric values to currency.

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

> Additional feature modules are available [here](./module)

## Enable Paging

The paging feature enables users to view the Grid record in a paged view.
It can be enabled by setting [`allowPaging`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowpaging) property to true. Also, need to inject the **Page** module in the **provide** section as follows.

If we didn't inject the **Page** module, then the pager will not be rendered in Grid. The pager can be customized using [`pageSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/#pagesettings) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs1" %}

## Enable Sorting

The sorting feature enables the user to order the records. It can be enabled by setting [`allowSorting`](	https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting) property as true. Also, need to inject the **Sort** module in the **provide** section as follow. If we didn't inject the **Sort** module, then user not able to sort when click on headers. Sorting feature can be customized using [`sortSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/#sortsettings) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs2" %}

## Enable Filtering

The filtering feature enables the user to view the reduced amount of records based on filter criteria. It can be enabled by setting [`allowFiltering`](	https://ej2.syncfusion.com/vue/documentation/api/grid/#allowfiltering) property as true. Also, need to inject the **Filter** module in the **provide** section as follow. If we didn't inject the **Filter** module, then filter bar will not be rendered in Grid. Filtering feature can be customized using [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/#filtersettings) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs3" %}

## Enable Grouping

The grouping feature enables users to view the Grid record in a grouped view. It can be enabled by setting [`allowGrouping`](	https://ej2.syncfusion.com/vue/documentation/api/grid/#allowgrouping) property to true.Also, need to inject the **Group** module in the **provide** section as follow. If we didn't inject the **Group** module, then the group drop area will not be rendered in Grid. Grouping feature can be customized using [`groupSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/#groupsettings) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/grid/getting-started/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs4" %}

## Enable Aggregate

The Aggregate feature enables users to view the aggregates of Grid records. It can be enabled by configured through **e-aggregates** directive. The **field** and **type** are the minimum properties required to represent an aggregate column.Also, need to inject the **Aggregate** module in the **provide** section as follow. If we didn't inject the **Aggregate** module, then the footer table will not be rendered in Grid. Check [`aggregate`](./aggregates) to know more about its configuration.

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
{% highlight html tabtitle="~/src/App.vue" %}
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
import Vue from 'vue';
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
{% highlight html tabtitle="~/src/App.vue" %}
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
import Vue from 'vue';
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

> You can refer to our [Vue Grid]( https://www.syncfusion.com/vue-ui-components/vue-grid) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Grid example]( https://ej2.syncfusion.com/vue/demos/#/material/grid/grid-overview.html) that shows how to render the Grid in Vue.

## See Also

* [Testing the Vue Grid](https://www.syncfusion.com/forums/140772/testing-the-vue-grid)
* [Switching themes programmatically in Vue Grid](https://www.syncfusion.com/forums/145386/switching-themes-programmatically-in-vue-grid)
