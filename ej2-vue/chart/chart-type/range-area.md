---
layout: post
title: Range Area Chart in Vue Charts | Syncfusion
description: Learn here all about Range Area in Syncfusion Vue Charts component of Syncfusion Essential JS 2 and more.
control: Range Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Range Area Chart in Vue Charts

## Range Area

To render a [range area](https://www.syncfusion.com/vue-components/vue-charts/chart-types/range-area-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#type) as `RangeArea` in your chart configuration. This indicates that the data should be represented as a range area chart, which is ideal for visualizing a range of values for each data point. This type of chart is particularly useful for displaying data that has a range between a minimum and maximum value, such as temperature ranges, stock price ranges, or any other type of data that varies within a specific interval.

* **Inject the RangeAreaSeries module**: Use the `provide: { chart: [RangeAreaSeries]}` method to inject the `RangeAreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering range area series are available in your chart.

* **Provide high and low values**: The `RangeArea` series requires two y-values for each data point, you need to specify both the high and low values. The high value represents the maximum range, while the low value represents the minimum range for each data point. These values define the upper and lower boundaries of the area for each point on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/area-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/area-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs2" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#high), and [`low`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#low) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs1" %}

## Series customization

The following properties can be used to customize the `range area` series.

**Fill**

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#fill) property determines the color applied to the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs" %}

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#fill) property can be used to apply a gradient color to the range area series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs2" %}

**Opacity**

The [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#opacity) property controls the transparency of the fill and affects how the series blends with background or overlapping series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs3" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#border) property to configure the border width, color, and dash array of the range area series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs4" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs5" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs6" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings#border) property to customize the border width and color for empty points.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs7" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs8" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#pointrender)  event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/rangearea-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs9" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)