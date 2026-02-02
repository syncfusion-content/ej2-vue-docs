---
layout: post
title: High Low Open Close Chart in Vue Charts | Syncfusion
description: Learn here all about High Low Open Close Chart in Syncfusion Vue Charts component of Syncfusion Essential JS 2 and more.
control: High Low Open Close Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# High Low Open Close Chart in Vue Charts

## High Low Open Close

To render an [`hiloOpenClose`](https://www.syncfusion.com/vue-components/vue-charts/chart-types/ohlc-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#type) as `HiloOpenClose` in your chart configuration. This indicates that the data should be represented as a hiloOpenClose chart, which displays the high, low, open, and close values for each data point, providing a comprehensive visualization of stock price movements.

* **Inject the HiloOpenCloseSeries module**: Use the `provide: { chart: [HiloOpenCloseSeries]}` method to inject the `HiloOpenCloseSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering hiloOpenClose series are available in your chart.

* **Provide high, low, open, and close values**: The `HiloOpenClose` series requires five fields (x, high, low, open, and close) to accurately display the stock's high, low, open, and close prices. Ensure that your data source includes these fields to create a detailed representation of stock price movements over time.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#xname), [`high`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#high), [`low`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#low), [`open`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#open) and [`close`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#close) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs3" %}

## Series customization

In the `hiloOpenClose` series, the [`bullFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#bullfillcolor) property is used to fill the segment when the open value is greater than the close value, while the [`bearFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#bearfillcolor) property is used to fill the segment when the open value is less than the close value. By default, `bullFillColor` is set to **#e74c3d** and `bearFillColor` is set to **#2ecd71**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs2" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings#mode) property to control handling of empty points. Available modes: `Gap`, `Drop`, `Zero`, `Average`. The default mode is `Gap`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs4" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings#fill) property to set the fill color for empty points.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs5" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs6" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hiloopenclose-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hiloopenclose-cs7" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)