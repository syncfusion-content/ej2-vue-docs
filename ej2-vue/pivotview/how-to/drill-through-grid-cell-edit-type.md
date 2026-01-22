---
layout: post
title: Drill through grid cell edit type in Vue | Syncfusion
description: Learn here all about Drill through grid cell edit type in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Drill through grid cell edit type 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drill-through grid cell edit type in the Vue Pivot Table component

The drill-through feature in the Pivot Table allows users to view the raw data behind aggregated values by opening a detailed grid dialog. When this dialog appears, you can customize the edit behavior of specific columns to provide appropriate input controls based on their data types.

Using the [`drillThrough`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#drillthrough) event in the Pivot Table, you can define the edit type for any column in the drill-through grid. This is accomplished by checking the column name within the event handler and setting the appropriate edit type using the [`gridColumns.editType`](https://ej2.syncfusion.com/vue/documentation/api/grid/column#edittype) event argument.

## Edit type options

The following edit types are available for different data types:

* [`NumericTextBox`](https://ej2.syncfusion.com/vue/documentation/numerictextbox/getting-started) - For integer, double, and decimal data types.
* [`TextBox`](https://ej2.syncfusion.com/vue/documentation/textbox/getting-started) - For string data type.
* [`DropDownList`](https://ej2.syncfusion.com/vue/documentation/drop-down-list/getting-started) - To display all unique values for that field.
* [`CheckBox`](https://ej2.syncfusion.com/vue/documentation/check-box/getting-started) - For boolean data type.
* [`DatePicker`](https://ej2.syncfusion.com/vue/documentation/datepicker/getting-started) - For date data type.
* [`DateTimePicker`](https://ej2.syncfusion.com/vue/documentation/datetimepicker/getting-started) - For date time data type.

> The [`gridColumns.editType`](https://ej2.syncfusion.com/vue/documentation/api/grid/column#edittype) property must be set based on the column's data type. For example, string data will not work properly with numeric text box edit type.

## Implementation example

The following example demonstrates how to set the **Country** column to use a `DropDownList` edit type in the drill-through grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs138/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs138/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs138" %}