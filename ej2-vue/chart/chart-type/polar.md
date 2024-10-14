---
layout: post
title: Polar in Vue Chart component | Syncfusion
description: Learn here all about Polar Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Polar Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Polar Chart in Vue Component

## Polar chart

To render a [polar](https://www.syncfusion.com/vue-components/vue-charts/chart-types/polar-chart) series in your chart, you need to follow a few steps to configure it correctly. Here's a concise guide on how to do this:
 
* **Set the series type**: Define the series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Polar` in your chart configuration. This indicates that the data should be represented as a polar chart, which is ideal for plotting data points on a circular graph.

* **Inject the PolarSeries module**: Use the `provide: { chart: [PolarSeries]}` method to inject the `PolarSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs16" %}

## Binding data with series

You can bind data to the chart using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#datasource) property within the series configuration. This allows you to connect a JSON dataset or remote data to your chart. To display the data correctly, map the fields from the data to the chart series [`xName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#xname) and [`yName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#yname) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs17" %}

## Draw types

Use the [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) property to change the series plotting type in a Polar chart to line, column, area, range column, spline, scatter, stacking area, spline area, or stacking column. The default value of `drawType` is `Line`.

### Line

To render a line draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `Line` in your chart configuration. This indicates that the data should be represented as a polar line chart, with lines connecting each data point.

* **Inject the LineSeries module**: Use the `provide: { chart: [LineSeries]}` method to inject the `LineSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar line series are available in your chart.

The [`isClosed`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#isclosed) property specifies whether to join the start and end points of a line series used in a polar chart to form a closed path. The default value of `isClosed` is **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs3" %}

### Spline

To render a spline draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `Spline` in your chart configuration. This indicates that the data should be represented as a polar spline chart, with smooth, curved lines connecting each data point.

* **Inject the SplineSeries module**: Use the `provide: { chart: [SplineSeries]}` method to inject the `SplineSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar spline series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs4" %}

### Area

To render an area draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `Area` in your chart configuration. This indicates that the data should be represented as a polar area chart, with filled areas below the lines connecting each data point.

* **Inject the AreaSeries module**: Use the `provide: { chart: [AreaSeries]}` method to inject the `AreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar area series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs5" %}

### Stacked area

To render a stacked area draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `StackingArea` in your chart configuration. This indicates that the data should be represented as a polar stacked area chart, with areas stacked on top of each other, displaying the cumulative value of multiple series.

* **Inject the StackingAreaSeries module**: Use the `provide: { chart: [StackingAreaSeries]}` method to inject the `StackingAreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar stacked area series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs6" %}

### Column

To render a column draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `Column` in your chart configuration. This indicates that the data should be represented as a polar column chart, allowing for the comparison of values across categories.

* **Inject the ColumnSeries module**: Use the `provide: { chart: [ColumnSeries]}` method to inject the `ColumnSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar column series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs7" %}

### Stacked column

To render a stacked column draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `StackingColumn` in your chart configuration. This indicates that the data should be represented as a polar stacked column chart, with each column consisting of multiple segments stacked on top of each other.

* **Inject the StackingColumnSeries module**: Use the `provide: { chart: [StackingColumnSeries]}` method to inject the `StackingColumnSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar stacked column series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs8" %}

### Range column

To render a range column draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `RangeColumn` in your chart configuration. This indicates that the data should be represented as a polar range column chart, where each column spans a range of values.

* **Inject the RangeColumnSeries module**: Use the `provide: { chart: [RangeColumnSeries]}` method to inject the `RangeColumnSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar range column series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs9" %}

### Scatter

To render a scatter draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `Scatter` in your chart configuration. This indicates that the data should be represented as a polar scatter chart.

* **Inject the ScatterSeries module**: Use the `provide: { chart: [ScatterSeries]}` method to inject the `ScatterSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar scatter series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs10" %}

### Spline area

To render an spline area draw type, you need to follow a few steps to configure it correctly.

* **Set the series type**: Define the series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#drawtype) as `SplineArea` in your chart configuration. This indicates that the data should be represented as a polar spline area chart, where the series is drawn with smooth, curved lines connecting each data point, and the area beneath the line is filled with color.

* **Inject the SplineAreaSeries module**: Use the `provide: { chart: [SplineAreaSeries]}` method to inject the `SplineAreaSeries` module into your chart. This step is essential, as it ensures that the necessary functionalities for rendering polar spline area series are available in your chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs18" %}

## Series customization

### Start angle

You can customize the start angle of the polar series using [`startAngle`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#startangle) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs0/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs0/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs0" %}

### Radius

You can customize the radius of the polar series using [`coefficient`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs01/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs01/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs01" %}

## Empty points

Data points with `null` or `undefined` values are considered empty. Empty data points are ignored and not plotted on the chart.

**Mode**

Use the [`mode`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#mode) property to define how empty or missing data points are handled in the series. The default mode for empty points is `Gap`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs19" %}

**Fill**

Use the [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#fill) property to customize the fill color of empty points in the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs20" %}

**Border**

Use the [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/emptyPointSettings/#border) property to customize the width and color of the border for empty points.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs21" %}

## Events

### Series render

The [`seriesRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#seriesrender) event allows you to customize series properties, such as data, fill, and name, before they are rendered on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs22" %}

### Point render

The [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart#pointrender) event allows you to customize each data point before it is rendered on the chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/polar-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs23" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)