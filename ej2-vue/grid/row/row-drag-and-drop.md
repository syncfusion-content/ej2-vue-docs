---
layout: post
title: Row drag and drop in Vue Grid component | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Row drag and drop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row drag and drop in Vue Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component provides built-in support for row drag and drop functionality. This feature allows you to easily rearrange rows within the grid by dragging and dropping them to new positions. Additionally, you can also drag and drop rows from one grid to another grid, as well as drag and drop rows to custom components.

To use the row drag and drop feature in Grid component, you need to inject the **RowDD** in the provider section. The **RowDD** is responsible for handling the row drag and drop functionality in the grid component. Once you have injected the ****RowDD****, you can then use the [allowRowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowrowdraganddrop) and [targetID](https://ej2.syncfusion.com/vue/documentation/api/grid/rowDropSettings/#targetid) properties to enable and configure the row drag and drop feature in the Grid.

## Drag and drop within grid  

The drag and drop feature allows you to rearrange rows within the grid by dragging them using a drag icon. This feature can be enabled by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowrowdraganddrop) property to **true**. This property is a boolean value that determines whether row drag and drop is enabled or not. By default, it is set to **false**, which means that row drag and drop is disabled.

Here's an example of how to enable drag and drop within the Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-drag-drop/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-drag-drop/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-drag-drop" %}

## Drag and drop to grid 

The grid row drag and drop allows you to drag grid rows and drop to another grid. This feature can be enabled by setting the [allowRowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowrowdraganddrop) property to **true** in the Grid component. This property specifies whether to enable or disable the row drag and drop feature in the Grid. By default, this property is set to **false**, which means that row drag and drop functionality is not enabled.

