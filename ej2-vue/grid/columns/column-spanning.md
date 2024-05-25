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

The column spanning feature in the Syncfusion Grid allows you to merge adjacent cells horizontally, creating a visually appealing and informative layout. By defining the [colSpan](https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs/#colspan) attribute in the [QueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/queryCellInfoEventArgs) event, you can easily span cells and customize the appearance of the grid.

In the following demo, Employee doing analysis from 9.00 AM to 10.00 AM, so that cells have spanned.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/spanning-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/spanning-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/spanning-cs1" %}

## Change the border color while column spanning

You can change the border color for the spanned cells by the using [QueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#querycellinfo) event. This event triggers before the cell element is appended to the Grid element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/column/spanning-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/column/spanning-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/spanning-cs3" %}

## Limitations

* The [updateCell](https://ej2.syncfusion.com/vue/documentation/api/grid/#updatecell) method does not support column spanning.
* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Grouping
    4. Autofill