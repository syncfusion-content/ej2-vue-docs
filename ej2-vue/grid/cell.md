---
layout: post
title: Cell in Vue Grid component | Syncfusion
description: Learn here all about Cell and its customization in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Cell 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell in Vue Grid component

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid, a **cell** refers to an individual data point or a unit within a grid column that displays data. It represents the intersection of a row and a column, and it contains specific information associated with that row and column. Each cell can display text, numbers, or other content related to the data it represents. 

The Grid component allows you to customize the appearance and behavior of cells using various features and options. You can define templates, format cell values, enable or disable editing, and perform various other operations on the cells to create interactive and informative data grids in your web applications.

## Displaying the HTML content

Displaying HTML content in a Grid can be useful in scenarios where you want to display formatted content, such as images, links, or tables, in a tabular format. Grid component allows you to display HTML tags in the Grid header and content. By default, the HTML content is encoded to prevent potential security vulnerabilities. However, you can enable the [disableHtmlEncode](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#disablehtmlencode) property by setting the value as false to display HTML tags without encoding. This feature is useful when you want to display HTML content in a grid cell.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) component is added  to enable and disable the [disableHtmlEncode](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#disablehtmlencode) property. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch/#change) event is triggered and the `disableHtmlEncode` property of the column is updated accordingly. The [refreshColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshcolumns) method is called to refresh the grid and display the updated content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/encode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/encode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/encode-cs1" %}

> * The [disableHtmlEncode](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#disablehtmlencode) property disables HTML encoding for the corresponding column in the grid. 
> * If the property is set to **true**, any HTML tags in the column's data will be displayed. 
> * If the property is set to **false**, the HTML tags will be removed and displayed as plain text.
> * Disabling HTML encoding can potentially introduce security vulnerabilities, so use caution when enabling this feature.
> * If [enableHtmlSanitizer](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablehtmlsanitizer) property of grid is set to true, then the content is sanitized to prevent any potential security vulnerabilities.
> * You can also disable the `disableHtmlEncode` property of the column using [getColumns](https://ej2.syncfusion.com/vue/documentation/api/grid#getcolumns) method on [change](https://ej2.syncfusion.com/vue/documentation/api/switch/#change) event of Switch component.This is demonstrated in the below code snippet, 

```typescript
change: function(args) {
  if (args.checked) {
    this.$refs.grid.getColumns()[1].disableHtmlEncode = false;
  } else {
    this.$refs.grid.getColumns()[1].disableHtmlEncode = true;
  }
  this.$refs.grid.refreshColumns();
}
```

## Autowrap the grid content

The auto wrap feature allows the cell content in the grid to wrap to the next line when it exceeds the boundary of the specified cell width. The cell content wrapping works based on the position of white space between words. To support the Autowrap functionality in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, you should set the appropriate [width](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#width) for the columns. The column width defines the maximum width of a column and helps to wrap the content automatically.

To enable auto wrap, set the [allowTextWrap](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowtextwrap) property to **true**. You can also configure the wrap mode by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/vue/documentation/api/grid/textWrapSettings/#wrapmode) property.

Grid provides the below three options for configuring:

* **Both** - This is the default value for wrapMode. With this option, both the grid **Header** and **Content** text is wrapped.
* **Header** - With this option, only the grid header text is wrapped.
* **Content** - With this option, only the grid content is wrapped.

The following example demonstrates how to set the `allowTextWrap` property to **true** and specify the wrap mode as **Content** by setting the `textWrapSettings.wrapMode` property. Also change the `textWrapSettings.wrapMode` property to **Content** and **Both** on changing the dropdown value using the [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event of the DropDownList component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/autowrap-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/autowrap-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/autowrap-cs1" %}

## Customize cell styles

Customizing the grid cell styles allows you to modify the appearance of cells in the Grid control to meet your design requirements. You can customize the font, background color, and other styles of the cells. To customize the cell styles in the grid, you can use grid event, css, property or method support.

### Using event

To customize the appearance of the grid cell, you can use the [queryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event of the grid. This event is triggered when each header cell is rendered in the grid, and provides an object that contains information about the header cell. You can use this object to modify the styles of the header cell.

The following example demonstrates how to add a `queryCellInfo` event handler to the grid. In the event handler, checked whether the current column is **Freight** field and then applied the appropriate CSS class to the cell based on its value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/default-cs1" %}

> * The [queryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event is triggered for every cell of the grid, so it may impact the performance of the grid whether used to modify a large number of cells.

### Using CSS

You can apply styles to the cells using CSS selectors. The Grid provides a class name for each cell element, which you can use to apply styles to that specific cell or cells in a particular column. The `e-rowcell` class is used to style the row cells, and the `e-selectionbackground` class is used to change the background color of the selected row.

```CSS
.e-grid td.e-cellselectionbackground {
  background: #9ac5ee;
  font-style: italic;
}
```

The following example demonstrates how to customize the appearance of a specific row in the grid on selection using `className`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/default-cs3" %}

### Using property

To customize the style of grid cells, define [customAttributes](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#customattributes) property to the column definition object. The `customAttributes` property takes an object with the name-value pair to customize the CSS properties for grid cells. You can also set multiple CSS properties to the custom class using the customAttributes property.

```CSS
.custom-css {
  background: #d7f0f4;
  font-style: italic;
  color:navy
}
```
Here, setting the customAttributes property of the **ShipCity** column to an object that contains the CSS class 'custom-css'. This CSS class will be applied to all the cells in the **ShipCity** column of the grid.

```typescript
<e-column field='ShipCity' headerText='Ship City' :customAttributes= "{class: 'custom-css'}" width=90 >
</e-column>
```
The following example demonstrates how to customize the appearance of the **OrderID** and **ShipCity** columns using custom attributes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/default-cs2" %}

### Using methods

The Grid provides below methods to customize the appearance of the grid columns header and cell:

1. [getHeaderContent](https://ej2.syncfusion.com/vue/documentation/api/grid/#getheadercontent): The `getHeaderContent` method is used to customize the appearance of the column header in the grid and accessing the header element using the `querySelector` method and applying the style using the style property of the cell element.

2. [getCellFromIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcellfromindex): The `getCellFromIndex` method is used to customize the appearance of a specific cell in the grid by specifying the index of the row and column for which you want to customize the appearance.

The following example demonstrates how to use [getColumnHeaderByIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcolumnheaderbyindex) and [getCellFromIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcellfromindex) methods to customize the appearance of the **CustomerID** column header and specific cell inside the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event of the grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/default-cs4" %}

> Make sure to pass the correct row and column indices to [getCellFromIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#getcellfromindex) method, or else the appearance of the wrong cell might get customized.

## Clip mode

The clip mode feature is useful when you have a long text or content in a grid cell, which overflows the cell's width or height. It provides options to display the overflow content by either truncating it, displaying an ellipsis or displaying an ellipsis with a tooltip. You can enable this feature by setting [columns.clipMode](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#clipmode) property to one of the below available options.

There are three types of `clipMode` available:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied. Also it will display the tooltip while hover on ellipsis is applied.

The following example demonstrates, how to set the `clipMode` property to **Clip** , **Ellipsis** and **EllipsisWithTooltip** for the **Main Fields of Invention** column, on changing the dropdown value using the [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event of the `DropDownList` component. The [refreshColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshcolumns) method is used to refresh the grid and display the updated content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/autowrap-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/autowrap-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/autowrap-cs3" %}

## Tooltip

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to display information about the grid columns to the user when they hover over them with the mouse.

### Render bootstrap tooltip in grid cells

The Grid component allows rendering Bootstrap tooltips in the cells. To enable this feature, you need to add the Bootstrap css to initialize the tooltip. 

This is demonstrated in the sample code below which shows how to enable Bootstrap tooltip for the **CustomerID** field using `template` in grid cells,

Step 1: Install the Bootstrap package in your application using the following command and add the style of the respective packages in the app.vue file,

To install bootstrap, use the following command.

```bash
npm install vue bootstrap bootstrap-vue
```

Register the following BootstrapVue in your app.vue file

```
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
```

Step 2: The following code demonstrates how to render Bootstrap tooltip for the **CustomerID** field with [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template)

{% tabs %}
{% highlight ts tabtitle="app-composition.vue" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid :dataSource="data" :allowPaging="true" >
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' textAlign='Center' width=120 :template="'cTemplate'">
              <template v-slot:cTemplate={data}>
                <div class="text-center">
                  <span
                  v-b-tooltip.hover
                  :title="data.CustomerID"
                  >{{data.CustomerID}}</span>
                </div>
              </template>
            </e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format="yMd" width=120></e-column>
          </e-columns>
        </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from '@syncfusion/ej2-vue-grids';
import { BootstrapVue, IconsComponent } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { data } from './datasource.js';
  provide('grid',  [Page]);
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

You can get the reference GitHub sample [here](https://github.com/SyncfusionExamples/how-to-show-bootstrap-tooltip-while-hovering-on-vue-datagrid-cells). 

The following screenshot represents the Bootstrap tooltip for the **CustomerID** field,

![Bootstrap tooltip](./images/bootstrap-tooltip.gif)

### Display custom tooltip for columns

The Grid provides a feature to display custom tooltips for its columns using the [EJ2 Tooltip](https://ej2.syncfusion.com/vue/documentation/tooltip/getting-started) component. This allows you to provide additional information about the columns when the user hovers over them.

To enable custom tooltips for columns in the Grid, you can render the Grid control inside the Tooltip component and set the target as `.e-rowcell`. This will display the tooltip when hovering over the grid cells.

Change the tooltip content for the grid cells by using the following code in the [beforeRender](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#beforerender) event.

```typescript
beforeRender(args){
    if (args.target.classList.contains('e-rowcell')) {
        // event triggered before render the tooltip on target element.
        this.$refs.tooltip.content = 'This is value "' + args.target.innerText + '" ';
    }
}
```

The following example demonstrates how to customize the tooltip content for the grid cells by using the [beforeRender](https://ej2.syncfusion.com/vue/documentation/api/tooltip/#beforerender) event of the EJ2 Tooltip component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/custom-tooltip/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/custom-tooltip/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/custom-tooltip" %}

## Grid lines

The [gridLines](https://ej2.syncfusion.com/vue/documentation/api/grid/#gridlines) in a grid are used to separate the cells with horizontal and vertical lines for better readability. You can enable the grid lines by setting the `gridLines` property to one of the following values:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

The following example demonstrates how to set the [gridLines](https://ej2.syncfusion.com/vue/documentation/api/grid/#gridlines) property based on changing the dropdown value using the [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event of the DropDownList component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/autowrap-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/cell/autowrap-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/autowrap-cs2" %}

>By default, the grid renders with **Default** mode.