To specify the target component where the grid rows should be dropped, use the [targetID](https://ej2.syncfusion.com/vue/documentation/api/grid/rowDropSettings/#targetid) property of the [rowDropSettings](https://ej2.syncfusion.com/vue/documentation/api/grid/rowDropSettings/) object. The `targetID` property takes the ID of the target component as its value.

Here's an example code snippet that demonstrates how to enable Row drag and drop another Grid component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-drag-grid/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-drag-grid/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-drag-grid" %}

> * The row drag and drop feature is not supported in virtual scrolling and frozen rows and columns mode.
> * In order to use row drag and drop, you need to inject the **RowDDService** in the provider section of **AppModule**.

## Drag and drop to custom component 

The Grid provides the feature to drag and drop grid rows to any custom component. This feature allows you to easily move rows from one component to another without having to manually copy and paste data. To enable row drag and drop, you need to set the [allowRowDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowrowdraganddrop) property to **true** and defining the custom component ID in the [targetID](https://ej2.syncfusion.com/vue/documentation/api/grid/rowDropSettings/#targetid) property of the `rowDropSettings` object. The ID provided in `targetID` should correspond to the ID of the target component where the rows are to be dropped.

In the below example, the selected grid row is dragged and dropped in to the TreeView component by using [rowDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdrop) event. Once the row is dropped into the TreeView component, we have removed the corresponding grid row from grid and its data inserted in custom component. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-drag-custom/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-drag-custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-drag-custom" %}

> * The `rowDrop` event is fired when a row is dropped onto a custom component, regardless of whether the drop is successful or not. You can use the `args.cancel` property to prevent the default action.

## Drag and drop rows without drag icons

By default, when performing a drag and drop operation in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, drag icons are displayed. However, in some cases, you may want to hide these drag icons. This can be achieved by setting the [targetID](https://ej2.syncfusion.com/vue/documentation/api/grid/rowDropSettings/#targetid) property of the [rowDropSettings](https://ej2.syncfusion.com/vue/documentation/api/grid/rowDropSettings/) object to the current Grid's ID.

By setting the `targetID`, the Grid will render without a helper icon for row dragging. You can then customize the drag and drop action by binding to the [rowDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdrop) event of the Grid. In the `rowDrop` event, you can prevent the default action by setting `args.cancel` to **true**, and reorder the rows using the [reorderRows](https://ej2.syncfusion.com/vue/documentation/api/grid/#reorderrows) method of the Grid.

Here's an example of how to hide the drag and drop icon in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-drag-icons/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/row/row-drag-icons/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-drag-icons" %}

> * The selection feature must be enabled in the Grid to allow users to select rows before performing the drag and drop operation.
> * Multiple rows can be selected by clicking and dragging inside the grid. For multiple row selection, the [type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) property must be set to **Multiple**.

## Drag and drop events

The Grid component provides a set of events that are triggered during drag and drop operations on grid rows. These events allow you to customize the drag element, track the progress of the dragging operation, and perform actions when a row is dropped on a target element. The following events are available:

1. [rowDragStartHelper](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdragstarthelper): This event is triggered when a click occurs on the drag icon or a grid row. It allows you to customize the drag element based on specific criteria.

2. [rowDragStart](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdragstart): This event is triggered when the dragging of a grid row starts.

3. [rowDrag](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdrag): This event is triggered continuously while the grid row is being dragged.

4. [rowDrop](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdrop): This event is triggered when a drag element is dropped onto a target element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="text-align:center">
      <p style="color:red;" id="message">{{ message }}</p>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :allowRowDragAndDrop="true"
      :rowDragStartHelper="rowDragStartHelper" :selectionSettings="selectOptions" id="Grid" :rowDrop="rowDrop"
      :rowDragStart="rowDragStart" :rowDrag="rowDrag">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="130"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, RowDD, Selection, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
const grid = ref(null);
const data = employeeData;
const selectOptions = { type: "Multiple" };
const rowDropOptions = { targetID: "Grid" };
let message = "";
const rowDragStartHelper = function (args) {
  message = `rowDragStartHelper event triggered`;
  if (args.data[0].OrderID === 10248) {
    args.cancel = true;
  }
}
const rowDrop = function (args) {
  message = `rowDragStart event triggered`;
  args.cancel = true;
}
const rowDragStart = function (args) {
  message = `rowDrag event triggered`;
  args.rows.forEach((row) => {
    row.classList.add("drag-limit");
  });
}
const rowDrag = function (args) {
  message = `rowDrop event triggered`;
  const value = [];
  for (let r = 0; r < args.rows.length; r++) {
    value.push(args.fromIndex + r);
  }
  grid.value.$el.ej2_instances[0].reorderRows(value, args.dropIndex);
}
provide('grid', [RowDD, Page, Selection]);
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

.drag-limit .e-rowcell {
  border: 1px solid red;
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="text-align:center">
      <p style="color:red;" id="message">{{ message }}</p>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" 
    :allowRowDragAndDrop="true" :rowDragStartHelper="rowDragStartHelper"
    :selectionSettings="selectOptions" 
    id="Grid" :rowDrop="rowDrop"  :rowDragStart="rowDragStart" :rowDrag="rowDrag">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="130"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, RowDD, Selection, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: employeeData,
      selectOptions: { type: "Multiple" },
      rowDropOptions: { targetID: "Grid" },
      message: "",
    };
  },
  methods: {
    rowDragStartHelper: function (args) {
      this.message = `rowDragStartHelper event triggered`;
      if (args.data[0].OrderID === 10248) {
        args.cancel = true;
      }
    },
    rowDrop: function (args) {
      this.message = `rowDragStart event triggered`;
      args.cancel = true;
    },
    rowDragStart: function (args) {
      this.message = `rowDrag event triggered`;
      args.rows.forEach((row) => {
        row.classList.add("drag-limit");
      });
    },
    rowDrag: function (args) {
      this.message = `rowDrop event triggered`;
      const value = [];
      for (let r = 0; r < args.rows.length; r++) {
        value.push(args.fromIndex + r);
      }
      this.$refs.grid.$el.ej2_instances[0].reorderRows(value, args.dropIndex);
    },
  },
  provide: {
    grid: [RowDD, Page, Selection],
  },
};
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
.drag-limit .e-rowcell {
  border: 1px solid red;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-drag-event" %}

## Limitations

* Single row is able to drag and drop in same grid without enable the row selection.
* Row drag and drop feature is not having built in support with row template, detail template and hierarchy grid features of grid.

## See also

[Sorting data in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid](https://ej2.syncfusion.com/vue/documentation/grid/sorting)
[Filtering data in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid](https://ej2.syncfusion.com/vue/documentation/grid/filtering/filtering)