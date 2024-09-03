---
layout: post
title: Row selection in Vue Grid component | Syncfusion
description: Learn here all about Row selection in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Row selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in Vue Grid component

Row selection in the Grid component allows you to interactively select specific rows or ranges of rows within the grid. This selection can be done effortlessly through mouse clicks or arrow keys (up, down, left, and right). This feature is useful when you want to highlight, manipulate, or perform actions on specific row within the Grid.

>To enable row selection, you should set the [selectionSettings.mode](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#mode) property to either **Row** or **Both**. This property determines the selection mode of the grid.

## Single row selection 

Single row selection allows you to select a single row at a time within the Grid. This feature is useful when you want to focus on specific rows or perform actions on the data within a particular row.

To enable single row selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#mode) property to **Row** and the [selectionSettings.type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) property to **Single**. This configuration allows you to select a only one row at a time within the grid.

Here's an example of how to enable single row selection using properties:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-single/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-single/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-single" %}

## Multiple row selection 

Multiple row selection allows you to select multiple rows within the Grid. This feature is valuable when you need to perform actions on several rows simultaneously or focus on specific data areas.

To enable multiple row selection, set the [selectionSettings.mode](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#mode) property to **Row** and the [selectionSettings.type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) property to **Multiple**. This configuration allows you to select a multiple rows at a time within the grid.

Here's an example of how to enable multiple rows selection using properties:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-multiple/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-multiple/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-multiple" %}

## Select row at initial rendering 

You have the ability to select a specific row during the initial rendering of the Grid component. This feature is particularly useful when you want to highlight or pre-select a specific row in the grid. To achieve this, you can utilize the [selectedRowIndex](https://ej2.syncfusion.com/vue/documentation/api/grid/#selectedrowindex) property provided by the Grid component.

In the following example, it demonstrates how to select a row at initial rendering:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-initial/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-initial/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-initial" %}

## Select rows in any page based on index value 

The Grid allows you to select rows in any page based on their index value. This feature is useful when you want to perform specific actions on rows, such as highlighting, applying styles, or executing operations, regardless of their location across multiple pages within the grid.

To achieve this, you can utilize the [selectRow](https://ej2.syncfusion.com/vue/documentation/api/grid/#selectrow) method and the [goToPage](https://ej2.syncfusion.com/vue/documentation/api/grid/#gotopage) method of the Grid control. By handling the [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event of `DropDownList` component, you can implement the logic to navigate to the desired page and select the row based on the index value. 

Additionally, by handling the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event of the Grid, you can maintain the selection of the desired row after completing the paging action.

The following example demonstrates how to select rows in any page based on index value using `actionComplete` and `change` event:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-any-page/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-any-page/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-any-page" %}

## Multiple row selection by single click on row 

The Grid component allows you to perform multiple row selection by simply clicking on rows one by one without pressing CTRL or SHIFT keys. This means that when you click on a row, it will be selected, and clicking on another row will add it to the selection without  unselecting the previously selected rows. To deselect a previously selected row, you can click on the row again, and it will be unselected.

To enable the simple multiple row selection, you need to set the [selectionSettings.enableSimpleMultiRowSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#enablesimplemultirowselection) property to **true**. 

The following example demonstrates how to enable multiple row selection with a single click on the Grid row using `enableSimpleMultiRowSelection` property:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-multiple-single/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-multiple-single/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-multiple-single" %}

## Select rows externally 

You can perform single row selection, multiple row selection, and range of row selection externally in a Grid using built-in methods. This feature allows you to interact with specific rows within the Grid. The following topic demonstrates how you can achieve these selections using methods.

### Single row selection

Single row selection allows you to select a single row at a time within the Grid. This feature is useful when you want to focus on specific rows or perform actions on the data within a particular row.

To achieve single row selection, you can use the [selectRow](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#selectcolumns) method. This method allows you to programmatically select a specific row within the Grid by specifying its index.

The following example demonstrates how to select a single row within the Grid by obtaining the selected row index through a textbox component and passing these row index as argument to the `selectRow` method. When the button event is triggered by clicking the **Select Row** button, a single row is selected within the Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-single-method/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-single-method/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-single-method" %}

### Multiple rows selection

The Vue Grid allows you to select multiple rows within the grid simultaneously. This feature is valuable when you need to perform actions or operations on several rows at once or focus on specific areas of your data.

To achieve multiple row selection, you can use the [selectRows](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#selectrows) method. This method allows you to select a collection of rows by specifying their indexes, giving you the ability to interact with multiple rows together.

The following example, demonstrates how to select multiple rows in the Grid by calling the `selectRows` method within the button click event and passing an array of row indexes as arguments.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-multiple-method/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-multiple-method/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-multiple-method" %}

### Range of rows selection 

Range of row selection in the Grid enables you to select a continuous range of rows within the grid. This feature is particularly useful when you want to perform actions on multiple rows simultaneously or focus on a specific range of data.

To achieve range of row selection, you can use the [selectRowsByRange](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#selectcolumnsbyrange) method. This method selects a range of rows from start and end row indexes.
 
The following example, demonstrates how to select a range of rows within the Grid by obtaining the selected rows start index and end index through textbox components. Then, pass these start index and end index as arguments to the `selectRowsByRange` method. When you trigger the button event by clicking the **Select Rows** button, a range of rows is selected within the Grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-range/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-range/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-range" %}

## Select grid rows based on certain condition

You can programmatically select specific rows in the Vue Grid component based on a certain condition. This feature is particularly useful when you need to dynamically highlight or manipulate specific rows in the grid based on custom conditions. This functionality can be achieved using the [selectRows](https://ej2.syncfusion.com/vue/documentation/api/grid/#selectrows) method in the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event of Grid and  [rowDataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) along with obtaining the index value based on the condition.

In the below demo, we have selected the grid rows only when **EmployeeID** column value greater than **3**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-condition/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-condition/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-condition" %}

## How to get selected row indexes 

You can retrieve the indexes of the currently selected rows in the Grid component. This feature is particularly useful when you need to perform actions or operations specifically on the selected rows. 

To achieve this, you can leverage the [getSelectedRowIndexes](https://ej2.syncfusion.com/vue/documentation/api/grid/#getselectedrowindexes) method, which returns an array of numbers representing the indexes of the selected rows.

The following example demonstrates how to get selected row indexes using  `getSelectedRowIndexes` method: 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="padding: 10px 0px 20px 0px">
      <ejs-button class="btn" @click="onClick">Get selected row indexes</ejs-button >
    </div>
    <p  id="message">{{showMessage}}</p>
    <ejs-grid ref="grid" :dataSource="data" height="315px" :selectionSettings="selectionOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
import { ref } from "vue";
const grid = ref(null);
const showMessage = ref("");
const selectionOptions = { type: "Multiple", mode: "Row" };
const onClick = function () {
  const selectedRowIndexes = grid.value.getSelectedRowIndexes();
  if (selectedRowIndexes.length > 0)
    showMessage.value = "Selected row indexes:" + selectedRowIndexes.join(", ");
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
    <div style="padding: 10px 0px 20px 0px">
      <ejs-button class="btn" @click="onClick">Get selected row indexes</ejs-button >
    </div>
    <p  id="message">{{showMessage}}</p>
    <ejs-grid ref="grid" :dataSource="data" height="315px" :selectionSettings="selectionOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      showMessage: "",
      selectedRowIndexes: [],
      selectionOptions: { type: "Multiple" },
    };
  },
  methods: {
    onClick: function () {
      this.selectedRowIndexes = this.$refs.grid.ej2Instances.getSelectedRowIndexes();
      if (this.selectedRowIndexes.length > 0)
        this.showMessage ="Selected row indexes:" + this.selectedRowIndexes.join(", ");
    },
  }
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
#message {
  color: red;
  text-align: center;
  padding: 0px 0px 10px 0px;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-indexes" %}

## How to get selected records on various pages 

The Grid component allows you to retrieve the selected records even when navigating to different pages. This feature is useful when working with large data sets and allows you to perform actions on the selected records across multiple pages. 

To persist the selection across pages, you need to enable the [persistSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#persistselection) property. By default, this property is set to **false**. To enable it, set the value to **true** in the `selectionSettings` property of the Grid component.

To retrieve the selected records from different pages, you can use the  [getSelectedRecords](https://ej2.syncfusion.com/vue/documentation/api/grid/#getselectedrecords) method. This method returns an array of the selected records.

The following example demonstrates how to retrieve selected records from various pages using the `getSelectedRecords` method and display **OrderID** in a dialog when a button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-various-pages/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-various-pages/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-various-pages" %}

> To persist the grid selection, it is necessary to define any one of the columns as a primary key using the [columns](https://ej2.syncfusion.com/vue/documentation/api/grid/#columns) property.

## How to get selected records  

The get selected records allows you to retrieve the data of the selected rows from the Grid component. This can be particularly useful when you need to perform actions on the selected data or display specific information based on the selected rows.

To retrieve the selected records, you can use the [getSelectedRecords](https://ej2.syncfusion.com/vue/documentation/api/grid/#getselectedrecords) method. This method allows you to obtain an array of objects representing the selected records.

Here's an example that displays the selected row count using the `getSelectedRecords` method:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="padding: 20px 0px">
      <ejs-button @click="onClick">Selected Records count</ejs-button>
    </div>
    <p id="message">{{ showMessage }}</p>
    <div class="control-section">
      <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :allowSelection="true" 
        :selectionSettings="selectionOptions">
        <e-columns>
          <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" width="120" 
          textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column>
          <e-column type="date" field="OrderDate" headerText="Order Date" width="130" format="yMd" 
          textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="100" format="C2" 
          textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130" format="yMd" ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

const grid = ref(null);
const showMessage = ref('');
const selectionOptions = { type: 'Multiple', persistSelection: true };

const onClick = () => {
  const selectedRecordscount = grid.value.getSelectedRecords().length;
  showMessage.value = "Selected record count: " + selectedRecordscount;
};

provide('grid', [Page]);
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
    <div style="padding: 20px 0px">
      <ejs-button @click="Onclick">Selected Records count</ejs-button>
    </div>
    <p id="message" > {{ showMessage }}</p>
    <div class="control-section">
      <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :allowSelection="true" 
      :selectionSettings="selectionOptions">
        <e-columns>
          <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" width="120" 
          textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column>
          <e-column type="date" field="OrderDate" headerText="Order Date" width="130" format="yMd" 
          textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="100" format="C2" 
          textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130" format="yMd" ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective,Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: data,
      showMessage :"",
      selectionOptions : { type: 'Multiple',persistSelection: true  }
    };
  },
  methods: {
    Onclick() {
      var selectedRecordscount = this.$refs.grid.getSelectedRecords().length;
      this.showMessage = "Selected record count:" + selectedRecordscount ;
    }
  },
  provide:{
    grid:[Page]
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
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-records" %}

## Clear row selection programmatically 

Clearing row selection programmatically in the Grid component is a useful feature when you want to remove any existing row selections. To achieve this, you can use the [clearRowSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/#clearrowselection) method.

>* The `clearRowSelection` method is applicable when the selection [type](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#type) is set to **Multiple** or **Single**.

The following example demonstrates how to clear row selection by calling the [clearRowSelection](https://ej2.syncfusion.com/vue/documentation/api/grid/#clearselection) method in the button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-clear/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/select/selection-row-clear/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-clear" %}

## Row selection events 

The Grid provides several events related to row selection that allow you to respond to and customize the behavior of row selection. These events give you control over various aspects of row selection. Here are the available row selection events:

[rowSelecting](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowselecting): This event is triggered before any row selection occurs. It provides an opportunity to implement custom logic or validation before a row is selected, allowing you to control the selection process.

[rowSelected](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowselected): This event is triggered after a row is successfully selected. You can use this event to perform actions or updates when a row is selected.

[rowDeselecting](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdeselecting): This event is triggered just before a selected row is deselected. It allows you to perform custom logic or validation to decide whether the row should be deselected or not.

[rowDeselected](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdeselected): This event is triggered when a particular selected row is deselected. You can use this event to perform actions or validations when a row is no longer selected.

In the following example, row selection is canceled when the value of **CustomerID** is equal to **VINET** within the `rowSelecting` event. The background color changes to green when the value of **Freight** is greater than 10 and less than or equal to 140, triggering the `rowDeselected` event. The background color changes to red when the value of **Freight** is less than or equal to 10 during the `rowDeselected` event. Furthermore, the background color changes to yellow when the value of **Freight** is greater than 140 during the `rowDeselected` event. A notification message is displayed to indicate which event was triggered whenever a row is selected.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <p id="message">{{message}}</p>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :enableHover='false' :dataSource="data"
       :selectionSettings="selectionOptions" :rowSelected="rowSelected"
       :rowSelecting="rowselecting" :rowDeselected="rowDeselected"
       :rowDeselecting="rowDeselecting">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
          </e-column>
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
import{ref} from"vue"
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns} from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const selectionOptions = { mode: 'Row', type: 'Multiple' };
const message = ref("");
const rowselecting = function(args) {
  message.value = `Trigger rowSelecting`;
  if (args.data.CustomerID == 'VINET')
    args.cancel = true;
}
const rowSelected = function(args) {
  message.value = ` Trigger rowSelected`;
  if (args.data.Freight > 10 || args.data.Freight <= 140)
    args.row.style.backgroundColor = 'rgb(96, 158, 101)';
}
const rowDeselecting = function(args) {
  message.value = `Trigger rowDeselecting`;
  if (args.data.Freight > 140)
    args.row.style.backgroundColor = 'yellow';
}
const rowDeselected = function(args) {
  message.value = `Trigger rowDeselected`;
  if (args.data.Freight <= 10)
    args.row.style.backgroundColor = 'red';
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
      <ejs-grid ref="grid" :enableHover='false' :dataSource="data"
       :selectionSettings="selectionOptions" :rowSelected="rowSelected"
       :rowSelecting="rowselecting" :rowDeselected="rowDeselected"
       :rowDeselecting="rowDeselecting">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
          </e-column>
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
import { GridComponent, ColumnsDirective, ColumnDirective} from "@syncfusion/ej2-vue-grids";
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
      selectionOptions : { mode: 'Row', type: 'Multiple' },
    };
  },
  methods: {
   rowselecting(args) {
        this.message = `Trigger rowSelecting`;
        if (args.data.CustomerID == 'VINET')
        args.cancel = true;
    },
    rowSelected(args) {
        this.message = ` Trigger rowSelected`;
        if (args.data.Freight > 10 || args.data.Freight <= 140)
            args.row.style.backgroundColor = 'rgb(96, 158, 101)'; 
    },
    rowDeselecting(args) {
       this.message = `Trigger rowDeselecting`;
        if (args.data.Freight > 140)
            args.row.style.backgroundColor = 'yellow';
        },
    rowDeselected(args) {
        this.message = `Trigger rowDeselected`;
        if (args.data.Freight <= 10)
           args.row.style.backgroundColor = 'red';
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
        
{% previewsample "page.domainurl/code-snippet/grid/select/selection-row-events" %}