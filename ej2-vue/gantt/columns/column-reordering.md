---
layout: post
title: Column reordering in Vue Gantt Chart component | Syncfusion
description: Learn all about column reordering in the Syncfusion Vue Gantt Chart component of Essential JS 2 and more.
control: Column reordering
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column reordering in Vue Gantt Chart component

Column reordering can be done by dragging a column header from one index to another within the TreeGrid. To enable reordering, set the [allowReordering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowreordering) property to `true`.

To reorder columns, inject the `Reorder` module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/columns-cs7" %}

> You can disable reordering for a particular column by setting the [columns.allowReordering](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#allowreordering) property to `false`.

## Reorder Events

During the reorder action, the Gantt Chart component triggers the following events:

1. The [columnDragStart](https://ej2.syncfusion.com/vue/documentation/api/gantt#columndragstart) event triggers when the column header drag operation begins.
2. The [columnDrag](https://ej2.syncfusion.com/vue/documentation/api/gantt#columndrag) event triggers while the column header is being dragged.
3. The [columnDrop](https://ej2.syncfusion.com/vue/documentation/api/gantt#columndrop) event triggers when a column header is dropped onto a target column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/columns-cs8" %}

## Reorder multiple columns

Multiple columns can be reordered at once using the [reorderColumns](https://ej2.syncfusion.com/vue/documentation/api/gantt#reordercolumns) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/columns-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/columns-cs9" %}