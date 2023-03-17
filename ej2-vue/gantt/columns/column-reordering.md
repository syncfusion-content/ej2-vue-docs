---
layout: post
title: Column reordering in Vue Gantt component | Syncfusion
description: Learn here all about Column reordering in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Column reordering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column reordering in Vue Gantt component

The column reordering can be done by dragging a column header from one index to another index within the TreeGrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowreordering) property to `true`.

To reorder the columns, inject the `Reorder` module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs7" %}

> You can disable the reordering of a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#allowreordering) property to `false`.

## Reorder Events

During the reorder action, the gantt component triggers the below three events.

1. The [`columnDragStart`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#columndrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#columndrop) event triggers when a column header element is dropped on the target column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs8" %}

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#reordercolumns)method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs9" %}