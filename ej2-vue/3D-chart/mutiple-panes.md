---
layout: post
title: Multiple panes in Vue 3D Chart component | Syncfusion
description: Learn here all about multiple panes in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in Vue 3D Chart component

The chart area can be divided into multiple panes using [`rows`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#rows) and [`columns`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#columns).

## Rows

To split the chart area vertically into number of rows, use [`rows`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#rows) property of the 3D chart.

* The space for each row can be allocated by using the [`height`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/threeDimensionRowModel/#height) property. The value can be either in percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to [`rowIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3DModel/#rowindex) property of the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/row/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/row/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/row" %}

For spanning the vertical axis along multiple rows, use [`span`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3DModel/#span) property of an axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/row-span/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/row-span/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/row-span" %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/chart3DModel/#columns) property of the 3D chart.

* The space for each column can be allocated by using the [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/threeDimensionColumnModel/#width) property. The given width can be either in percentage or in pixel.
* To associate a horizontal axis to a particular column, specify its index to [`columnIndex`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3DModel/#columnindex) property of the axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/column/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/column/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/column" %}

For spanning the vertical axis along multiple column, you can use [`span`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3DModel/#span) property of an axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/column-span/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart3d/axis/column-span/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/column-span" %}