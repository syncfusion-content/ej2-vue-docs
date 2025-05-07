---
layout: post
title: Filter menu in Vue Grid component | Syncfusion
description: Learn here all about Filter menu in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Filter menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in Vue Grid component

The filter menu in the Vue Grid component allows you to enable filtering and provides a user-friendly interface for filtering data based on column types and operators.

To enable the filter menu, you need to set the [filterSettings.type](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings) property to **Menu**. This property determines the type of filter UI that will be rendered. The filter menu UI allows you to apply filters using different operators.

Here is an example that demonstrates the usage of the filter menu in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/filter-menu-cs1" %}

> * [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowfiltering) must be set as true to enable filter menu.
> * By setting [columns.allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowfiltering) as false will prevent filter menu rendering for a particular column.

## Custom component in filter menu

You can enhance the filtering experience in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component by customizing the filter menu with custom components. This allows you to replace the default search box with custom components like dropdowns or textboxes. By default, the filter menu provides an autocomplete component for string type columns, a numeric textbox for number type columns, and a dropdown component for boolean type columns, making it easy to search for values.

To customize the filter menu, you can make use of the [column.filter.ui](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#filter) property. This property allows you to integrate your desired custom filter component into a specific column of the Grid. To implement a custom filter UI, you need to define the following functions:

* **create**: This function is responsible for creating the custom component for the filter.
* **write**: The write function is used to wire events for the custom component. This allows you to handle changes in the custom filter UI.
* **read**: The read function is responsible for reading the filter value from the custom component. This is used to retrieve the selected filter value.

For example, you can replace the standard search box in the filter menu with a dropdown component. This enables you to perform filtering operations by selecting values from the dropdown list, rather than manually typing in search queries.

Here is a sample code demonstrating how to render a dropdownlist component for the **CustomerID** column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/filter-menu-cs2" %}

**Default filter input for CustomerID column**
![Default filter input for CustomerID column](../images/filter-menu-auto-complete.gif)
**Custom dropdown filter for CustomerID column**
![Custom dropdown filter for CustomerID column](../images/filter-menu-drop-down.gif)

## Show 24 hours time format in filter dialog

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid provides a feature to display the time in a 24-hour format in the date or datetime column filter dialog. By default, the filter dialog displays the time in a 12-hour format (AM/PM) for the date or datetime column. However, you can customize the default format by setting the type as **dateTime** and the format as **M/d/y HH:mm**. To enable the 24-hour time format in the filter dialog, you need to handle the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event with [requestType](https://ej2.syncfusion.com/vue/documentation/api/grid/filterEventArgs/#requesttype) as [filterAfterOpen](https://ej2.syncfusion.com/vue/documentation/api/grid/action/) and set the `timeFormat` of the `DateTimepicker` to **HH:mm**.

Here is an example that demonstrates how to show 24 hours time format in filter dialog:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/filter-menu-cs3" %}

## Customizing filter menu operators list

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid enables you to customize the default filter operator list by utilizing the [filterSettings.operators](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#operators) property. This feature allows you to define your own set of operators that will be available in the filter menu. You can customize operators for string, number, date, and boolean data types.

The available options for customization are:

* **stringOperator**- defines customized string operator list.
* **numberOperator** - defines customized number operator list.
* **dateOperator** - defines customized date operator list.
* **booleanOperator** - defines customized boolean operator list.
  
Here is an example of how to customize the filter operators list in Syncfusion<sup style="font-size:70%">&reg;</sup> vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/filter-menu-cs4" %}

## Filter by multiple keywords using filter menu

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid allows you to perform filtering actions based on multiple keywords, rather than a single keyword, using the filter menu dialog. To enable this feature, you can set [filterSettings.type](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#type) as **Menu** and render the `MultiSelect` component as a custom component in the filter menu dialog.

Here is an example that demonstrates how to perform filtering by multiple keywords using the filter menu in the Syncfusion<sup style="font-size:70%">&reg;</sup> vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/filter-menu-cs5" %}

## Customize the default input component of filter menu dialog

You have the flexibility to customize the default settings of input components within the menu filter by utilizing the `params` property within the column definition of [filter](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#filter). This allows you to modify the behavior of specific filter components to better suit your needs.

| Column Type | Default component                                                                                 | Customization                            | API Reference                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| String      | [AutoComplete](https://ej2.syncfusion.com/vue/documentation/auto-complete/getting-started)    | Eg: { params: { autofill: false }}       | [AutoComplete API](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/autoCompleteModel/) |
| Number      | [NumericTextBox](https://ej2.syncfusion.com/vue/documentation/numerictextbox/getting-started) | Eg: { params: { showSpinButton: false }} | [NumericTextBox API](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox)                 |
| Boolean     | [DropDownList](https://ej2.syncfusion.com/vue/documentation/drop-down-list/getting-started)   | Eg: { params: { sortOrder:'Ascending'}}  | [DropDownList API](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list)                   |
| Date        | [DatePicker](https://ej2.syncfusion.com/vue/documentation/datepicker/getting-started)         | Eg: { params: { weekNumber: true }}      | [DatePicker API](https://ej2.syncfusion.com/vue/documentation/api/datepicker)                         |
| DateTime    | [DateTimePicker](https://ej2.syncfusion.com/vue/documentation/datetimepicker/getting-started) | Eg: { params: { showClearButton: true }} | [DateTimePicker API](https://ej2.syncfusion.com/vue/documentation/api/datetimepicker)                 |

> To know more about the feature, refer to the Getting Started documentation and API Reference

In the example provided below, the **OrderID** and **Freight** columns are numeric columns. When you open the filter dialog for these columns, you will notice that a `NumericTextBox` with a spin button is displayed to change or set the filter value. However, using the `params` property, you can hide the spin button specifically for the **OrderID** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/filter-menu-cs6" %}

### Prevent autofill option in autocomplete of menu filter

By default, the [AutoComplete](https://ej2.syncfusion.com/vue/documentation/auto-complete/getting-started) component in the filter menu dialog is set to automatically fill suggestions as you type. However, there might be scenarios where you want to prevent this autofill behavior to provide a more customized and controlled user experience.

You can prevent autofill feature by setting the [autofill](https://ej2.syncfusion.com/vue/documentation/api/auto-complete#autofill) parameter to **false** using the `params` property within the column definition of the [filter](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#filter). 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/filter-menu-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/filter-menu-cs7" %}

## Hide default filter icons while perform filtering through method

When performing filtering programmatically using methods in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid component, you may want to hide the default filter icons to provide a simpler interface.

To customize the filter icon in the Grid, use the **display** property of the **filtermenu** as mentioned below

```css
.e-filtermenudiv.e-icons.e-icon-filter {
    display: none;
}
```

The following example demonstrate how to hide the default filter icons while filtering the **CustomerID** column programmatically using a method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/default-default-filter/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/default-default-filter/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-default-filter" %}

## Filter menu events

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid offers the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) and [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid#actioncomplete) events, which provide information about the actions being performed. Within the event handlers, you receive an argument named `requestType`. This argument specifies the [action](https://ej2.syncfusion.com/vue/documentation/api/grid/action/) that is being executed, such as `filterbeforeopen`, `filterafteropen`, or `filtering`. By analyzing this action type, you can implement custom logic or showcase messages.

**filtering** - Defines current action as filtering.
**filterbeforeopen** - Defines current action as filter dialog before open.
**filterafteropen** - Defines current action as filter dialog after open.

Here's an example of how to use these events to handle filter menu action in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div class='message'>{{actionBeginMessage}}</div><div class='message'>{{actionCompleteMessage}}</div>
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' 
      :actionBegin="actionBegin" :actionComplete="actionComplete" height='273px'>
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=120></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
provide('grid',  [Filter]);

const grid = ref(null);
const filterOptions = {
    type: 'Menu'
};
let actionBeginMessage=ref(null);
let actionCompleteMessage=ref(null);

const actionBegin = (args) => {
    if (args.requestType == 'filterBeforeOpen' && args.columnType === "number") {
        args.filterModel.customFilterOperators.numberOperator = [
        { value: "equal", text: "Equal" },
        { value: "notequal", text: "Not Equal" }];
        actionBeginMessage.value ='Filter operators for number column were customized using the filterbeforeopen action in the actionBegin event';
    }
    else{
      actionBeginMessage.value = args.requestType + ' action is triggered in actionBegin event'
    }
    if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
      args.cancel=true;
      actionBeginMessage.value = args.requestType + ' is not allowed for ShipCity column';
    }
  }

const actionComplete = (args) => {
    if (args.requestType === 'filterAfterOpen') {
      actionCompleteMessage.value ='Applied CSS for filter dialog during filterafteropen action';
      args.filterModel.dlgDiv.querySelector('.e-dlg-content').style.background = '#eeeaea';
      args.filterModel.dlgDiv.querySelector('.e-footer-content').style.background = '#30b0ce';
    }
    if(args.requestType == 'filtering'){
      actionCompleteMessage.value = args.requestType + ' action is triggered in actionComplete event';
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

.message {
  padding: 10px;
  margin-top: 10px;
  display: block;
  color: red;
  text-align: center;
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div class='message'>{{actionBeginMessage}}</div><div class='message'>{{actionCompleteMessage}}</div>
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' 
      :actionBegin="actionBegin" :actionComplete="actionComplete" height='273px'>
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=120></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
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
      actionBeginMessage:'',
      actionCompleteMessage:'',
      filterOptions: {
        type: 'Menu'
      },
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType == 'filterBeforeOpen' && args.columnType === "number") {
        args.filterModel.customFilterOperators.numberOperator = [
        { value: "equal", text: "Equal" },
        { value: "notequal", text: "Not Equal" }];
        this.actionBeginMessage ='Filter operators for number column were customized using the filterbeforeopen action in the actionBegin event';
    }
    else{
      this.actionBeginMessage = args.requestType + ' action is triggered in actionBegin event'
    }
    if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
      args.cancel=true;
      this.actionBeginMessage = args.requestType + ' is not allowed for ShipCity column';
    }
    },
    actionComplete: function (args) {
      if (args.requestType === 'filterAfterOpen') {
        this.actionCompleteMessage ='Applied CSS for filter dialog during filterafteropen action';
        args.filterModel.dlgDiv.querySelector('.e-dlg-content').style.background = '#eeeaea';
        args.filterModel.dlgDiv.querySelector('.e-footer-content').style.background = '#30b0ce';
      }
      if(args.requestType == 'filtering'){
        this.actionCompleteMessage = args.requestType + ' action is triggered in actionComplete event';
      }
    }
  },
  provide: {
    grid: [Filter]
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

.message {
  padding: 10px;
  margin-top: 10px;
  display: block;
  color: red;
  text-align: center;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/filter-menu-cs8" %}

## Troubleshoot filter menu operator issue

When using the filter menu, the UI displays operators for all columns based on the data type of the first data it encounters. If the first data is empty or null, it may not work correctly. To overcome this issue, follow these steps to troubleshoot and resolve it:

**Explicitly Define Data Type:** When defining columns in your Vue Grid component, make sure to explicitly specify the data type for each column. You can do this using the type property within the columns configuration. For example:

```ts
<ejs-grid :dataSource='data'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' width=120></e-column>
        <e-column field='CustomerName' headerText='Customer Name' type='string' width=150>
        </e-column>
        <!-- Define data types for other columns as needed -->
    </e-columns>
</ejs-grid>
```

**Handle Null or Empty Data:** If your data source contains null or empty values, make sure that these values are appropriately handled within your data source or by preprocessing your data to ensure consistency.

**Check Data Types in Data Source:** Ensure that the data types specified in the column definitions match the actual data types in your data source. Mismatched data types can lead to unexpected behavior.

## See also

* [How to perform filter by using Wildcard and LIKE operator filter](./filtering/#wildcard-and-like-operator-filter)