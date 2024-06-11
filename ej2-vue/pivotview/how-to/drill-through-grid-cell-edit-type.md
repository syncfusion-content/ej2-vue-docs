---
layout: post
title: Drill through grid cell edit type in Vue Pivotview component | Syncfusion
description: Learn here all about Drill through grid cell edit type in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Drill through grid cell edit type 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drill through grid cell edit type in Vue Pivotview component

Using the [`drillThrough`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#drillthrough) event in the pivot table, you can define the edit type of a particular column in the grid present inside the drill-through dialog. To do so, check the column name in the [`drillThrough`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#drillthrough) event and then specify the edit type of that column using the [`gridColumns.editType`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittype) event argument.

> The [`gridColumns.editType`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittype) property must be set based on the column's data type. For example, the string data type will not be applicable for the numeric text box edit type.

* [`NumericTextBox`](https://ej2.syncfusion.com/vue/documentation/numerictextbox/) control for integer, double, and decimal data types.
* [`TextBox`](https://ej2.syncfusion.com/vue/documentation/textbox/) control for string data type.
* [`DropDownList`](https://ej2.syncfusion.com/vue/documentation/drop-down-list/) control to show all unique values related to that field.
* [`CheckBox`](https://ej2.syncfusion.com/vue/documentation/check-box/) control for boolean data type.
* [`DatePicker`](https://ej2.syncfusion.com/vue/documentation/datepicker/) control for date data type.
* [`DateTimePicker`](https://ej2.syncfusion.com/vue/documentation/datetimepicker/) control for date time data type.

In the below example, the data type of the `Country` column is set to `DropDownList`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs138/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs138/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs138" %}