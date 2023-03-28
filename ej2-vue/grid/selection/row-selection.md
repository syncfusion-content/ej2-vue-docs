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

## Select row at initial rendering

To select a row at initial rendering, set the [`selectedRowIndex`](https://ej2.syncfusion.com/vue/documentation/api/grid/#selectedrowindex) value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs7" %}

## Get selected row indexes

You can get the selected row indexes by using the [`getSelectedRowIndexes`](https://ej2.syncfusion.com/vue/documentation/api/grid/#getselectedrowindexes) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs8" %}

## Simple multiple row selection

You can select multiple rows by clicking on rows one by one. This will not deselect the previously selected rows. To deselect the previously selected row, you can click on the  selected row. You can enable this behavior by using [`selectionSettings.enableSimpleMultiRowSelection`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#enablesimplemultirowselection) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs9" %}

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell or column. To enable toggle selection, set [`enableToggle`](https://ej2.syncfusion.com/vue/documentation/api/grid/selectionSettings/#enabletoggle) property of the selectionSettings as true. If you click on the selected row or cell or column then it will be unselected and vice versa.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs10" %}

> If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.

## Clear selection programmatically

You can clear the Grid selection programmatically by using the [clearSelection](https://ej2.syncfusion.com/vue/documentation/api/grid#clearselection) method.

In the demo below, we initially selected the third row using [selectedRowIndex](https://ej2.syncfusion.com/vue/documentation/api/grid#selectedrowindex). You can clear this selection by calling the [clearSelection](https://ej2.syncfusion.com/vue/documentation/api/grid#clearselection) method in the button click event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs11" %}

## Get selected records on various pages

Enabling the selectionSettings.persistSelection property will persist the selection in all Grid operations.

So the selection will be maintained on every page even after navigating to another page.

You can get the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/vue/documentation/api/grid#getselectedrecords) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/select/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/select/default-cs12" %}

> To persist the grid selection, it is necessary to define any one of the columns as a primary key using the columns.isPrimaryKey property.