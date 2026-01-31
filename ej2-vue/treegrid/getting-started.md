---
layout: post
title: Getting started with Vue TreeGrid component | Syncfusion
description:  Checkout and learn about Getting started with Vue TreeGrid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue TreeGrid component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org) and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue TreeGrid component

To get started quickly with Vue tree grid, check out this video:
{% youtube "https://www.youtube.com/watch?v=FEMyOHKjjao" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, execute the [vue create](https://cli.vuejs.org#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

When creating a new project, select the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages

Syncfusion<sup style="font-size:70%">&reg;</sup> packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue TreeGrid component](https://www.syncfusion.com/vue-components/vue-tree-grid) as an example. Install the `@syncfusion/ej2-vue-treegrid` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-treegrid --save
```
or

```bash
yarn add @syncfusion/ej2-vue-treegrid
```

> The **--save** flag instructs NPM to include the TreeGrid package inside of the `dependencies` section of the `package.json` file.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component can be imported in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a Vue project.

The TreeGrid component supports the following built-in themes:
* Material
* Fabric
* Bootstrap
* High Contrast

The following CSS imports are required for the TreeGrid component and its dependencies to render correctly. Import these styles into the `<style>` section of the `App.vue` file. The Material theme is used in this example.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

Follow the steps below to add the Vue TreeGrid component:

1\. First, import and register the Treegrid component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
export default {
name: "App",
components: {
    'ejs-treegrid': TreeGridComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Treegrid component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
      <ejs-treegrid></ejs-treegrid>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

## Defining Row Data

Row data for the TreeGrid component is bound by using the `dataSource` property. The value can be defined as an array of JavaScript objects or a [DataManager](./data-binding) instance. The following example demonstrates hierarchical data binding, where child records are stored in a property specified by the `childMapping` property.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-treegrid :dataSource="data" childMapping="subtasks" :treeColumnIndex="1"></ejs-treegrid>
    </div>
</template>

<script>
import { TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";

let dataSource = [
        {
            taskID: 1,
            taskName: 'Planning',
            startDate: new Date('02/03/2017'),
            endDate: new Date('02/07/2017'),
            progress: 100,
            duration: 5,
            priority: 'Normal',
            approved: false,
            subtasks: [
                { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
                { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
                { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
                { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
            ]
        },
        {
            taskID: 6,
            taskName: 'Design',
            startDate: new Date('02/10/2017'),
            endDate: new Date('02/14/2017'),
            duration: 3,
            progress: 86,
            priority: 'High',
            approved: false,
            subtasks: [
                { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
                { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
                { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
                { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
                { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
            ]
        }];

export default {
name: "App",
components: {
    'ejs-treegrid': TreeGridComponent
  },
  data () {
    return {
      data: dataSource
    }
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-vue-treegrid/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

## Defining Columns

The TreeGrid component can display data using columns. Columns are defined using the `ColumnsDirective` and `ColumnDirective` components. Each column requires a `field` property that maps to a property in the data source.

The following properties are commonly used to customize columns:

* **field**: Specifies the data property from the datasource to display in this column. For example, `field='taskName'` displays the taskName property from each record.
* **headerText**: Defines the column title displayed in the column header. For example, `headerText='Task Name'` shows "Task Name" as the column header.
* **textAlign**: Controls text positioning within the column. Set to `Right` for numbers and dates, `Left` for text. By default, columns are left-aligned.
* **format**: Converts date and number objects to readable strings. For example, `format='yMd'` converts dates to Year/Month/Day format.
* **width**: Sets the column width in pixels. For example, `width=70` sets the column to 70 pixels wide.

The **Tree Column** (the column where expand/collapse arrows appear) is specified using the `treeColumnIndex` property. This property accepts a column index value (starting from 0). For example, `treeColumnIndex='1'` makes the second column the tree column where the hierarchy is displayed.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<ejs-treegrid :dataSource='data' :treeColumnIndex='1' childMapping='subtasks'>
  <e-columns>
      <e-column field='taskID' headerText='Task ID' textAlign='Right' width=70></e-column>
      <e-column field='taskName' headerText='Task Name' textAlign='Left' width=200></e-column>
      <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
      <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
  </e-columns>
</ejs-treegrid>

{% endhighlight %}
{% endtabs %}

The example above demonstrates hierarchical data binding using [`childMapping`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#childmapping). This property specifies which data field contains child records (in this case, 'subtasks'). 

There is also alternative data binding approach available which is self-referencing data. Use [`idMapping`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#idmapping) to specify the unique identifier field for each record, and [`parentIdMapping`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#parentidmapping) to specify the field containing the parent record's ID. This approach is useful when parent and child records are in a flat structure rather than nested.

## Module injection

The TreeGrid component features can be extended by injecting required modules. The following modules are commonly used to extend TreeGrid functionality:

* `Page`- Inject this module to use paging feature.
* `Sort` - Inject this module to use sorting feature.
* `Filter` - Inject this module to use filtering feature.
* `ExcelExport` - Inject this module to use Excel export feature.
* `PdfExport` - Inject this module to use PDF export feature.

To inject modules, import them and register them in the `provide` section of the Vue component:

```javascript
import { TreeGridComponent, Page, Sort, Filter } from '@syncfusion/ej2-vue-treegrid';

export default {
  provide: {
    treegrid: [Page, Sort, Filter]
  }
}
```
Additional feature modules are available in the [module documentation](./module).

## Enable Paging

Paging divides TreeGrid records into separate pages, improving performance and providing a cleaner user interface for large datasets. Paging is enabled by setting the [`allowPaging`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#allowpaging) property to `true`. Additionally, the `Page` module must be injected in the `provide` section for paging to function.

The paging behavior can be customized using the [`pageSettings`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettings) property. In root-level paging mode, paging is based only on root-level rows and ignores child record counts. This mode is enabled by setting the [`pageSettings.pageSizeMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettingsModel#pagesizemode) property.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/getting-started/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs1" %}

## Enable Sorting

Sorting allows records to be ordered by column values in ascending or descending order. Sorting is enabled by setting the `allowSorting` property to `true`. The `Sort` module must be injected in the `provide` section to enable this feature.

The sorting behavior can be customized using the `sortSettings` property, which allows configuration of default sort columns and sort direction.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/getting-started/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs2" %}

## Enable Filtering

Filtering enables the display of a reduced set of records based on filter criteria. Filtering is enabled by setting the [`allowFiltering`](../api/treegrid#allowfiltering) property to `true`. The `Filter` module must be injected in the `provide` section for this feature to function. If `Filter` module is not injected, filtering functionality will not work in TreeGrid

By default, filtered records are displayed along with their parent records, maintaining the hierarchy. This behavior can be changed using the `filterSettings.hierarchyMode` property to show only filtered records without parents.

The filtering behavior can be customized using the [`filterSettings-hierarchyMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterSettings#hierarchymode) property.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/getting-started/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs3" %}

## Run the application

The Vue TreeGrid application is configured to compile and run the application in a browser. Execute the following command to run the application:

```bash
npm run dev
```

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/getting-started/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs4" %}

## Handling errors

Error handling in TreeGrid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/vue/documentation/api/treegrid#actionfailure) event. When configuring the TreeGrid or enabling specific features through its API, mistakes can occur. The `actionFailure` event can be used to manage these errors. This event triggers when such mistakes happen. The `actionFailure` event handles various scenarios, including:

* For CRUD operations, row drag and drop, and persisting the selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#isprimarykey) property is mapped to a unique data column. Failure to do so will cause an error.
* [Paging](https://ej2.syncfusion.com/vue/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/vue/documentation/treegrid/virtual-scroll). Enabling `paging` with `virtualization` will result in an error.
* To render the TreeGrid, map either the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/treegrid#datasource) or [columns](https://ej2.syncfusion.com/vue/documentation/api/treegrid#columns) property. Failure to do so will result in an error.
* Freeze columns by mapping either [isFrozen](https://ej2.syncfusion.com/vue/documentation/api/treegrid/treeGridColumnModel#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/vue/documentation/api/treegrid#frozencolumns). Enabling both properties simultaneously will result in an error.
* The [detailTemplate](https://ej2.syncfusion.com/vue/documentation/api/treegrid#detailtemplate) is not supported with `virtualization` and `stacked header`. Enabling them with these features will result in an error.
* The [frozenRows](https://ej2.syncfusion.com/vue/documentation/api/treegrid#frozenrows) and `frozenColumns` are not supported with [rowTemplate](https://ej2.syncfusion.com/vue/documentation/api/treegrid#rowtemplate), `detailTemplate`, and [cell editing](https://ej2.syncfusion.com/vue/documentation/treegrid/editing/cell-editing). Enabling them with these features will result in an error.
* In `stacked header`, the [freeze](https://ej2.syncfusion.com/vue/documentation/api/treegrid/treeGridColumnModel#freeze) direction is incompatible with [column reordering](https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-reorder).
* [Selection](https://ej2.syncfusion.com/vue/documentation/treegrid/selection/selection) functionality is not supported when using `rowTemplate`. Enabling both properties simultaneously will result in an error.
* Set the [treeColumnIndex](https://ej2.syncfusion.com/vue/documentation/api/treegrid#treecolumnindex) value to display the hierarchy. Make sure the value does not exceed the total column count, or it will result in an error.
* For `virtualization`, do not specify height and width in percentages. Using percentages will result in an error.
* When using the default filter ([filterbar](https://ej2.syncfusion.com/vue/documentation/treegrid/filtering/filter-bar)) type, do not apply other [filterType](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterType) values to columns within the same tree grid, as this will result in an error.
* In TreeGrid, avoid enabling [idMapping](https://ej2.syncfusion.com/vue/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/vue/documentation/api/treegrid#childmapping) simultaneously. Enabling both properties at the same time will result in an error.
* The [showCheckbox](https://ej2.syncfusion.com/vue/documentation/api/treegrid/treeGridColumnModel#showcheckbox) column should only be defined in the tree column. Defining it elsewhere will result in an error.
* The [textAlign](https://ej2.syncfusion.com/vue/documentation/api/treegrid/treeGridColumnModel#textalign) right is not applicable for tree columns in the TreeGrid. Enabling right alignment for tree columns will result in an error.

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/vue/documentation/api/treegrid#actionfailure) event in the TreeGrid control to display an exception when `isPrimaryKey` is not configured properly in the TreeGrid.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/getting-started/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs5" %}

## See Also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
