---
layout: post
title: Getting started with Vue Grid component | Syncfusion
description:  Checkout and learn about Getting started with Vue Grid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple Grid and demonstrate the basic usage of the Grid component in a Vue environment.

To get start quickly with Vue Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=pU0ERPrY2go" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Create a Vue Application

The best way to create a Vue application is to use the [vue create](https://cli.vuejs.org/#getting-started) command.

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

Initiating a new project prompts us to choose the type of project to be used for the current application.

### Vue 2 Application

Select the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](images/vue2-terminal.png)

### Vue 3 Application

Select the option `Default ([Vue 3] babel, eslint)` from the menu.

![Vue 3 project](images/vue3-terminal.png)

## Add Syncfusion packages

Once the Vue application is created, install the required Syncfusion Vue component package in the application. All the available Syncfusion Vue packages are published in the [npmjs.com](https://www.npmjs.com/search?q=ej2-vue) registry. Choose the component to be installed. In this article, the Grid component is used as an example.

Check out the [installation and upgrade](../installation-and-upgrade/installation.md) section to learn about the different ways of installing the packages. Here, the Grid component package is installed using the following `npm` command.

```bash
npm install @syncfusion/ej2-vue-grids --save
```

## Import the Syncfusion CSS styles

After installing the Syncfusion component packages in the application, add the required theme based on the components used.

Check out the [themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) section to know more about built-in themes and different ways (npm packages, CDN and CRG) to refer the themes in the Vue application.

Here the themes are referred through the installed npm packages which contains the built-in themes of Syncfusion Vue component. Let’s import the `Material` theme for the Grid component and its dependencies to the `<style>` section of the `App.vue` file as follows.

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

>Grid components use other Syncfusion components as well, so CSS references for the dependent component must be added in order to use all grid functionalities. Use this same order to display the Syncfusion Grid component's predefined appearance.

## Register the Syncfusion Vue component

A Syncfusion Vue component needs to be registered so that Vue knows where to locate its implementation when it is encountered in a template.

### Vue 2 Application

Vue has two ways to register the Vue components in the Vue 2 application. Use one of the following ways to register the Syncfusion Vue components:
* [Vue.use()](https://v2.vuejs.org/v2/api/#Vue-use) - It registers the Vue component and all its child directives globally.
* [Vue.component()](https://v2.vuejs.org/v2/guide/components-registration.html) - It registers the Vue component only. It will not register the child directives automatically. The child directives should be registered separately.

#### Using Vue.use()

Import the component plugin from the Vue package and register it using `Vue.use()` with the component plugin as its argument.

Refer to the following code snippet.

```ts
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);
```

#### Using Vue.component()

Import the component and component plugin from the Vue package and register them using `Vue.component()` with the name of the component from the component plugin and the Vue component as its arguments.

Refer to the following the code snippet.

```ts
import { GridPlugin, GridComponent, ColumnsDirective, ColumnsPlugin, ColumnDirective, ColumnPlugin} from "@syncfusion/ej2-vue-grids";

Vue.component(GridPlugin.name, GridComponent);
Vue.component(ColumnsPlugin.name, ColumnsDirective);
Vue.component(ColumnPlugin.name, ColumnDirective);
```

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

## Add Syncfusion Vue component to the application

Let's add the Syncfusion Vue component to the Vue application. Here, the example is showcased with the Vue 2 application.

Add the Vue Grid to the `<template>` section of the `App.vue` file in the `src` directory.

{% raw %}

```
<template>
  <div id="app">
      <ejs-grid> </ejs-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);
export default {
  data () {
    return {
    }
  }
}
</script>
```

{% endraw %}

## Defining Row Data

Data for the Grid component is bind by using [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property and value is defined in the vue component.
It accepts either array of JavaScript object or **DataManager** instance.

```
<template>
    <div id="app">
        <ejs-grid :dataSource="data"> </ejs-grid>
    </div>
</template>

<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";

Vue.use(GridPlugin);

export default {
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
  @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Defining Columns

The Grid has an option to define columns as directives. In these column directives, we have properties to customize columns.Let’s check the properties used here:

* We have added [`field`](../api/grid/column/#field) to map with a property name an array of JavaScript objects.
* We have added [headerText](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertext) to change the title of columns.
* We have used `textAlign` to change the alignment of columns.
By default, columns will be left aligned. To change columns to right align, we need to define [`textAlign`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#textalign) as **Right**.
* Also, we have used another useful property, [format](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#format).
Using this, we can format number and date values to standard or custom formats.
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
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/getting-started/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs1" %}

## Enable Sorting

The sorting feature enables the user to order the records.
It can be enabled by setting [`allowSorting`](../api/grid/#allowsorting) property as true. Also, need to inject the **Sort** module in the **provide** section as follow.
If we didn't inject the **Sort** module, then user not able to sort when click on headers. Sorting feature can be customized using [`sortSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/#sortsettings) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/getting-started/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs2" %}

## Enable Filtering

The filtering feature enables the user to view the reduced amount of records based on filter criteria.
It can be enabled by setting [`allowFiltering`](../api/grid/#allowfiltering) property as true.
Also, need to inject the **Filter** module in the **provide** section as follow.
If we didn't inject the **Filter** module, then filter bar will not be rendered in Grid.
Filtering feature can be customized using [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/#filtersettings) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/getting-started/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs3" %}

## Enable Grouping

The grouping feature enables users to view the Grid record in a grouped view.
It can be enabled by setting [`allowGrouping`](../api/grid/#allowgrouping) property to true.Also, need to inject the **Group** module in the **provide** section as follow.
If we didn't inject the **Group** module, then the group drop area will not be rendered in Grid. Grouping feature can be customized using [`groupSettings`](https://ej2.syncfusion.com/vue/documentation/api/grid/#groupsettings) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/getting-started/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs4" %}

## Enable Aggregate

The Aggregate feature enables users to view the aggregates of Grid records.
It can be enabled by configured through **e-aggregates** directive.
The **field** and **type** are the minimum properties required to represent an aggregate column.Also, need to inject the **Aggregate** module in the **provide** section as follow.
If we didn't inject the **Aggregate** module, then the footer table will not be rendered in Grid. Check [`aggregate`](./aggregates) to know more about its configuration.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/getting-started/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs5" %}

## Run the application

The Vue Grid application is configured to compile and run the application in a browser. Use the following command to run the application.

```bash
npm run dev
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/getting-started/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/getting-started/default-cs6" %}

> You can refer to our [Vue Grid]( https://www.syncfusion.com/vue-ui-components/vue-grid) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Grid example]( https://ej2.syncfusion.com/vue/demos/#/material/grid/grid-overview.html) that shows how to render the Grid in Vue.

## See Also

* [Testing the Vue Grid](https://www.syncfusion.com/forums/140772/testing-the-vue-grid)
* [Switching themes programmatically in Vue Grid](https://www.syncfusion.com/forums/145386/switching-themes-programmatically-in-vue-grid)