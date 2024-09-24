---
layout: post
title: Bubble in Vue Chart component | Syncfusion
description: Learn here all about Bubble Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Bubble Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Bubble Chart in Vue Component

## Bubble 

To render a [bubble](https://www.syncfusion.com/vue-components/vue-charts/chart-types/bubble-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Bubble` in your chart configuration. This indicates that the data should be displayed as a bubble series in the chart.

* **Inject the BubbleSeries module**: Use the `provide: { chart: [BubbleSeries]}` method to inject the `BubbleSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering the bubble series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs1" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs3" %}

## Series customization

The following properties can be used to customize the `bubble` series.

**Fill**

The [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#fill) property determines the color applied to the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs" %}

**Opacity**

The [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#opacity) property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs9" %}

## Bubble size mapping

Use the [`size`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#size) property to map the size of each bubble to the value specified in the data source.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs2" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#mode) property to define how empty or missing data points are handled in the series. The default mode for empty points is `Gap`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs4" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#fill) property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs5" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#border) property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs6" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#seriesrender) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs7" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#pointrender) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bubble-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs8" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)