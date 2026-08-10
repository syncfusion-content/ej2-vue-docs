---
layout: post
title: Vue TreeGrid Column Reorder | Syncfusion
description: Learn how to reorder columns in Vue TreeGrid using drag-and-drop functionality and customize column arrangement.
control: Column reorder 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column Reorder in Vue TreeGrid

Reordering can be done by drag and drop of a particular column header from one index to another index within the treegrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#allowreordering) to true.

To use reordering, inject the [`Reorder`](https://ej2.syncfusion.com/vue/documentation/api/treegrid#reordermodule) module in the treegrid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs4" %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#reordermodule) to false.

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#reordercolumns) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs5" %}