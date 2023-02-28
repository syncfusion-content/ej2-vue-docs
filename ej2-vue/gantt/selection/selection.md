---
layout: post
title: Selection in Vue Gantt component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Vue Gantt component

Selection provides an option to highlight a row or a cell. It can be done using arrow keys or by scrolling down the mouse. To disable selection in the Gantt component, set the [`allowSelection`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowselection) to `false`.

To select data, inject the [`Selection`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#selectionmodule) module in the `provide` section.

The Gantt component supports two types of selection that can be set by using the [`selectionSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings/#type) property. They are:

* `Single`: Sets a single value by default and allows only selection of a single row or a cell.
* `Multiple`: Allows you to select multiple rows or cells. To perform the multi-selection, press and hold the CTRL key and click the desired rows or cells.

## Selection mode

The Gantt component supports three types of selection modes that can be set by using the [`selectionSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings/#mode). They are:

* `Row`: Allows you to select only rows, and the row value is set by default.
* `Cell`: Allows you to select only cells.
* `Both`: Allows you to select rows and cells at the same time.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs11" %}

## Toggle selection

The toggle selection allows you to select and deselect a specific row or cell. To enable toggle selection, set the `enableToggle` property of the selectionSettings to `true`. If you click the selected row or cell, then it will be deselected and vice versa. By default, the `enableToggle` property is set to `false`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs12" %}

## Clear selection

You can clear the selected cells and selected rows by using a method called [`clearSelection`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#clearselection). The following code example demonstrates how to clear the selected rows in Gantt Chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs13" %}

## Get selected row indexes and records

You can get the selected row indexes by using the [`getSelectedRowIndexes`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#getselectedrowindexes) method. And by using [`getSelectedRecords`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#getSelectedRecords) method, you can get the selected record details.

{{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs14" %}

## Multiple Selection based on condition

You can select multiple rows based on condition by using the [`selectRows`](https://ej2.syncfusion.com/vue/documentation/api/grid/#selectrows) method.

In the following code, the rows which contains `TaskId` value as 3 and 4 are selected at initial rendering.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs15" %}

## See Also

* [Touch interaction](./touch-interaction/#selection)