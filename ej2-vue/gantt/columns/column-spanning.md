---
layout: post
title: Column spanning in Vue Gantt component | Syncfusion
description: Learn here all about Column spanning in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Column spanning 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in Vue Gantt component

The gantt has option to span the adjacent cells. You need to define the [`colSpan`](https://ej2.syncfusion.com/vue/documentation/api/gantt/queryCellInfoEventArgs/#colspan) attribute to span cells in the [`QueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/gantt/queryCellInfoEventArgs) event.

In the following demo, **Work 1**  cells have been spanned.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs12" %}