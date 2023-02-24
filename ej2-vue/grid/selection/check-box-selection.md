---
layout: post
title: Check box selection in Vue Grid component | Syncfusion
description: Learn here all about Check box selection in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Check box selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Check box selection in Vue Grid component

Checkbox Selection provides an option to select multiple Grid records with help of checkbox in each row.

To render checkbox in each grid row, you need to use checkbox column with type as `CheckBox` using column [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#type) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs3" %}

> By default selection is allowed by clicking a grid row or checkbox in that row. To allow Selection only through checkbox, you can set [`selectionSettings.checkboxOnly`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#checkboxonly) property to true.
> Selection can be persisted on all the operations using [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#persistselection) property.
For persisting selection on the Grid, any one of the column should be defined as a primary key using [`columns.isPrimaryKey`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, selection can also be done by clicking on rows. This selection provides two types of Checkbox Selection mode which can be set by using the following API,[`selectionSettings.checkboxMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#checkboxmode). The modes are;

* **`Default`**: This is the default value of the checkboxMode. In this mode, user can select multiple rows by clicking rows one by one.
* **`ResetOnRowClick`**: In ResetOnRowClick mode, when user clicks on a row it will reset previously selected row. Also you can perform multiple-selection in this mode by press
and hold CTRL key and click the desired rows. To select range of rows, press and hold the SHIFT key and click the rows.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs4" %}

## Prevent specific rows from being selected in checkbox selection

You can prevent specific rows from being selected in the checkbox selection mode by hiding the checkboxes using the [rowDataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdatabound) event. You achieve this by setting the [isSelectable](https://ej2.syncfusion.com/vue/documentation/api/grid/rowDataBoundEventArgs/#isselectable) argument as false in the `rowDataBound` event based on certain conditions as per the needs of the application.

In the following sample, the selection of specific rows has been prevented based on the `isSelectable` argument in the `rowDataBound` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs5" %}