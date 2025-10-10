---
layout: post
title: Histogram Chart in Vue Charts | Syncfusion
description: Learn here all about Histogram Chart in Syncfusion Vue Charts component of Syncfusion Essential JS 2 and more.
control: Histogram Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Histogram Chart in Vue Charts

## Histogram

To render a [histogram](https://www.syncfusion.com/vue-components/vue-charts/chart-types/histogram-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Histogram` in your chart configuration. This indicates that the data should be represented as a histogram chart, providing a visual display of large amounts of data that are difficult to understand in a tabular or spreadsheet format.

* **Inject the HistogramSeries module**: Use the `provide: { chart: [HistogramSeries]}` method to inject the `HistogramSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering histogram series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/waterfall-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/waterfall-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs3" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#seriesrender) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/waterfall-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/waterfall-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs4" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#pointrender) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/waterfall-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/waterfall-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs5" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)
* [Change the Color of Distribution Line](https://support.syncfusion.com/kb/article/21255/how-to-change-the-color-of-distribution-line-in-vue-histogram-chart)