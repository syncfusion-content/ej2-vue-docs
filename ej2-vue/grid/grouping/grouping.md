---
layout: post
title: Vue Grid - Grouping | Syncfusion
description: Vue Grid grouping enables configurable settings, initial grouping, aggregates, drop-area control, reorderable columns, and expand/collapse.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Grid component

The grouping feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid enables data to be organized into a hierarchical structure, allowing records to be expanded and collapsed for improved readability and analysis.

The grouping feature is enabled by importing the `Group` module from `@syncfusion/ej2-vue-grids` and injecting it in the `provide` section.

To enable grouping, set the [allowGrouping](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#allowgrouping) property to `true`. When grouping is enabled, column headers can be dragged into the group drop area to organize data.

The [groupSettings](https://ej2.syncfusion.com/vue/documentation/api/grid/groupsettings) property provides options to customize grouping behavior, such as:

- Showing or hiding the group drop area.
- Controlling the display of grouped columns.
- Defining custom caption templates for grouped rows.

To get started quickly with Grouping options, check this video:

{% youtube "https://www.youtube.com/watch?v=SGpR92dMHnw" %}


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs2" %}

> * Columns in the Grid can be grouped and ungrouped using the [groupColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/group#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/group#ungroupcolumn) methods, respectively.
> * To disable grouping for a specific column, set the [columns.allowGrouping](https://ej2.syncfusion.com/vue/documentation/api/grid/column#allowgrouping) to `false`.

## Initial group

Initial grouping in the grid is configured by assigning an array of column field names to the [groupSettings.columns](https://ej2.syncfusion.com/vue/documentation/api/grid/groupsettings#columns) property. This approach is effective for organizing large datasets based on predefined criteria.

The example below demonstrates grouping by "Customer ID" and "Ship City", rendering the grid with data structured in a two-level hierarchy first by "Customer ID", followed by "Ship City" within each group.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs3" %}

> To group multiple columns, specify an array of column names in the `groupSettings.columns` property.

## Prevent grouping for specific columns

Columns that contain unique identifiers or sensitive information may not be suitable for grouping. In such cases, grouping can be disabled by setting the [allowGrouping](https://ej2.syncfusion.com/vue/documentation/api/grid/column#allowgrouping) property to `false` in the column configuration, preventing the column header from being placed in the group drop area.

The following example prevents grouping on the "Customer ID" column. While other columns can be grouped, "Customer ID" cannot be dragged to the group drop area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/prevent-group/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/prevent-group/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/prevent-group" %}

## Hide drop area

By default, the Grid shows a drop area container where column headers can be dragged to configure grouping or ungrouping. In scenarios where grouping through the drag-and-drop interface is not required, this drop area can be hidden.

To disable the group drop area container, set the [groupSettings.showDropArea](https://ej2.syncfusion.com/vue/documentation/api/grid/groupsettings#showdroparea) property to `false`. This hides the drop area from the UI, while still allowing grouping to be managed programmatically using the Grid `groupColumn` and `ungroupColumn` methods if needed.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) component is added to hide or show the drop area. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch/index-default#change) event is triggered and the `groupSettings.showDropArea` property of the grid is updated accordingly.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs4" %}

> By default, the group drop area will be shown only if there is at least one column available to group.

## Show the grouped column

By default, when a column is grouped in the Grid, that column is hidden from the display. This keeps the layout clean and makes grouped rows easier to read. To keep grouped columns visible, set the [groupSettings.showGroupedColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/groupsettings#showgroupedcolumn) property to `true`.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) component is added to hide or show the grouped columns. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch#change) event is triggered and the `groupSettings.showGroupedColumn` property of the grid is updated accordingly. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/show-grouped-column/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/show-grouped-column/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/show-grouped-column" %}

## Reordering on grouped columns 

By default, grouped columns follow the order in which they are added to the group drop area. Because grouping order determines the hierarchy of data organization, modifying this order can present different structural views. For example, grouping by "Region" before "Sales Person" produces a different arrangement than the reverse.

To allow reordering, set [groupSettings.allowReordering](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings#allowReordering) to `true`. This enables drag-and-drop rearrangement of grouped column badges, and the grid dynamically updates the data hierarchy to reflect the new order. This is demonstrated in the sample below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs9" %}

## Sort grouped columns in descending order during initial grouping

Grouped columns are sorted in ascending order by default (A-Z, 0-9, oldest to newest). To display grouped values in descending order such as showing the most recent dates or highest values first (Z-A, 9-0, newest to oldest) configure the [sortSettings.columns](https://ej2.syncfusion.com/vue/documentation/api/grid/sortsettings#columns) property with the appropriate [field](https://ej2.syncfusion.com/vue/documentation/api/grid/sortdescriptormodel#field) and set its [direction](https://ej2.syncfusion.com/vue/documentation/api/grid/sortdescriptormodel#direction-string) to `Descending`.

The following example demonstrates sorting the "CustomerID" column by configuring the `sortSettings.columns` property to `Descending` during the initial grouping of the Grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs8" %}

## Group with paging

The Grid component supports column grouping in combination with paging. When grouping is enabled, aggregated values and item counts are calculated based on the current page by default. As a result, group footers and caption summaries reflect only the visible page data. To include aggregate values and total item counts across all pages, set the [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/vue/documentation/api/grid/groupsettings#disablePageWiseAggregates) property to `false`.

> When using remote data binding, enabling this option triggers two separate requests during grouping one to retrieve grouped data and another to fetch aggregate values and total item counts.

## Group by format

By default, grouping is based on the raw data values of each row. For numeric or datetime columns, grouping can also be performed using a specified format for example, grouping dates by month or numbers by range. To enable this behavior, set the [enableGroupByFormat](https://ej2.syncfusion.com/vue/documentation/api/grid/column#enablegroupbyformat) property on the corresponding column. This allows the grid to group values based on their specific format.

The following example demonstrates grouping the "Order Date" and "Freight" columns using formatted values. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs5" %}

> Numeric columns can be grouped based on formats such as currency or percentage, while datetime columns can be grouped based on specific date or time formats.

## Show grouped rows based on page size

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid, controlling the number of grouped rows per page is useful when working with grouped data and a fixed page size.

By default, the [pageSize](https://ej2.syncfusion.com/vue/documentation/api/grid/pagesettings#pagesize) setting applies to individual grid rows, not grouped rows. To show grouped column rows based on the `pageSize`, a custom implementation can be used.

This can be achieved by customizing the `generateQuery` method of the "Data prototype", allowing the query logic to be modified for grouped row pagination. This can be achieved in the below example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs12" %}

## Collapse all grouped rows at initial rendering

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid provides the ability to expand or collapse grouped rows, enabling better control over data visibility. This is especially useful for large datasets where an initial summarized view is preferred.

To collapse all grouped rows on initial render, use the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#databound) event in combination with the [collapseAll](https://ej2.syncfusion.com/vue/documentation/api/grid/group#collapseall) method. This can be achieved in the below example.

The following example demonstrates collapsing all grouped rows during the initial rendering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs10" %}

> All grouped rows can also be collapsed at the initial rendering using the [groupCollapseAll](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#groupcollapseall) method within the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#groupcollapseall) event. The following code snippet demonstrates this approach:

```typescript
    dataBound() {
        if (this.initial === true) {
            this.$refs.grid.ej2Instances.groupCollapseAll();
            this.initial = false;
        }
    }
```
> The collapse all approach is recommended for a limited number of records since collapsing every grouped record requires time. For large datasets, [lazy-load grouping](https://ej2.syncfusion.com/vue/documentation/grid/grouping/lazy-load-grouping) is recommended to optimize performance. This approach is also applicable to the [groupExpandAll](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#groupexpandall) method.

## Group or ungroup column externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid supports both interactive and programmatic approaches to column grouping. Columns can be grouped manually via drag-and-drop or programmatically using the [groupColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#ungroupcolumn) methods.

The following example demonstrates grouping and ungrouping columns in a Grid. It utilizes the [DropDownList](https://ej2.syncfusion.com/vue/documentation/drop-down-list/getting-started) component to select the column. When an external button is clicked, the `groupColumn` and `ungroupColumn` methods are called to group or ungroup the selected column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/external-group/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/external-group/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/external-group" %}

## Expand or collapse externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid supports external control of grouped row visibility through programmatic expand and collapse. This functionality can be integrated using the grid's methods to manage grouped data display dynamically.

### Expand or collapse all grouped rows

Grid provides an ability to expand or collapse grouped rows using [groupExpandAll](https://ej2.syncfusion.com/vue/documentation/api/grid#groupexpandall) and [groupCollapseAll](https://ej2.syncfusion.com/vue/documentation/api/grid#groupcollapseall) methods respectively.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) component is added to expand or collapse grouped rows. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch#change) event is triggered and the `groupExpandAll` and `groupCollapseAll` methods are called to expand or collapse grouped rows.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/group-expand-collapse/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/group-expand-collapse/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/group-expand-collapse" %}

### Expand or collapse selected grouped row

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid allows programmatic expand or collapse of specific grouped rows through the [expandCollapseRows](https://ej2.syncfusion.com/vue/documentation/api/grid/group#expandcollapserows) method, which toggles the state of a targeted group caption row based on its current visibility.

To implement this functionality, follow these steps:

- Capture the grouped row index via an input field.
- Use a button to trigger a method.
- Retrieve grouped rows using `querySelectorAll` method.
- Identify the target group caption element by index.
- Call `expandCollapseRows` to toggle its state.

The example below demonstrates collapsing a selected grouped row using an external button.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="display: inline-block;">
      <ejs-numerictextbox ref='textbox' id='textbox' floatLabelType="Auto" format="##"  width='240px' 
      placeholder="Enter Grouped Row Index" ></ejs-numerictextbox>
      <ejs-button ref='button' cssClass='e-outline' v-on:click="onExpandCollapseButtonClick" style='margin-top:25px; margin-left:5px'>Collapse or Expand Row</ejs-button> 
    </div>
    <div style="padding-top:5px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid ref='grid' style="margin-top: 5px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='220px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :allowGrouping='false' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' :allowGrouping='false' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' :allowGrouping='false' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent as EjsNumerictextbox } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
const grid = ref(null);
const textbox =ref(null);
const groupOptions = { columns: ['CustomerID'] };
const message = ref(null);
const onExpandCollapseButtonClick = function () {
  const groupedRowIndex = parseInt(textbox.value.ej2Instances.value);
  const groupedRows = Array.from(
    grid.value.ej2Instances.getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse')
  );
  if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
    message.value = '';
    const groupCaptionElement = groupedRows[groupedRowIndex];
    grid.value.ej2Instances.groupModule.expandCollapseRows(groupCaptionElement);
  } else {
    message.value =
      'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
  }
}
provide('grid', [Group]);
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
    <div style="display: inline-block;">
      <ejs-numerictextbox ref='textbox' id='textbox' floatLabelType="Auto" format="##"  width='240px' 
      placeholder="Enter Grouped Row Index" ></ejs-numerictextbox>
      <ejs-button ref='button' cssClass='e-outline' v-on:click="onExpandCollapseButtonClick" style='margin-top:25px; margin-left:5px'>Collapse or Expand Row</ejs-button> 
    </div>
    <div style="padding-top:5px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid ref='grid' style="padding-top: 5px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='220px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :allowGrouping='false' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' :allowGrouping='false' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' :allowGrouping='false' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent  } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-numerictextbox":NumericTextBoxComponent,
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      groupOptions: { columns: ['CustomerID'] },
      message:'',
    };
  },
  methods: {
    onExpandCollapseButtonClick: function() {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      const groupedRowIndex = parseInt(this.$refs.textbox.value);
      const groupedRows = Array.from(
        grid.getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse')
      );
      if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
        this.message = '';
        const groupCaptionElement = groupedRows[groupedRowIndex];
        grid.groupModule.expandCollapseRows(groupCaptionElement);
      } else {
        this.message =
          'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
      }
    }
  },
  provide: {
    grid: [Group]
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
        
{% previewsample "page.domainurl/code-snippet/grid/group/selected-row-expand-collapse" %}

## Clear grouping 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid provides a [clearGrouping](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#cleargrouping) method to remove all grouped columns programmatically. This is useful for resetting the grid to an ungrouped state.

The following example demonstrates clearing the grouping using the clearGrouping method through an external button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/clear-group/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/clear-group/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/clear-group" %}

## Grouping events

The Syncfusion<sup style="font-size:70%">&reg;</sup> vue Grid provides two key events for handling grouping operations. These events enable the integration of custom logic before and after a grouping action:

1. [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#actionbegin): Triggered before a grouping action starts. It provides details such as the group field name and `requestType`, allowing conditional logic or cancellation.

2. [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#actioncomplete): Triggered after a grouping action completes. It exposes the updated grid state for post-processing tasks like UI updates or data handling.

The following example demonstrates how to cancel grouping for the "Order ID" column using `actionBegin` and display a status message via `actionComplete`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid :dataSource='data' :allowGrouping='true' :actionComplete='actionComplete' :actionBegin='actionBegin' height='260px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
      let message = '';
    const actionBegin = function (args) {
      if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
        args.cancel = true
        message = args.requestType + ' action is cancelled for ' + args.columnName + ' column';
      }
    }
    const actionComplete = function (args) {
      if (args.requestType === 'grouping') {
        message = args.requestType + ' action completed for ' + args.columnName + ' column';
      }
      else {
        message = '';
      }
    }
  provide('grid',  [Group]);
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
    <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid :dataSource='data' :allowGrouping='true' :actionComplete='actionComplete' :actionBegin='actionBegin' height='260px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data() {
    return {
      data: data,
      message:''
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
        args.cancel = true
        this.message = args.requestType + ' action is cancelled for ' + args.columnName + ' column';
      }
    },
    actionComplete: function (args) {
      if (args.requestType === 'grouping') {
        this.message = args.requestType + ' action completed for ' + args.columnName + ' column';
      }
      else {
        this.message = ''
      }
    }
  },
  provide: {
    grid: [Group]
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
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs6" %}

> The [args.requestType](https://ej2.syncfusion.com/vue/documentation/api/grid/groupeventargs#requesttype) property represents the name of the current action being performed. For instance, during grouping, the `args.requestType` value will be "grouping".

## Limitations

Grouping is not compatible with the autofill feature.

## See Also

* [Exporting grouped records](../excel-export/excel-export-options#exporting-grouped-records)
* [How to customize the group caption row text in Vue Grid](https://www.syncfusion.com/forums/154055/how-to-customize-the-group-caption-row-text-in-vue-grid)