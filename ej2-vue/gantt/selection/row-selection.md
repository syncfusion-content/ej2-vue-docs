---
layout: post
title: Row selection in Vue Gantt component | Syncfusion
description: Learn here all about Row selection in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Row selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in Vue Gantt component

The row selection in the Gantt component can be enabled or disabled using the [`allowSelection`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowselection) property. You can get the selected row object using the [`getSelectedRecords`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection/#getselectedrecords) method. The following code example shows how to disable the row selection in Gantt.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs5" %}

> `Row` selection is the default type of Gantt selection mode.

## Selecting a row on initial load

You can select a row at the time of loading by setting the index of the row to the [`selectedRowIndex`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#selectedrowindex) property. Find the following code example for details.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs6" %}

## Selecting a row dynamically

You can select a single row dynamically using the [`selectRow`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection/#selectrow) method. Similarly, you can use the [`selectRows`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection/#selectrows) method to dynamically select multiple rows. The following code demonstrates how to select a single or multiple rows dynamically by clicking the custom button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs7" %}

## Multiple row selection

You can select multiple rows by setting the [`selectionSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettings/#type) property to multiple. You can select more than one row by holding down the CTRL key while selecting multiple rows. The following code example explains how to enable multiple selection in Gantt.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs8" %}

## Customize row selection action

While selecting a row in Gantt, the [`rowSelecting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowselecting) and [`rowSelected`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowselected) events will be triggered. The the [`rowSelecting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowselecting) event will be triggered on initialization of row selection, and you can get the previously selected row and current selecting row’s information, which is used to prevent selection of a particular row. The [`rowSelected`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowselected) event will be triggered on completion of row selection action, and you can get the current selected row’s information through this event. The following code example demonstrates how to prevent the selection of a row using the [`rowSelecting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowselecting) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/selection-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs10" %}

In the Gantt component, when you click an already selected row, selection will be cleared. While deselecting a row in Gantt, the [`rowDeselecting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowdeselecting) and [`rowDeselected`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowdeselected) events will occur. The [`rowDeselecting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowdeselecting) event will occur on initialization of deselecting row, and you can get the current deselecting row’s information to prevent the deselection of particular row. The [`rowDeselected`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowdeselected) event will occur on completion of row deselection action, and you can get the current deselected row’s information.