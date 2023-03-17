---
layout: post
title: Sorting in Vue Gantt component | Syncfusion
description: Learn here all about Sorting in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Sorting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Vue Gantt component

Sorting enables you to sort data in the ascending or descending order. To sort a column, click the column header.

To sort multiple columns, press and hold the CTRL key and click the column header. You can clear sorting of any one of the multi-sorted columns by pressing and holding the SHIFT key and clicking the specific column header.

To enable sorting in the Gantt component, set the [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowsorting) property to `true`. Sorting options can be configured through the [`sortSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/sortSettings/) property.

To sort data, inject the [`Sort`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#sortmodule) module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/sorting-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/sorting-cs1" %}

> * Gantt columns are sorted in the ascending order. If you click the already sorted column, the sort direction toggles.
> * To disable sorting for a particular column, set the [`columns.allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#allowsorting) property to `false`.

## Sorting column on Gantt initialization

The Gantt component can be rendered with sorted columns initially, and this can be achieved by using the [`sortSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/sortSettings/) property. You can add columns that are sorted initially in the [`sortSettings.columns`](https://ej2.syncfusion.com/vue/documentation/api/gantt/sortSettings/#columns) collection defined with [`field`](https://ej2.syncfusion.com/vue/documentation/api/gantt/sortDescriptorModel/#field) and [`direction`](https://ej2.syncfusion.com/vue/documentation/api/gantt/sortDescriptorModel/#direction) properties. The following code example shows how to add the sorted column to Gantt initialization.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/sorting-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/sorting-cs2" %}

## Sorting column dynamically

Columns in the Gantt component can be sorted dynamically using the [`sortColumn`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#sortcolumn) method. The following code example demonstrates how to invoke the [`sortColumn`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#sortcolumn) method by clicking the custom button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/sorting-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/sorting-cs3" %}

## Clear all the sorting dynamically

In the Gantt component, you can clear all the sorted columns and return to previous position using the [`clearSorting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#clearsorting) public method. The following code snippet shows how to clear all the sorted columns by clicking the custom button.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/sorting-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/sorting-cs4" %}

## Sorting events

During the sort action, the Gantt component triggers two events. The [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#actionbegin) event triggers before the sort action starts, and the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#actioncomplete) event triggers after the sort action is completed.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/sorting-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/sorting-cs5" %}

> The `args.requestType` is the current action name. For example, for sorting the `args.requestType`, value is sorting.
