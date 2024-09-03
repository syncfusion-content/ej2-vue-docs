---
layout: post
title: Column selection in Vue Grid component | Syncfusion
description: Learn here all about Column selection in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column Selection in Vue Grid component

Column selection in grid component allows you to select one or more columns using mouse interactions or arrow keys. This feature is useful when you want to highlight, manipulate, or perform actions on specific columns within the Grid.

To enable column selection in the Grid, you need to set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#allowcolumnselection) property to **true**. 

Here's an example of how to enable column selection using `allowColumnSelection` property in the Grid component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column" %}

## Single column selection 

The Vue Grid allows you to select a single column within the Grid. This feature is particularly useful when you want to focus on specific columns or perform actions on the data within a particular column.

To enable single column selection, set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#allowcolumnselection) property to **true**. This property enables column selection and set the [selectionSettings.type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) property to **Single**. This configuration allows you to select a single column at a time within the grid.

Here's an example of how to enable single column selection using `allowColumnSelection` and `type` property :

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-single/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-single/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column-single" %}

## Multiple column selection 

The Vue Grid allows you to select multiple columns within the Grid. This feature is particularly useful when you need to focus on or perform actions on several columns simultaneously.

To enable multiple column selection, set the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#allowcolumnselection) property to **true**. This property enables column selection and set the [selectionSettings.type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) property to **Multiple**. This configuration allows you to select a multiple column at a time within the grid.

Here's an example of how to enable multiple column selection using `allowColumnSelection` and `type` property :

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-multiple/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-multiple/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column-multiple" %}

## Select columns externally 

You can perform single column selection, multiple column selection, and range of column selection externally in a Grid using built-in methods. This feature allows you to interact with specific columns within the Grid. The following topic demonstrates how you can achieve these selections using methods.

### Single column selection

The Vue grid allows you to select a single column within the Grid. This feature is particularly useful when you want to focus on specific columns or perform actions on the data within a particular column.

