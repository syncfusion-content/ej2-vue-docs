---
layout: post
title: Column resizing in Vue Grid component | Syncfusion
description: Learn here all about Column resizing in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column resizing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in Vue Grid component

Grid component provides an intuitive user interface for resizing columns to fit their content. This feature allows users to easily adjust the width of the columns to improve readability and aesthetics of the data presented. To enable column resizing, set the [allowResizing](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowresizing) property of the grid to **true**.

Once column resizing is enabled, columns width can be resized by clicking and dragging at the right edge of the column header. While dragging the column, the width of the respective column will be resized immediately.

To use the column resize, inject **ResizeService** in the provider section of **AppModule**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-column/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-column/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/resize-column" %}

>* You can disable Resizing for a particular column, by specifying [columns.allowResizing](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowresizing) to **false**.
>* In RTL mode, you can click and drag the left edge of header cell to resize the column.
>* The `width` property of the column can be set initially to define the default width of the column. However, when column resizing is enabled, you can override the default width by manually resizing the columns.

## Restrict the resizing based on minimum and maximum width

The Grid component allows you to restrict the column width resizing between a minimum and maximum width. This can be useful when you want to ensure that your grid's columns stay within a certain range of sizes.

To enable this feature, you can define the [columns.minWidth](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#minwidth) and [columns.maxWidth](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#maxwidth) properties of the columns directive for the respective column.

In the below code, **OrderID**, **Ship Name** and **Ship Country** columns are defined with minimum and maximum width. The **OrderID** column is set to have a minimum width of 100 pixels and a maximum width of 200 pixels. Similarly, the **ShipName** column is set to have a minimum width of 150 pixels and a maximum width of 300 pixels. The **ShipCountry** column is set to have a minimum width of 120 pixels and a maximum width of 280 pixels.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-min-max/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-min-max/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/resize-min-max" %}

>* The [columns.minWidth](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#minwidth) and [columns.maxWidth](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#maxwidth) properties will be considered only when the user resizes the column. When resizing the window, these properties will not be considered. This is because columns cannot be re-rendered when resizing the window.
>* When setting the `minWidth` and `maxWidth` properties, ensure that the values are appropriate for your data and layout requirements.
>* The specified `minWidth` and `maxWidth` values take precedence over any user-initiated resizing attempts that fall outside the defined range.

## Prevent resizing for particular column

The Grid component provides the ability to prevent resizing for a particular column. This can be useful if you want to maintain a consistent column width or prevent users from changing the width of a column.

You can disable resizing for a particular column by setting the [allowResizing](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowresizing) property of the column to **false**. The following example demonstrates, how to disabled resize for **Customer ID** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/prevent-resize/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/prevent-resize/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/prevent-resize" %}

> You can also prevent resizing by setting `args.cancel` to **true** in the [resizeStart](https://ej2.syncfusion.com/vue/documentation/api/grid/#resizestart) event.

## Resizing modes

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides a [ResizeSettingsModel](https://ej2.syncfusion.com/vue/documentation/api/grid/resizeSettingsModel/#resizesettingsmodel) interface for configuring the resizing behavior of grid columns. The interface includes a property named [mode](https://ej2.syncfusion.com/vue/documentation/api/grid/resizeSettings/#mode) which is of the type [ResizeMode](https://ej2.syncfusion.com/vue/documentation/api/grid/resizeMode/). The `ResizeMode` is an enum that determines the available resizing modes for the grid columns. There are two resizing modes available for grid columns in Grid:

1. `Normal Mode`: This mode does not adjust the columns to fit the remaining space. When the sum of column width is less than the grid's width, empty space will be present to the right of the last column. When the sum of column width is greater than the grid's width, columns will overflow, and a horizontal scrollbar will appear.

2. `Auto Mode`: This mode automatically resizes the columns to fill the remaining space. When the sum of column width is less than the grid's width, the columns will be automatically expanded to fill the empty space. Conversely, when the sum of column width is greater than the grid's width, the columns will be automatically contracted to fit within the available space.

The following example demonstrates how to set the [resizeSettings.mode](https://ej2.syncfusion.com/vue/documentation/api/grid/resizeSettings/#mode) property to **Normal** and **Auto** on changing the dropdown value using the [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event of the DropDownList component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-mode/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-mode/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/resize-mode" %}

## Resize stacked header column

Grid component allows to resize stacked columns by clicking and dragging the right edge of the stacked column header. During the resizing action, the width of the child columns is resized at the same time. You can disable resize for any particular stacked column by setting [allowResizing](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowresizing) as **false** to its columns.

In this below code, we have disabled resize for **Ship City** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-stack-column/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-stack-column/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/resize-stack-column" %}

> When the [autoFit](https://ej2.syncfusion.com/vue/documentation/api/grid/#autofit) property is set to **true**, the Grid will automatically adjust its column width based on the content inside them. In `normal` resize mode, if the `autoFit` property is set to **true**, the Grid will maintain any empty space that is left over after resizing the columns. However, in `auto` resize mode, the Grid will ignore any empty space.

## Touch interaction

Grid component provides support for touch interactions to enable users to interact with the grid using their mobile devices. Users can resize columns in the grid by tapping and dragging the floating handler, and can also use the Column menu to autofit columns.

**Resizing Columns on Touch Devices**

To resize columns on a touch device:

1.Tap on the right edge of the header cell of the column that you want to resize.

2.A floating handler will appear over the right border of the column.

3.Tap and drag the floating handler to resize the column to the desired width.

The following screenshot represents the column resizing on the touch device.

![Touch Interaction](../images/column-resizing.jpg)

## Resizing column externally

Grid provides the ability to resize columns using an external button click. This can be achieved by changing the [width](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#width) property of the column and refreshing the grid using the [refreshColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshcolumns) method in the external button click function.

The following example demonstrates how to resize the columns in a grid. This is done by using the [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event of the DropDownList component by change the [width](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#width) property of the selected column. This is accomplished using the  [getColumnByField](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnbyfield) on external button click. Then, the [refreshColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshcolumns) method is called on the grid component to update the displayed columns based on interaction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-externally/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/resize-externally/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/resize-externally" %}

>  The [refreshColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshcolumns) method is used to refresh the grid after the column widths are updated. Column resizing externally is useful when you want to provide a custom interface to the user for resizing columns.

## Resizing events

During the resizing action, the grid component triggers the below three events.

1.The [resizeStart](https://ej2.syncfusion.com/vue/documentation/api/grid/#resizestart) event triggers when column resize starts. This event can be used to perform actions when the user begins to resize a column. 

2.The [resizing](https://ej2.syncfusion.com/vue/documentation/api/grid/#resizing) event triggers when column header element is dragged (moved) continuously. This event is useful when you want to perform certain actions during the column resize process.

3.The [resizeStop](https://ej2.syncfusion.com/vue/documentation/api/grid/#resizestop) event triggers when column resize ends. This event can be used to perform actions after the column is resized.

The following is an example of using the resizing events, the [resizeStart](https://ej2.syncfusion.com/vue/documentation/api/grid/#resizestart) event is used to cancel the resizing of the **OrderID** column. The [resizeStop](https://ej2.syncfusion.com/vue/documentation/api/grid/#resizestop) event is used to apply custom CSS attributes to the resized column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
        <ejs-grid ref='grid' :dataSource="data" :allowResizing='true' height='315px' :resizeStart='resizeStart' :resizing='resizing' :resizeStop='resizeStop'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
            <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Resize } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
    const resizeStart = function (args) {
      this.message = `resizeStart event triggered`;
      if (args.column.field === 'OrderID') {
        args.cancel = true;
      }
    }
    const resizing = function (args) {
      this.message = `resizing event triggered`;
    },
    const resizeStop = function (args) {
      this.message = `resizeStop event triggered`;
      const headerCell = grid.value.getColumnHeaderByField(args.column.field);
      headerCell.classList.add('customcss');
      const columnCells = grid.value.getContentTable()
        .querySelectorAll(`[data-colindex="${args.column.index}"]`);
      columnCells.forEach(cell => {
        cell.style.backgroundColor = 'rgb(43, 195, 226)';
      });
    }
    provide('grid',  [Resize]);
</script>
<style>
.e-grid .customcss {
  background-color: rgb(43, 195, 226);
}
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
        <ejs-grid ref='grid' :dataSource="data" :allowResizing='true' height='315px' :resizeStart='resizeStart' :resizing='resizing' :resizeStop='resizeStop'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
            <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnDirective, ColumnsDirective, Resize } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data
    };
  },
  provide: {
      grid: [Resize]
  },
  methods: {
    resizeStart: function (args) {
      this.message = `resizeStart event triggered`;
      if (args.column.field === 'OrderID') {
        args.cancel = true;
      }
    },
    resizing: function (args) {
      this.message = `resizing event triggered`;
    },
    resizeStop: function (args) {
      this.message = `resizeStop event triggered`;
      const headerCell = this.$refs.grid.getColumnHeaderByField(args.column.field);
      headerCell.classList.add('customcss');
      const columnCells = this.$refs.grid.getContentTable()
        .querySelectorAll(`[data-colindex="${args.column.index}"]`);
      columnCells.forEach(cell => {
        cell.style.backgroundColor = 'rgb(43, 195, 226)';
      });
    }
  }
}
</script>
<style>
.e-grid .customcss {
  background-color: rgb(43, 195, 226);
}
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
        
{% previewsample "page.domainurl/code-snippet/grid/column/resize-event" %}

>The ResizeArgs object passed to the events contains information such as the current column width, new column width, column index, and the original event. The [resizing](https://ej2.syncfusion.com/vue/documentation/api/grid/#resizing) event is triggered multiple times during a single resize operation, so be careful when performing heavy operations in this event.