---
layout: post
title: Column spanning in Vue Grid component | Syncfusion
description: Learn here all about Column spanning in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Column spanning 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in Vue Grid component

The grid has option to span the adjacent cells. You need to define the [`colSpan`](https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs/#colspan) attribute to span cells in the [`QueryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs/) event.

In the following demo, Employee `Davolio` doing analysis from 9.00 AM to 10.00 AM, so that cells have spanned.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/spanning-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/spanning-cs1" %}

## Limitations

* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Lazy load grouping