To achieve single column selection, you can use the [selectColumn](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#selectcolumn) method. This method selects the column by passing the column index as a parameter.

>* Column selection requires the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#allowcolumnselection) property to **true** and [type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) should be **Single**.

The following example, demonstrates how to select a single column within the Grid by obtaining the selected column index through a textbox component and passing these column index as argument to the `selectColumn` method. When the button event is triggered by clicking the **Select Column** button, a single column is selected within the Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-signle-method/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-signle-method/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column-signle-method" %}

### Multiple column selection

The Vue Grid allows you to select multiple columns within the Grid. This feature is particularly useful when you need to focus on or perform actions on several columns simultaneously.

To achieve multiple column selection, you can use the [selectColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#selectcolumns) method. This method selects the columns by passing an array of column indexes as a parameter.

>* Column selection requires the [selectionSettings.allowColumnSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#allowcolumnselection) property to **true** and [type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) should be **Multiple**.

The following example demonstrates how to select multiple columns in the Grid by calling the `selectColumns` method within the button click event and passing an array of column indexes as arguments.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-multiple-method/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-multiple-method/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column-multiple-method" %}

### Range of column selection 

Range of column selection allows you to select a group of columns within the Grid. This feature is particularly useful when you need to perform actions on a consecutive set of columns or focus on specific column ranges.

To achieve range of column selection, you can use the [selectColumnsByRange](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#selectcolumnsbyrange) method. This method selects the columns by specifying the start and end column indexes.

The following example demonstrates how to select a range of columns within the Grid by obtaining the selected column's start index and end index through textbox components. Then, pass these start index and end index as arguments to the `selectColumnsByRange` method. When you trigger the button event by clicking the **Select Columns** button, a range of columns is selected within the Grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-range/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-range/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column-range" %}

### Select with existing column 

Select with existing column allows you to add a column to the current selection without clearing the existing column selection in the Grid component. This feature is valuable when you want to expand your selection to include additional columns while preserving previously selected columns.

To achieve this, you can use the [selectColumnWithExisting](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#selectcolumnwithexisting) method. This method selects a column along with an existing column by specifying the column index as a parameter.

The following example demonstrates how to select a column with an existing column by obtaining the selected column index through a textbox component and passing this column index as an argument to the `selectColumnWithExisting` method. When you trigger the button event by clicking the **Select Columns** button,  it selects the specified column along with any existing selections within the Grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-existing/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-existing/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column-existing" %}

##  Clear column selection programmatically 

Clearing column selection programmatically in the Grid component is a useful feature when you want to remove any existing column selections. To achieve this, you can use the [clearColumnSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#clearcolumnselection) method.

>The `clearColumnSelection` method is applicable when the selection [type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) is set to **Multiple** or **Single**.

In the following example, it demonstrates how to clear column selection by calling the `clearColumnSelection` method in the button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-clear/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-column-clear/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column-clear" %}

## Column selection events 

The Grid provides several events related to column selection that allow you to respond to and customize the behavior of column selection. Here are the available column selection events:

[columnSelecting](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnselecting): This event is triggered before any column selection occurs. It provides an opportunity to implement custom logic or validation before a column is selected, allowing you to control the selection process.

[columnSelected](https://ej2.syncfusion.com/vue/documentation/api/grid/#columnselected): This event is triggered after a column is successfully selected. You can use this event to perform actions or updates when a column is selected.

[columnDeselecting](https://ej2.syncfusion.com/vue/documentation/api/grid/#columndeselecting): This event is triggered just before a selected column is deselected. It allows you to perform custom logic or validation to decide whether the column should be deselected or not.

[columnDeselected](https://ej2.syncfusion.com/vue/documentation/api/grid/#columndeselected): This event is triggered when a particular selected column is deselected. You can use this event to perform actions or validations when a column is no longer selected.

In the following example, column selection is canceled when the value of `field` is equal to **CustomerID** within the `columnSelecting` event. The **headerCell** background color changes to green when the `columnSelected` event is triggered, and it changes to red when the `columnDeselecting` event is triggered. Furthermore, column selection is canceled when the value of `field` is equal to **CustomerID** within the `columnDeselected` event is triggered. A notification message is displayed to indicate which event was triggered whenever a column is selected.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <p id="message">{{message}}</p>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions"
        :columnSelected="columnSelected" :columnSelecting="columnselecting"
        :columnDeselected="columnDeselected" :columnDeselecting="columnDeselecting">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
          width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120">
          </e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130">
          </e-column>
          <e-column field="Freight" headerText="Freight" format="C2" width="100">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const selectionOptions = { allowColumnSelection: true};
const message = ref("");
const columnSelected = function (args) {
  message.value = `Trigger columnSelected`;
  args.headerCell.style.backgroundColor = 'rgb(96, 158, 101)';
}
const columnselecting = function (args) {
  message.value = `Trigger columnSelecting`;
  if (args.column.field == "CustomerID")
    args.cancel = true;
}
const columnDeselected = function (args) {
  message.value = `Trigger columnDeselected`;
  args.headerCell.style.backgroundColor = 'rgb(245, 69, 69)';
}
const columnDeselecting = function (args) {
  message.value = `Trigger columnDeselecting`;
  if (args.column.field == "Freight")
    args.cancel = true;
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
#message {
    color: red;
    text-align: center;
    padding: 0px 0px 10px 0px;
  }
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <p id="message">{{message}}</p>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions"
        :columnSelected="columnSelected" :columnSelecting="columnselecting"
        :columnDeselected="columnDeselected" :columnDeselecting="columnDeselecting">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
          width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120">
          </e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130">
          </e-column>
          <e-column field="Freight" headerText="Freight" format="C2" width="100">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
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
      data: data,
      message:"",
      selectionOptions :{ allowColumnSelection: true},
    };
  },
 methods: {
    columnSelected: function (args) {
        this.message = `Trigger columnSelected`;
        args.headerCell.style.backgroundColor = 'rgb(96, 158, 101)';
    },
    columnselecting: function (args) {
        this.message = `Trigger columnSelecting`;
        if (args.column.field == "CustomerID")
        args.cancel = true;
    },
    columnDeselected: function (args) {
        this.message = `Trigger columnDeselected`;
        args.headerCell.style.backgroundColor = 'rgb(245, 69, 69)';
    },
    columnDeselecting: function (args) {
        this.message = `Trigger columnDeselecting`;
        if (args.column.field == "Freight")
            args.cancel = true;
    }
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
#message {
    color: red;
    text-align: center;
    padding: 0px 0px 10px 0px;
  }
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-column-events" %}