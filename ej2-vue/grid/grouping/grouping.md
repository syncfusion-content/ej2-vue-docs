---
layout: post
title: Grouping in Vue Grid component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Grid component

The grouping feature in the Syncfusion Vue Grid allows you to organize data into a hierarchical structure, making it easier to expand and collapse records. You can group the columns by simply dragging and dropping the column header to the group drop area. To enable grouping in the grid, you need to set the [allowGrouping](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowgrouping) property to **true**. Additionally, you can customize the grouping options using the [groupSettings](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/) property.

To use the Grouping feature, need to inject **Group** module in the **provide** section.

To get start quickly with Grouping Options, you can check on this video:

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

> * You can group and ungroup columns in the Grid by using the [groupColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/group/#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/group/#ungroupcolumn) methods respectively.
> * To disable grouping for a specific column, set the [columns.allowGrouping](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowgrouping) to **false**.

## Initial group

To enable initial grouping in the Grid, you can use the [groupSettings](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/) property and set the [groupSettings.columns](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#columns) property to an array of column names(`field` of the column) that you want to group by. This feature is particularly useful when working with large datasets, as it allows you to quickly organize and analyze the data based on specific criteria.

The following example demonstrates how to set an initial grouping for the **CustomerID** and **ShipCity** columns during the initial rendering grid, by using the `groupSettings.columns` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs3" %}

> You can group by multiple columns by specifying an array of column names in the columns property of the `groupSettings`.

## Prevent grouping for particular column

The Grid component provides the ability to prevent grouping for a particular column. This can be useful when you have certain columns that you do not want to be included in the grouping process. It can be achieved by setting the [allowGrouping](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowgrouping) property of the particular `column` to **false**. The following example demonstrates, how to disable grouping for **CustomerID** column. 

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

By default, the Grid provides a drop area for grouping columns. This drop area allows you to drag and drop columns to group and ungroup them. However, in some cases, you may want to prevent ungrouping or further grouping a column after initial grouping.

To hide the drop area in the Syncfusion Vue Grid, you can set the [groupSettings.showDropArea](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#showdroparea) property to **false**. 

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) component is added to hide or show the drop area. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch/#change) event is triggered and the `groupSettings.showDropArea` property of the grid is updated accordingly.

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

The Syncfusion Vue Grid has a default behavior where the grouped column is hidden, to provide a cleaner and more focused view of your data. However, if you prefer to show the grouped column in the grid, you can achieve this by setting the [groupSettings.showGroupedColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#showgroupedcolumn) property to **true**.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) component is added to hide or show the grouped columns. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch/#change) event is triggered and the `groupSettings.showGroupedColumn` property of the grid is updated accordingly. 

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

The Syncfusion Vue Grid allows you to easily reorder the grouped columns by dragging and dropping the grouped header cells in the group drag area. By changing the order of the grouped columns, the corresponding changes are automatically reflected in the grouping hierarchy of the grid. The grid dynamically adjusts the grouping based on the reordered columns in the group drag area. Additionally, you can also drop new columns into specific positions within the group drag area.

To enable this feature, you have to set the [groupSettings.allowReordering](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#allowReordering) property as **true**. This is demonstrated in the sample below.

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

By default, grouped columns are sorted in ascending order. However, you can sort them in descending order during initial grouping by setting the [field](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#field) and [direction](https://ej2.syncfusion.com/vue/documentation/api/grid/sortDescriptorModel/#direction-string) in the [sortSettings.columns](https://ej2.syncfusion.com/vue/documentation/api/grid/sortSettings/#columns) property.

The following example demonstrates how to sort the **CustomerID** column by setting the `sortSettings.columns` property to **Descending** during the initial grouping of the grid.

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

The Grid component supports grouping columns with paging feature. When grouping is applied, the grid displays aggregated information and total items based on the current page. However, by default, the group footer and group caption footer does not consider the aggregated information and total items from other pages. To get additional details from other pages, set the [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/#disablePageWiseAggregates) property to **false**.

> If remote data is bound to grid dataSource, two requests will be sent when performing grouping action one for getting the grouped data and another for getting aggregate details and total items count.

## Group by format

By default, columns are grouped by the data or value present for the particular row. However, you can also group numeric or datetime columns based on the specified format. To enable this feature, you need to set the [enableGroupByFormat](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#enablegroupbyformat) property of the corresponding grid column. This feature allows you to group numeric or datetime columns based on a specific format.

The following example demonstrates how to perform a group action using the `enableGroupByFormat` property for the  **OrderDate** and **Freight** columns of the grid. 

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

Showing grouped column rows based on the page size in Syncfusion Vue Grid is useful when you have grouped data and want to control the number of grouped rows displayed per page. 

The Grid component allows you to display the number of records based on the [pageSize](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagesize). However, by default, the `pageSize` applies to individual grid rows, not to grouped rows. If you want to show grouped column rows based on the `pageSize`, you can achieve it by using a custom implementation.

Customizing the `generateQuery` method of the **Data prototype** allows you to modify the query used for data retrieval. By doing so, you can achieve the display of grouped rows based on the page size according to your specific requirements. This can be achieved in the below example.

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

The Syncfusion Vue Grid offers a convenient feature to expand or collapse grouped rows, allowing you to control the visibility of grouped data. The option is useful when dealing with a large dataset that contains many groups, and there is a need to provide a summarized view by initially hiding the details.

To collapse all grouped rows at the initial rendering of the Grid using the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event along with the [collapseAll](https://ej2.syncfusion.com/vue/documentation/api/grid/group/#collapseall) method.

The following example demonstrates how to collapse all grouped rows at the initial rendering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/group/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs10" %}

> You can also collapse all the grouped rows at the initial rendering using the [groupCollapseAll](https://ej2.syncfusion.com/vue/documentation/api/grid/#groupcollapseall) method inside the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event. This is demonstrated in the below code snippet,

```typescript
    dataBound() {
        if (this.initial === true) {
            this.$refs.grid.ej2Instances.groupCollapseAll();
            this.initial = false;
        }
    }
```
> The collapse all approach is suggested for a limited number of records since collapsing every grouped record takes some time. If you have a large dataset, it is recommended to use [lazy-load grouping](https://ej2.syncfusion.com/vue/documentation/grid/grouping/lazy-load-grouping). This approach is also applicable for the [groupExpandAll](https://ej2.syncfusion.com/vue/documentation/api/grid/#groupexpandall) method.

## Group or ungroup column externally

By default, the Syncfusion Grid supports interaction-oriented column grouping, where users manually group columns by dragging and dropping them into the grouping area of the grid. Grid provides an ability to group and ungroup a column using [groupColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/#groupcolumn) and [ungroupColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/#ungroupcolumn) methods. These methods provide a programmatic approach to perform column grouping and ungrouping.

The following example demonstrates how to group and upgroup the columns in a grid. It utilizes the [DropDownList](https://ej2.syncfusion.com/vue/documentation/drop-down-list/getting-started) component to select the column. When an external button is clicked, the `groupColumn` and `ungroupColumn` methods are called to group or ungroup the selected column.

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

The Syncfusion Vue Grid offers a convenient feature to expand or collapse grouped rows, allowing you to control the visibility of grouped data. This section will provide guidance on enabling this functionality and integrating it into your application using the Grid properties and methods.

### Expand or collapse all grouped rows

Grid provides an ability to expand or collapse grouped rows using [groupExpandAll](https://ej2.syncfusion.com/vue/documentation/api/grid/#groupexpandall) and [groupCollapseAll](https://ej2.syncfusion.com/vue/documentation/api/grid/#groupcollapseall) methods respectively.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) component is added to expand or collapse grouped rows. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch/#change) event is triggered and the `groupExpandAll` and `groupCollapseAll` methods are called to expand or collapse grouped rows.

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

Expanding or collapsing selected grouped rows in a Syncfusion Vue Grid involves implementing the functionality to expand or collapse grouped records programatically.

To enable the expand and collapse functionality for grouped rows in a grid, you can utilize the [expandCollapseRows](https://ej2.syncfusion.com/vue/documentation/api/grid/group/#expandcollapserows) method. This method is designed to handle two scenarios such as expanding collapsed grouped records and collapsing expanded grouped records.

To implement this functionality, follow these steps:

1. Include an `input` element to capture the grouped row index.
2. Add a `button` element with a **click** event binding to trigger the **onExpandCollapseButtonClick** method. This method retrieve the grouped rows from the grid's content table using the `querySelectorAll` method.
3. Check if there are any grouped rows available.
4. If grouped rows exist, locate the group caption element based on the entered row index.
5. Call the `expandCollapseRows` method of the grid's group module, passing the group caption element to toggle its expand/collapse state.

The following example demonstrates the function that collapses the selected row using an external button click.

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
    <ejs-grid ref='grid' style="margin-top: 5px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='267px'>
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
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
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
    <ejs-grid ref='grid' style="padding-top: 5px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='267px'>
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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/selected-row-expand-collapse" %}

## Clear grouping 

The clear grouping feature in the Syncfusion Vue Grid allows you to removing all the grouped columns from the grid. This feature provides a convenient way to clear the grouping of columns in your application.

To clear all the grouped columns in the Grid, you can utilize the [clearGrouping](https://ej2.syncfusion.com/vue/documentation/api/grid/#cleargrouping) method of the grid.

The following example demonstrates how to clear the grouping using `clearGrouping` method in the external button click.

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

The Grid component provides two events that are triggered during the group action such as [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) and [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete). The `actionBegin` event is triggered before the group action starts, and the `actionComplete` event is triggered after the group action is completed. You can use these events to perform any custom action based on the grouping.

1. **actionBegin event**: `actionBegin` event is triggered before the group action begins. It provides a way to perform any necessary operations before the group action takes place. This event provides a parameter that contains the current grid state, including the current group field name, requestType information and etc.

2. **actionComplete event**: `actionComplete` event is triggered after the group action is completed. It provides a way to perform any necessary operations after the group action has taken place. This event provides a parameter that contains the current grid state, including the grouped data and column information and etc.

The following example demonstrates how the `actionBegin` and `actionComplete` events work when grouping is performed. The `actionBegin` event event is used to cancel the grouping of the **OrderID** column. The `actionComplete` event is used to display a message.

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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
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
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/group/default-cs6" %}

> The [args.requestType](https://ej2.syncfusion.com/vue/documentation/api/grid/groupEventArgs/#requesttype) property represents the name of the current action being performed. For instance, during grouping, the `args.requestType` value will be **grouping**.

## Limitations

* Grouping is not compatible with the following features:
    1. Autofill

## See Also

* [Exporting grouped records](../excel-export/excel-export-options/#exporting-grouped-records)
* [How to customize the group caption row text in Vue Grid](https://www.syncfusion.com/forums/154055/how-to-customize-the-group-caption-row-text-in-vue-grid)