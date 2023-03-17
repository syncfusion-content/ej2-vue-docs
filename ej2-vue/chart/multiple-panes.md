---
layout: post
title: Multiple panes in Vue Chart component | Syncfusion
description: Learn here all about Multiple panes in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Multiple panes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in Vue Chart component

Chart area can be divided into multiple panes using [`rows`](https://ej2.syncfusion.com/vue/documentation/api/chart/row/) and [`columns`](https://ej2.syncfusion.com/vue/documentation/api/chart/column/).

## Rows

To split the chart area vertically into number of rows, use [`rows`](https://ej2.syncfusion.com/vue/documentation/api/chart/row/) property of the chart.

* You can allocate space for each row by using the [`height`](https://ej2.syncfusion.com/vue/documentation/api/chart/row/#height) property. The value can be either in percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to
[`rowIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#rowindex) property of the axis.
* To customize each row’s bottom line, use [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#border) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs1" %}

For spanning the vertical axis along multiple row, you can use [`span`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#span) property of an axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs2" %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](api-columnDirective.html) property of the chart.

* You can allocate space for each column by using the [`width`](api-columnDirective.html#width-string)
property. The given width can be either in percentage or in pixel.

* To associate a horizontal axis to a particular column, specify its index to

[`columnIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#columnindex) property of the axis.

* To customize each column’s bottom line, use [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/column/#border)

property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs3" %}

For spanning the horizontal axis along multiple column, you can use [`span`](api-axisDirective.html#span-number) property of an axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs4" %}
