---
layout: post
title: Column reorder in Vue Grid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column reorder 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column reorder in Vue Grid component

Reordering can be done by drag and drop of a particular column header from one index to another index within the grid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowreordering) to true.

To use Reordering, you need to inject `Reorder` module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs11" %}

> * You can disable reordering a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowreordering) to false.
> * In RTL mode, you can click and drag the left edge of the header cell to resize the column.

## Reorder single column

Grid have option to reorder Columns either by Interaction or by using the `reorderColumns` method. In the below sample, `ShipCity` column is reordered to last column position by using the method.

In the below sample, `Ship City` and `Ship Region` column is reordered to last column position.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs12" %}

## Reorder multiple columns

User can reorder a single column at a time by Interaction. Sometimes we need to have reorder multiple columns at the same time, It can be achieved through programmatically by using `reorderColumns` method.

In the below sample, `Ship City` and `Ship Region` column is reordered to last column position.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs13" %}

## Reorder events

During the reorder action, the grid component triggers the below three events.

1. The `columnDragStart` event triggers when column header element drag (move) starts.
2. The `columnDrag` event triggers when column header element is dragged (moved) continuously.
3. The `columnDrop` event triggers when a column header element is dropped on the target column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs14" %}