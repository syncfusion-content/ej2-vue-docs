---
layout: post
title: Getting started with Vue Pivotview component | Syncfusion
description:  Checkout and learn about Getting started with Vue Pivotview component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Pivotview Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Pivotview component

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> Vue development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/vue/documentation/ai-coding-assistant/overview)

To get started quickly with the Vue [Pivot Table](https://www.syncfusion.com/vue-components/vue-pivot-table), watch this video:

{% youtube "https://www.youtube.com/watch?v=P06XgGUwUFc" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

Understanding the dependency structure helps you identify the required packages for implementing the Pivot Table component effectively in your Vue application. The Pivot Table component relies on a structured hierarchy of dependencies that provide essential functionality for data processing, user interface elements, and export capabilities.

The following dependency tree shows the required packages for the Vue Pivot Table component:

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
     |-- @syncfusion/ej2-charts
        |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-grids
```

## Setting up the Vue 2 project

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

![Vue 2 project](../pivotview/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Pivotview component](https://www.syncfusion.com/vue-components/vue-pivot-table) as an example. Install the `@syncfusion/ej2-vue-pivotview` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-pivotview --save
```
or

```bash
yarn add @syncfusion/ej2-vue-pivotview
```

> The **--save** will instruct NPM to include the pivot table package inside the `dependencies` section of the `package.json`.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

The pivot table has different themes. They are:
* Material
* Fabric
* Bootstrap
* Tailwind3
* High Contrast

import pivot table component CSS as given below in `<style>` section of the `App.vue` file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the below steps to add the Vue Pivotview component:

1\. First, import and register the Pivotview component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
  import { PivotViewComponent, FieldList, GroupingBar, CalculatedField } from "@syncfusion/ej2-vue-pivotview";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";
export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Pivotview component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-pivotview> </ejs-pivotview>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

## Browser compatibility

Polyfills are required to use the Pivot Table in Internet Explorer 11 browser. Refer the [documentation](https://ej2.syncfusion.com/vue/documentation/browser/?no-cache=1#browser-support) for more details.

## Assigning sample data to the pivot table

To enable users to perform meaningful analysis and generate actionable insights, the Pivot Table component requires a well-structured data source. This data source contains the information you want to analyze and visualize.

For demonstration purposes, we'll use a collection of objects containing sales details for various products across different periods and regions. This sample data is assigned to the Pivot Table component through the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#datasource) property under the [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#datasourcesettings) configuration. For more details on relational data binding, refer [here](./data-binding).

Here’s the complete code to initialize the Pivot Table with sample data:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings"> </ejs-pivotview>
    </div>
</template>

<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";

export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
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
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css";
</style>

{% endhighlight %}
{% endtabs %}

## Adding fields to row, column, value and filter axes

Organizing fields into appropriate axes transforms raw data into a structured, meaningful Pivot Table that enables users to analyze patterns and trends effectively. With the Pivot Table now initialized and populated with sample data, the next logical step involves organizing the appropriate fields into row, column, value, and filter axes to create a functional data analysis tool.

In the [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#datasourcesettings) configuration, four primary axes play a crucial role in defining and organizing fields from the bound data source to render the Pivot Table component in the desired format.

**Understanding the four axes:**

- [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#rows) – Collection of fields that will be displayed along the row axis of the Pivot Table.
- [`columns`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#columns) – Collection of fields that will be displayed along the column axis of the Pivot Table.
- [`values`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#values) – Collection of fields that will be displayed as aggregated numeric values within the Pivot Table.
- [`filters`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions#filters) – Collection of fields that act as master filters over the data bound to the row, column, and value axes of the Pivot Table.

**Essential field properties:**

To define each field in its respective axis, configure the following basic properties:

* [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions#name): Sets the field name from the bound data source. The casing must match exactly as it appears in the data source, otherwise the Pivot Table will not render correctly.
* [`caption`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions#caption): Sets the field caption, which serves as the display name for the field in the Pivot Table.
* [`type`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions#type): Sets the summary type for the field. By default, the **Sum** aggregation is applied.

In this example, "Date" and "Product" are positioned in the column axis, "Country" and "State" are placed in the row axis, and "Sold" and "Quantity" are configured as values respectively.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs88/app-composition.vue %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs88/app.vue %}

{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs88" %}

## Applying formatting to a value field

Formatting enhances the readability and presentation of numerical data in a Pivot Table, making it more user-friendly and professional. For instance, you can display values with currency symbols or control the number of decimal places for better clarity.

To apply formatting to value fields in the Pivot Table, use the [`formatSetting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings) property. This property accepts an array of format objects, where each object defines formatting rules for a specific field in your data.

Within each format object in the [`formatSetting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings) array, set the [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#name) property to match the exact field name from your value section. Then, specify the desired display format using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#format) property. In the example below, the **Amount** field is configured to display values in currency format using the "C0" pattern, which shows currency symbols without decimal places.

> **Note:** Formatting can only be applied to numeric fields in the value section of the Pivot Table.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs89/app-composition.vue %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs89/app.vue %}

{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs89" %}

This approach allows you to apply different formatting patterns to multiple value fields by adding additional objects to the [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings) array. Each object in the array can target a different field, providing complete control over how numerical data is displayed in the Pivot Table.

## Module injection

Module injection enhances the Pivot Table by enabling additional functionality through specialized modules. To incorporate specific features into your Pivot Table, inject the required modules into your Vue application.

The following modules are available to extend the basic Pivot Table functionality:

* `GroupingBar` - Inject this module to enable the grouping bar, which allows users to drag and drop fields between different axes of the Pivot Table.
* `FieldList` - Inject this module to enable the field list, providing an interactive interface for users to add, remove, and rearrange fields dynamically.
* `CalculatedField` - Inject this module to enable calculated fields, allowing users to create custom formulas and expressions for data analysis.

Register the required array of modules under the key `pivotview` in the `provide` section within the `App.vue` file as shown below. On doing so, only the injected views will be loaded and displayed along with pivot table.

```
<script>
provide: {
        pivotview: [GroupingBar, FieldList, CalculatedField]
    }
</script>
```

> **Note:** Only inject the modules that you plan to use in your application. This approach helps maintain optimal bundle size and application performance.

## Enable Pivot Field List

The field list enhances user interaction by allowing you to dynamically add, remove, and rearrange fields across different axes **including column, row, value, and filter axes**. This user-friendly interface also provides sorting and filtering options that can be applied at runtime without requiring code changes.

To enable the field list, set the [`showFieldList`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/pivotViewModel#showfieldlist) property to **true** and inject the `FieldList` module into your component. This combination activates the field list interface, making it accessible to users to modify PivotTable report settings. For comprehensive details about field list functionality, [`refer`](./field-list) to the dedicated field list documentation.

> The `FieldList` module must be injected for the field list to render properly with the Pivot Table component. Without this module, the field list will not be available.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs90/app-composition.vue %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs90/app.vue %}

{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs90" %}

## Enable Grouping Bar

The grouping bar allows users to easily manage and modify the report settings of the Pivot Table directly through the user interface. With the grouping bar, users can instantly move fields between columns, rows, values, and filters by dragging them, allowing for quick arrangement and analysis of the data.

Users can also use the grouping bar to sort, filter, or remove fields quickly without needing to write any code. To enable the grouping bar, set the [`showGroupingBar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/pivotViewModel#showgroupingbar) property to **true**, and make sure to inject the `GroupingBar` module in your application. For more details about using the grouping bar, see the [Grouping Bar documentation](./grouping-bar).

> The `GroupingBar` module must be injected for the grouping bar to render properly with the Pivot Table component. Without this module, the grouping bar will not be available.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs91/app-composition.vue %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs91/app.vue %}

{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs91" %}

## Exploring Filter Axis

The filter axis helps users display only the most relevant information in the Pivot Table for easier analysis. Users can add fields to the filter axis, which act as a master filter over the data displayed in the [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#rows), [`columns`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#columns), and [`values`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#values) axes. You can set these fields and their filter items in two ways: by configuring them in your [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings) through code, or by simply dragging and dropping fields from other axes to the filter axis using the grouping bar or the field list at runtime. This makes it easier to analyze targeted subsets of data without modifying the underlying structure of the Pivot Table.

The following example shows how to add fields to the filter axis in a Vue Pivot Table:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs92/app-composition.vue %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs92/app.vue %}

{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs92" %}

## Calculated field

The calculated field feature enables users to create custom value fields using mathematical formulas and existing fields from their data source. Users can perform complex calculations with basic arithmetic operators and seamlessly integrate these custom fields into their pivot table for enhanced data visualization and reporting.

Users can add calculated fields in two ways:
- **Using code:** Set up calculated fields through the [`calculatedFieldSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iCalculatedFieldSettings) property when configuring the Pivot Table.
- **Using the user interface:** Alternatively, calculated fields can be added at runtime through a built-in dialog by setting the [`allowCalculatedField`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowcalculatedfield) property to **true** and by injecting the **CalculatedField** module. When enabled, a button appears in the Field List UI. Clicking this button opens a dialog that allows users to create, edit, or remove calculated fields at runtime. To learn more about calculated fields, [`refer`](./calculated-field) here.

> To use the calculated field dialog, make sure the **CalculatedField** module is injected. If it is not injected, the popup dialog will not be shown with the Pivot Table.

> By default, calculated fields created through code-behind are only added to the field list and calculated field dialog UI. To display a calculated field in the Pivot Table UI, you must add it to the [`values`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#values) property, as shown in the code below. Additionally, calculated fields can only be added to the value axis.

Below is a sample code that shows how to set up calculated fields both through code-behind and using the popup dialog:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs93/app-composition.vue %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs93/app.vue %}

{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs93" %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

```bash
npm run serve
```
or
```bash
yarn run serve
```

Output will be displayed as follows.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs94/app-composition.vue %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

{% include code-snippet/pivot-grid/default-cs94/app.vue %}

{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs94" %}

For more information and to access the quick start project, visit: [GitHub Repository](https://github.com/SyncfusionExamples/getting-started-with-the-vue2-pivot-table-component)

> You can also explore our [Vue Pivot Table example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/pivot-table/default.html) that shows how to rendering of the pivot table with drill-up and drill-down functionality bound to a relational report.
