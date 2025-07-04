---
layout: post
title: Column reorder in Vue Grid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column reorder 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
--- 

# Column reorder in Vue Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component allows to reorder columns by drag and drop of a particular column header from one index to another index within the grid. This feature can be enabled by injecting the **Reorder** in the provider section.

To reorder the columns, set the [allowReordering](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowreordering) property to **true** in the grid.

Here's an example for column reordering in your Grid component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs11" %}

>* You can customize the appearance of the column headers during drag and drop by using the [columnDrag](https://ej2.syncfusion.com/vue/documentation/api/grid/#columndrag) and [columnDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#columndrop) events.
>* When columns are reordered, the position of the corresponding column data will also be changed. As a result, you should ensure that any additional code or logic that relies on the order of the column data is updated accordingly.

## Prevent reordering for particular column

By default, all columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid can be reordered by dragging and dropping their headers to another location within the grid. However, there may be certain columns that you do not want to be reordered. In such cases, you can set the [allowReordering](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowreordering) property of that particular column to **false**. Here is an example that demonstrates how to prevent reordering for a specific column:

In this example, the **ShipCity** column is prevented from being reordered by setting the `allowReordering` property to **false**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-reorder-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-reorder-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-reorder-cs1" %}

## Reorder columns externally

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid Vue allows you to reorder columns externally, which means that using methods you can programmatically move columns around within the grid, based on their index or target index, or by using their field name.

> When reordering columns externally, you must set the [allowReordering](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowreordering) property of the grid to **true**.

### Reorder column based on index

You can use the [reorderColumnByIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#reordercolumnbyindex) method to reorder columns based on their current index. This method takes two arguments:

* **fromIndex** : Current index of the column to be reordered
* **toIndex** : New index of the column after the reordering

Here is an example of how to use the `reorderColumnByIndex` method:

In this example, we are moving the column at index **1** to index **3**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-reorder-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/column-reorder-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/column-reorder-cs2" %}

### Reorder column based on target index

You can also use the [reorderColumnByTargetIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#reordercolumnbytargetindex) method to reorder single column or multiple columns based on the target index. This method takes two arguments:

* **fieldName**: Field name of the column to be reordered
* **toIndex**: New index of the column after the reordering

Here is an example of how to use the `reorderColumnByTargetIndex` method to reorder single column and multiple columns based on target index: 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
 
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs12" %}

### Reorder column based on field names

The [reorderColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#reordercolumns) method of the Grid allows you to reorder single column or list of columns based on their field names. This method takes two arguments: 

* **fromFName**: The field name of the column you want to move.
* **toFName**: The field name of the column you want to move the column to.

Here is an example of how to use the `reorderColumns` method to reorder single column and multiple columns based on field names:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs13" %}

### Reorder columns using the column model (ideal for stacked headers)

Previously, column reordering in the Grid was handled using methods like [reorderColumnByIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#reordercolumnbyindex), [reorderColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#reordercolumns), and [reorderColumnByTargetIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#reordercolumnbytargetindex). These methods allowed reordering based on field names or index positions and were suitable for simple, flat column structures.

To reorder stacked header columns, use the `reorderByColumnModel` method. It enables reordering by passing complete column model objects. This method is specifically designed to support [stacked header columns](https://ej2.syncfusion.com/vue/documentation/grid/columns/column-headers#stacked-header), but it also works with normal column configurations.

The `reorderColumnByModel` method accepts two arguments:

* **fromColumn**: The column object that you want to move.
* **toColumn**: The target column object before which the **fromColumn** should be placed.

In this example, **Order Details** is moved before **Customer Name**, and **Ship Country** is moved before **Ship Name** within **Ship Details**, showing how `reorderColumnByModel` method reorders both normal and stacked header columns using a button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/reorderColumnByModel-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/reorderColumnByModel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
 
{% previewsample "page.domainurl/code-snippet/grid/column/reorderColumnByModel-cs1" %}

## Reorder events

When reordering columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component, you may want to take some specific action in response to the drag and drop events. To handle these events, you can define event handlers for the following events:

1.The [columnDragStart](https://ej2.syncfusion.com/vue/documentation/api/grid/#columndragstart) event triggers when column header element drag (move) starts.

2.The [columnDrag](https://ej2.syncfusion.com/vue/documentation/api/grid/#columndrag) event triggers when column header element is dragged (moved) continuously.

3.The [columnDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#columndrop) event triggers when a column header element is dropped on the target column.

In the following example, we have implemented the `columnDragStart`, `columnDrag`, and `columnDrop` events in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <p id='message' style="color:red;text-align:center">{{ message }}</p>
    <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' height='315px' :enableHover='false'
      :columnDragStart="columnDragStart" :columnDrag="columnDrag" :columnDrop="columnDrop">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Reorder } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
var message = ref(null);
var grid = ref(null);
provide('grid', [Reorder]);
const columnDrop = function (args) {
  message.value = `columnDrop event triggered`;
  if (args.column.allowReordering == true) {
    grid.value.getColumnByField(args.column.field).customAttributes = {
      class: 'customcss',
    };
  }
}
const columnDragStart = function (args) {

  message.value = `columnDragStart event triggered`;
  if (args.column.field == 'OrderID') {
    grid.value.getColumnByField(args.column.field).allowReordering = false;
  }
}
const columnDrag = function (args) {
  var index = args.target.getAttribute('data-colIndex');
  if (index) {
    message.value = `columnDrag event is triggered. ` + args.column.headerText + ` column is dragged to index ` + index;
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
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <p id='message' style="color:red; text-align:center">{{ message }}</p>
    <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' height='315px' :enableHover='false'
      :columnDragStart="columnDragStart" :columnDrag="columnDrag" :columnDrop="columnDrop">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Reorder } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data,
      message: ''
    };
  },
  provide: {
    grid: [Reorder]
  },
  methods: {
    columnDrop: function (args) {
      this.message = `columnDrop event triggered`;
      if (args.column.allowReordering == true) {
        this.$refs.grid.getColumnByField(args.column.field).customAttributes = {
          class: 'customcss',
        };
      }
    },
    columnDragStart: function (args) {
      this.message = `columnDragStart event triggered`;
      if (args.column.field == 'OrderID') {
        this.$refs.grid.getColumnByField(args.column.field).allowReordering = false;
      }
    },
    columnDrag: function (args) {
      var index = args.target.getAttribute('data-colIndex');
      if (index) {
        this.message = `columnDrag event is triggered. ` + args.column.headerText + ` column is dragged to index ` + index;
      }
    },
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
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs14" %}