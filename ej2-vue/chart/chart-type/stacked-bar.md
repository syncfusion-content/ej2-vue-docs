---
layout: post
title: 100% Stacked bar in Vue Chart component | Syncfusion
description: Learn here all about 100% Stacked bar Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: 100% Stacked bar chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked bar Chart in Vue Component

## 100% Stacked bar

To render a [100% stacked bar](https://www.syncfusion.com/vue-components/vue-charts/chart-types/100-stacked-bar-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingBar100` in your chart configuration. This indicates that the data should be represented as a 100% stacked bar chart, with segments that show the percentage contribution of each part.

* **Inject the StackingBarSeries module**: Use the `provide: { chart: [StackingBarSeries]}` method to inject the `StackingBarSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering the 100% stacked bar series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bar-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs3" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs1" %}

## Series customization

The following properties can be used to customize the `100% stacked bar` series.

**Fill**

The [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#fill) property determines the color applied to the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs" %}

The [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#fill) property can be used to apply a gradient color to the 100% stacked bar series. By configuring this property with gradient values, you can create a visually appealing effect in which the color transitions smoothly from one shade to another.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs2" %}

**Opacity**

The [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#opacity) property specifies the transparency level of the fill. Adjusting this property allows you to control how opaque or transparent the fill color of the series appears.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs3" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#border) property to customize the width, color and dash array of the series border.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs5" %}

## 100% Cylindrical stacked bar chart

To render a 100% cylindrical stacked bar chart, set the [`columnFacet`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#columnfacet) property to `Cylinder` in the chart series. This property transforms the regular 100% stacked bars into cylindrical shapes, enhancing the visual representation of the data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bar-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bar-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs8" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#mode) property to define how empty or missing data points are handled in the series. The default mode for empty points is `Gap`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs6" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#fill) property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs7" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#border) property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs8" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#seriesrender) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs9" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#pointrender) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs10" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)