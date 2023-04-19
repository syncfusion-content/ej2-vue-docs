---
layout: post
title: Getting started with Vue Pivotview component | Syncfusion
description:  Checkout and learn about Getting started with Vue Pivotview component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a simple pivot table and demonstrate the basic usage of the [pivot table](https://www.syncfusion.com/vue-ui-components/vue-pivot-table) component in a Vue environment.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The following list of dependencies are required to use the pivot table component in your application.

```javascript
|-- @syncfusion/ej2-vue-pivotview
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-excel-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-pdf-export
        |-- @syncfusion/ej2-file-utils
        |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
```

## Setup Vue Environment

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your vue applications.
To install Vue CLI use the following commands.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

## Create a Vue Application

Start a new Vue application using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install
```

## Adding Syncfusion pivot table package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry.

To install pivot table component, use the following command.

```bash
npm install @syncfusion/ej2-vue-pivotview --save
```

> The **--save** will instruct NPM to include the pivot table package inside the `dependencies` section of the `package.json`.

## Registering pivot table Component

You can register the pivot table component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { PivotViewPlugin } from '@syncfusion/ej2-vue-pivotview';

Vue.use(PivotViewPlugin);
```

> Registering `PivotViewPlugin` in vue, will register the pivot table component along with its required child directives globally.

## Adding CSS Reference

The pivot table has different themes. They are:
* Material
* Fabric
* Bootstrap
* High Contrast

import pivot table component CSS as given below in `<style>` section of the `App.vue` file.

```
<style>
<!-- Material theme used for this sample -->
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>
```

## Browser compatibility

Polyfills are required to use the Pivot Table in Internet Explorer 11 browser. Refer the [documentation](https://ej2.syncfusion.com/vue/documentation/browser/?no-cache=1#browser-support) for more details.

## Adding pivot table component

Add the EJ2 Vue pivot table using `<ejs-pivotview>` to the `<template>` section of the `App.vue` file in src directory.
The properties of pivot table can be assigned in `<ejs-pivotview>` tag and that can be bounded under `data` section.

## Initializing pivot table component in an application

Add the EJ2 Vue pivot table using `<ejs-pivotview>` to the `<template>` section of the `App.vue` file in src directory.
The properties of pivot table can be assigned in `<ejs-pivotview>` tag and that can be bounded under `data` section.

```
<template>
    <div id="app">
        <ejs-pivotview> </ejs-pivotview>
    </div>
</template>

```

## Assigning sample data to the pivot table

The Pivot Table component further needs to be populated with an appropriate data source. For illustration purpose, a collection of objects mentioning the sales details of certain products over a period and region has been prepared. This sample data is assigned to the pivot table component through [`dataSource`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings).


```
<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: [
            {
                "balance": 2430.87,
                "quantity": 11,
                "name": "Skinner Ward",
                "gender": "male",
                "company": "GROK",
                "state": "New Jercy"
            },
            {
                "balance": 3192.7,
                "quantity": 15,
                "name": "Gwen Dixon",
                "gender": "female",
                "company": "ICOLOGY",
                "state": "Vetaikan"
            },
            {
                "balance": 1663.84,
                "quantity": 14,
                "name": "Deena Gillespie",
                "gender": "female",
                "company": "OVERPLEX",
                "state": "New Jercy"
            }
        ]
      }
    }
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>
```


## Adding fields to row, column, value and filter axes

Now that pivot table is initialized and assigned with sample data, will further move to showcase the component by organizing appropriate fields in row, column, value and filter axes.

In [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings), four major axes -  [`rows`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#rows), [`columns`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#columns), [`values`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#values) and [`filters`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#filters) plays a vital role in defining and organizing fields from the bound data source, to render the entire pivot table component in a desired format.

[`rows`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#rows) – Collection of fields that needs to be displayed in row axis of the pivot table.

[`columns`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#columns) – Collection of fields that needs to be displayed in column axis of the pivot table.

[`values`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#values) – Collection of fields that needs to be displayed as aggregated numeric values in the pivot table.

[`filters`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#filters) - Collection of fields that would act as master filter over the data bound in row, column and value axes of the pivot table.

In-order to define each field in the respective axis, the following basic properties should be set.

* [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#name): It allows to set the field name from the bound data source. It’s casing should match exactly like in the data source and if not set properly, the pivot table will not be rendered.
* [`caption`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#caption): It allows to set the field caption, which is the alias name of the field that needs to be displayed in the pivot table.
* [`type`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#type): It allows to set the summary type of the field. By default, **Sum** is applied.

In this illustration, "Year" and "Quarter" are added in column, "Country" and "Products" in row, and "Sold" and "Amount" in value section respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs88/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs88" %}

## Applying formatting to a value field

Formatting defines a way in which values should be displayed. For example, format **"C"** denotes the values should be displayed in currency pattern. To do so, define the [`formatSetting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings/) with its [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings/#name) and [`format`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings/#format) properties and add it to [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings/). In this illustration, the [`name`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings/#name) property is set as **Amount**, a field from value section and its format is set as currency. Likewise, we can set format for other value fields as well and add it to [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings/).

> Only fields from value section, which is in the form of numeric data values are applicable for formatting.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs89/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs89" %}

## Module injection

To create pivot table with additional features, inject the required modules. The modules that are available with basic functionality are as follows.

* `GroupingBar` - Inject this module to access grouping bar feature.
* `FieldList` - Inject this module to access pivot field list feature.
* `CalculatedField` - Inject this module to access calculated field feature.

Register the required array of modules under the key `pivotview` in the `provide` section within the `App.vue` file as shown below. On doing so, only the injected views will be loaded and displayed along with pivot table.

```
<script>
provide: {
        pivotview: [GroupingBar, FieldList, CalculatedField]
    }
</script>
```

## Enable Pivot Field List

The field list allows to add or remove fields and also rearrange the fields between different axes, including column, row, value, and filter along with filter and sort options dynamically at runtime. It can be enabled by setting the [`showFieldList`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#showfieldlist) property to **true**. To know more about field list, [`refer`](./field-list) here.

> If the `FieldList` module is not injected, the Field List will not be rendered with the pivot table component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs90/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs90" %}

## Enable Grouping Bar

The grouping bar feature automatically populates fields from the bound data source and allows end users to drag fields between different axes such as columns, rows, values, and filters, and alter pivot table at runtime. It also provides option to sort, filter and remove fields. It can be enabled by setting the [`showGroupingBar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#showgroupingbar) property to **true**. To know more about grouping bar, [`refer`](./grouping-bar) here.

> If the `GroupingBar` module is not injected, the grouping bar will not be rendered with the pivot table component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs91/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs91" %}

## Exploring Filter Axis

The filter axis contains collection of fields that would act as master filter over the data bound in row, column and value axes of the pivot table. The fields along with filter members could be set to filter axis either through report via code behind or by dragging and dropping fields from other axes to filter axis via grouping bar or field list at runtime.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs92/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs92" %}

## Calculated field

The calculated field feature allows user to insert or add a new calculated field based on the available fields from the bound data source using basic arithmetic operators. The calculated field can be included in pivot table using the [`calculatedFieldSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iCalculatedFieldSettings/) from code behind. Or else, calculated fields can be added at run time through the built-in dialog by just setting the [`allowCalculatedField`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#allowcalculatedfield) property to **true** in pivot table. You will see a button enabled in the Field List UI automatically to invoke the calculated field dialog and perform necessary operation. To know more about calculated field, [`refer`](./calculated-field) here.

> If the `CalculatedField` module is not injected, the calculated field popup will not be rendered with the pivot table component. Moreover calculated field is applicable only for value fields.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs93/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs93" %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```bash
npm run dev
```

Output will be displayed as follows.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs94/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs94" %}

> You can also explore our [Vue Pivot Table example](https://ej2.syncfusion.com/vue/demos/#/material/pivot-table/default) that shows how to rendering of the pivot table with drill-up and drill-down functionality bound to a relational report.