---
layout: post
title: Chart types in Vue Chart component | Syncfusion
description: Learn here all about Chart types in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Chart types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chart types in Vue Chart component

Essential JS 2 Chart supports 32 types of series.

<!-- markdownlint-disable MD036 -->

## Line Charts

<!-- markdownlint-disable MD036 -->

* Line

To render a line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Line` and
inject `LineSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs1" %}

* Step Line

To render a step line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StepLine` and inject `StepLineSeries` into
the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs2" %}

* Spline

To render a spline series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Spline` and inject `SplineSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs3" %}

* 100% Stacked Line

To render a 100% Stacked Line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingLine100` and
inject `StackingLineSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs4" %}

* Spline

To render a spline series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Spline` and inject `SplineSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs5" %}

* Spline Area

To render a spline series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Spline` and
inject `SplineAreaSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs6" %}

* Multicolored Line

To render a multicolored line series, use the series type as `MultiColoredLine`, and inject the
`MultiColoredLineSeries` into the `provide`. Here, the individual colors to the data can be mapped by using `pointColorMapping`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs7" %}

* Customization of Line Charts

`stroke`, `stroke-width` and `dashArray` of all line type series can be customized by using [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#fill), [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#width) and [`dashArray`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#dasharray) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs8" %}

## Area Charts

* Area

To render a area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Area` and inject `AreaSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs1" %}

* Range Area

To render a range area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `RangeArea` and inject `RangeAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs2" %}

* Spline Range Area

The Spline Range Area Chart is used to display continuous data points as a set of splines that vary between high and low values over intervals of time and across different categories.

To render a spline range area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `SplineRangeArea` and inject `SplineRangeAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs3" %}

* Stacked Area

To render a stacked area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingArea` and inject `StackingAreaSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs4" %}

* 100% Stacked Area

To render a 100% stacked area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingArea100` and inject `StackingAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs5" %}

* Step Area

To render a step area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StepArea` and inject `StepAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs6" %}

* Stacked Step Area

To render a stacked step area series, use series `type` as `StackingStepArea` and inject
`StackingStepAreaSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs7" %}

* Multicolored area

To render a multicolored area series, use the series type as `MultiColoredArea`, and inject the `MultiColoredAreaSeries` into the `provide`. The required `segments` of the series can be customized using the `value`, `color`, and `dashArray`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs8" %}

### Customization of the series

`fill` and `dashArray` of all area type series can be customized using [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill-string) and [`dashArray`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray-string) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs9" %}

### Customization of the border

The `width` and `fill` properties in the [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#border-bordermodel) can be used to customize the border of all area type series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs10" %}

## Column Charts

* Column

To render a column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Column` and inject `ColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs13" %}

* Range Column

To render a range column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `RangeColumn` and inject `RangeColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs14" %}

* Stacked Column

To render a stacked column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingColumn` and inject `StackingColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs15" %}

* 100% Stacked Column

To render a 100% stacked column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingColumn100` and inject `StackingColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs16" %}

* Stacking Group

You can use the [`stackingGroup`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#stackinggroup) property to group the stacked columns and 100% stacked columns. Columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs17" %}

* Grouped Column

You can use the [`groupName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#groupname) property to group the data points in the column type charts. Data points with same group name are grouped together.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/group-column-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/group-column-cs1" %}

* Customization of Column Charts

<!-- markdownlint-disable MD013 -->
`fill` and `border` of all column type series can be customized using [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#fill)) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#border) properties. Width of the column and space between each column can be customized using [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#columnwidth) and [`columnSpacing`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#columnspacing) properties respectively. The [`columnWidthInPixel`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#columnwidthinpixel) property allows to specify the column width in pixel unit. For customizing a specify point, please refer the [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#pointrender).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs18" %}

## Bar Charts

* Bar

To render a bar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Bar` and inject `BarSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs1" %}

* Stacked bar

To render a stacked bar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingBar` and
inject `StackingBarSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs2" %}

* 100% Stacked Bar

To render a 100% stacked bar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingBar100` and
inject `StackingBarSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs3" %}

* Stacking Group

You can use the [`stackingGroup`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#stackinggroup) property to group stacked bar and 100% stacked bar. Columns with same group name are stacked on top of each other.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs4" %}

* Grouped Bar

You can use the [`groupName`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#groupname) property to group the data points in the bar type charts. Data points with same group name are grouped together.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/group-bar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/group-bar-cs1" %}

* Customization of Bar Charts

`fill` and `border` of all bar type series can be customized using [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#fill) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#border). Width of the bar and space between each bar can be customized using [`columnWidth`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#columnwidth) and [`columnSpacing`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#columnspacing) properties respectively. The [`columnWidthInPixel`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#columnwidthinpixel) property allows to specify the bar width in pixel unit. For customizing a specify point, please refer the [`pointRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#pointrender).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs5" %}

## Scatter Charts

To render a scatter series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Scatter` and inject `ScatterSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/scatter-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/scatter-cs1" %}

<!-- markdownlint-disable MD018 -->

## Bubble Chart

To render a bubble series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Bubble` and inject `BubbleSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bubble-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs1" %}

* Bubble Size Mapping

`size` property can be used to map the size value specified in data source.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bubble-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs2" %}