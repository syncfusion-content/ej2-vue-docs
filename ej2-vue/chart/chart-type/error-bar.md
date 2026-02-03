---
layout: post
title: Error Bar Chart in Vue Charts | Syncfusion
description: Learn here all about Error Bar Chart in Syncfusion Vue Charts component of Syncfusion Essential JS 2 and more.
control: Error Bar Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Error Bar Chart in Vue Charts

## Error Bar

Error bars are graphical representations of the variability of data and are used on graphs to indicate the error or uncertainty in a reported measurement.

To render error bars for the series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set visibility**: Set the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#visible) property to **true** for the error bars to be displayed.

* **Inject the ErrorBar module**: Use the `provide: { chart: [ErrorBar]}` method to inject the `ErrorBar` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering error bar series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs1" %}

## Customizing error bar

To customize the error bar type, set the error bar [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#type) to `Custom`, and then change the horizontal or vertical positive and negative error values for the error bar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs8" %}

## Error bar type

To change the error bar rendering type using [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series#visible) option of error bar. To change the error bar line length you can use [`verticalError`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs2" %}

## Error bar mode

The error bar mode is used to define whether the error bar line is drawn horizontally, vertically or on both sides. To change the error bar mode, use the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#mode) option.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs4" %}

## Error bar direction

To change the direction of the error bars to plus, minus, or both sides, use the [`direction`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#direction) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs5" %}

## Customizing error bar cap

To customize the length, width, opacity, and fill color of the error bar caps, you can use the [`errorBarCap`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#errorbarcap) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs6" %}

## Customizing error bar color

To customise the error bar color for individual errors, use the [`errorBarColorMapping`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#errorbarcolormapping) property. You can also customize the vertical error, horizontal error, horizontal negative and positive error, and vertical negative and positive error for an individual point using the [`verticalError`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#verticalerror), [`horizontalError`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#horizontalerror), [`horizontalNegativeError`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#horizontalnegativeerror), [`horizontalPositiveError`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#horizontalpositiveerror), [`verticalNegativeError`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#verticalnegativeerror), and [`verticalPositiveError`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings#verticalpositiveerror) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs7" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#seriesrender) event enables modification of series properties (for example, data, fill, or name) immediately before rendering. Use this event to adjust series appearance or to dynamically swap data sources.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs9" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#pointrender) event provides a hook to customize each data point (for example, marker shape, border, or fill) before it is drawn. Use this to apply per-point styling rules or conditional formatting.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/errorbar-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/errorbar-cs10" %}

## See also

* [Data label](../data-labels)
* [Tooltip](../tool-tip)