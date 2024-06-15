---
layout: post
title: Getting started with Vue Treegrid component | Syncfusion
description:  Checkout and learn about Getting started with Vue Treegrid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Treegrid Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Treegrid component

To get start quickly with Vue tree grid, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=FEMyOHKjjao" %}

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

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

![Vue 2 project](images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Treegrid component](https://www.syncfusion.com/vue-components/vue-tree-grid) as an example. Install the `@syncfusion/ej2-vue-treegrid` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-treegrid --save
```
or

```bash
yarn add @syncfusion/ej2-vue-treegrid
```

> The **--save** will instruct NPM to include the TreeGrid package inside of the `dependencies` section of the `package.json`.

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

The TreeGrid has different themes. They are:
* Material
* Fabric
* Bootstrap
* High Contrast

import components CSS as given below in `<style>` section of the `App.vue` file.

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

## Add Syncfusion Vue component

Follow the below steps to add the Vue Treegrid component:

1\. First, import and register the Treegrid component in the `script` section of the **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<script setup>
import { TreeGridComponent as EjsTreegrid } from "@syncfusion/ej2-vue-treegrid";

</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

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

Data for the TreeGrid component is bind by using the `dataSource` property and value is defined in the Vue component.
It accepts either an array of JavaScript object or [DataManager](./data-binding) instance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <ejs-treegrid :dataSource="data" childMapping="subtasks" :treeColumnIndex="1"> </ejs-treegrid>
    </div>
</template>

<script setup>
import { TreeGridComponent as EjsTreegrid } from "@syncfusion/ej2-vue-treegrid";

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

const data = dataSource;
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-vue-treegrid/styles/material.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}

<template>
    <div id="app">
        <ejs-treegrid :dataSource="data" childMapping="subtasks" :treeColumnIndex="1"> </ejs-treegrid>
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
      data: dataSource;
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

The TreeGrid has an option to define the columns as an array. In these columns, the following properties are used to customize the columns.

* The `field` has been added to map with a property name in an array of JavaScript objects.
* The `headerText` has been added to change the title of columns.
* The `textAlign` has been used to change the alignment of columns. By default, columns will be left aligned. To change the columns to right align, define the `textAlign` to `Right`.
* Also, the another useful property, `format` has been used. Using this, you can format number and date values to standard or custom formats. Here it is defined for the conversion of date objects to formatted strings.

Tree Column is used to expand or collapse child rows is defined by using the [`treeColumnIndex`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#treecolumnindex) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

In the above code example, we represent the hierarchical data binding in which [`chilMapping`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#chilmapping)  property denotes the hierarchy relationship; whereas in self-referencing data binding [`idMapping`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#idmapping)  and [`parentIdMapping`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#parentidmapping) denotes the hierarchy relationship.

## Module injection

To create TreeGrid with additional features, inject the required modules. The following modules are used to extend TreeGrid's basic functionality.

* `Page`- Inject this module to use paging feature.
* `Sort` - Inject this module to use sorting feature.
* `Filter` - Inject this module to use filtering feature.
* `ExcelExport` - Inject this module to use Excel export feature.
* `PdfExport` - Inject this module to use PDF export feature.

Register the required array of modules under the key `treegrid` in the `provide` section.

> Additional feature modules are available [here](./module)

## Enable Paging

The paging feature enables users to view the TreeGrid record in a paged view. It can be enabled by setting the  [`allowPaging`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowpaging) property to true. Also, need to inject the `Page` module in the `provide` section as follows. If the `Page` module is not injected, the pager will not be rendered in the TreeGrid. The pager can be customized using the [`pageSettings`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettings) property.

In root-level paging mode, paging is based on the root-level rows only i.e., it ignores the child rows count and it can be enabled by using the [`pageSettings.pageSizeMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/pageSettingsModel/#pagesizemode) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs1" %}

## Enable Sorting

The sorting feature enables the user to order the records. It can be enabled by setting [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowsorting) property to true. Also, need to inject the `Sort` module in the `provide` section as follow.
If we didn't inject the `Sort` module, then user not able to sort when click on headers. Sorting feature can be customized using [`sortSettings`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/sortSettings) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs2" %}

## Enable Filtering

The filtering feature enables you to view the reduced amount of records based on the filter criteria. It can be enabled by setting the [`allowFiltering`](../api/treegrid/#allowfiltering) property to true.  Also, need to inject the `Filter` module in the `provide` section as follow. If `Filter` module is not injected, filter bar will not be rendered in TreeGrid. Filtering feature can be customized using the [`filterSettings`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#filterSettings) property.

By default, filtered records are shown along with its parent records. This behavior can be changed by using the [`filterSettings-hierarchyMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterSettings/#hierarchymode) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs3" %}

## Run the application

The Vue TreeGrid application is configured to compile and run the application in a browser. Use the following command to run the application.

```bash
npm run dev
```

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs4" %}

## Handling errors

Error handling in Tree Grid identifies exceptions and notifies them through the [actionFailure](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#actionfailure) event. When configuring the Tree Grid or enabling specific features through its API, mistakes can occur. The `actionFailure` event can be used to manage these errors. This event triggers when such mistakes happen. The `actionFailure` event handles various scenarios, including:

* For CRUD operations, row drag and drop, and persisiting the selection, ensure the [isPrimaryKey](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#isprimarykey) property is mapped to a unique data column. Failure to do so will cause an error.
* [Paging](https://ej2.syncfusion.com/vue/documentation/treegrid/paging) is not supported with [virtualization](https://ej2.syncfusion.com/vue/documentation/treegrid/virtual-scroll). Enabling `paging` with `virtualization` will result in an error.
* To render the Tree Grid, map either the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#datasource) or [columns](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#columns) property. Failure to do so will result in an error.
* Freeze columns by mapping either [isFrozen](https://helpej2.syncfusion.com/vue/documentation/api/treegrid/treeGridColumnModel/#isfrozen) or [frozenColumns](https://ej2.syncfusion.com/vue/documentation/api/treegrid#frozencolumns). Enabling both properties simultaneously will result in an error.
* The [detailTemplate](https://ej2.syncfusion.com/vue/documentation/api/treegrid#detailtemplate) is not supported with `virtualization` and `stacked header`. Enabling them with these features will result in an error.
* The [frozenRows](https://ej2.syncfusion.com/vue/documentation/api/treegrid#frozenrows) and `frozenColumns` are not supported with [rowtemplate](https://ej2.syncfusion.com/vue/documentation/api/treegrid#rowtemplate), `detailTemplate`, and [cell editing](https://ej2.syncfusion.com/vue/documentation/treegrid/editing/cell-editing). Enabling them with these features will result in an error.
* In `stacked header`, the [freeze](https://ej2.syncfusion.com/vue/documentation/api/treegrid/columnDirective/#freeze) direction is incompatible with [column reordering](https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-reorder).
* [Selection](https://ej2.syncfusion.com/vue/documentation/treegrid/selection/selection) functionality is not supported when using `rowTemplate`. Enabling both properties simultaneously will result in an error.
* Set the [treeColumnIndex](https://ej2.syncfusion.com/vue/documentation/api/treegrid#treecolumnindex) value to display the tree structure. Make sure the value does not exceed the total column count, or it will result in an error.
* For `virtualization`, do not specify height and width in percentages. Using percentages will result in an error.
* When using the default filter ([filterbar](https://ej2.syncfusion.com/vue/documentation/treegrid/filtering/filter-bar)) type, do not apply the other [filterType](https://ej2.syncfusion.com/vue/documentation/api/treegrid/filterType/) to columns  within the same tree grid, as this will result in an error.
* In Tree Grid, avoid enabling [idMapping](https://ej2.syncfusion.com/vue/documentation/api/treegrid#idmapping) and [childMapping](https://ej2.syncfusion.com/vue/documentation/api/treegrid#childmapping) simultaneously. Enabling both properties at the same time will result in an error.
* The [showCheckbox](https://ej2.syncfusion.com/vue/documentation/api/treegrid/treeGridColumnModel/#showcheckbox) column should only be defined in the tree column. Defining it elsewhere will result in an error.
* The [textAlign](https://ej2.syncfusion.com/vue/documentation/api/treegrid/treeGridColumnModel/#textalign) right is not applicable for tree columns in the Tree Grid. Enabling right alignment for tree columns will result in an error.

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#actionfailure) event in the Tree Grid control to display an exception when `isPrimaryKey`are not configured properly in the Tree Grid.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/treegrid/getting-started/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/getting-started/default-cs5" %}

## See Also

* [Getting Started with Syncfusion JavaScript documentation](https://ej2.syncfusion.com/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion JavaScript (ES5) documentation](https://ej2.syncfusion.com/javascript/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion Angular documentation](https://ej2.syncfusion.com/angular/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion React documentation](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started)
* [Getting Started with Syncfusion ASP.NET Core documentation](https://ej2.syncfusion.com/aspnetcore/documentation/tree-grid/getting-started-core)
* [Getting Started with Syncfusion ASP.NET MVC documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/tree-grid/getting-started-mvc)
* [Getting Started with Syncfusion Blazor documentation](https://blazor.syncfusion.com/documentation/treegrid/getting-started-webapp)
