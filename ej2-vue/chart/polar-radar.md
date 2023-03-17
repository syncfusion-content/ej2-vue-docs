---
layout: post
title: Polar radar in Vue Chart component | Syncfusion
description: Learn here all about Polar radar in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Polar radar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Polar radar in Vue Chart component

## Polar Chart

To render a polar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#type) as `Polar` and inject `PolarSeries`  into the `provide`.

### Draw Types

Polar drawType property is used to change the series plotting type to line, column, area, range column, spline,
scatter, stacking area and stacking column. The default value of drawType is `Line`.

* Line

To render a line draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Line` and inject
`LineSeries` inject `LineSeries`  into the `provide`.
[`isClosed`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#isclosed) property specifies whether to join start and end point of
 a line series used in polar chart to form a closed path. Default value of isClosed is true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs3" %}

* Spline

To render a spline line draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Spline`
and inject `SplineSeries` inject `SplineSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs4" %}

* Area

To render a area line draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Area` and
inject `AreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs5" %}

* Stacked Area

To render a stacked area draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `StackingArea` and inject `StackingAreaSeries`

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs6" %}

* Column

To render a column draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Column` and inject `ColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs7" %}

* Stacked Column

To render a stacked column draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `StackingColumn` and inject `StackingColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs8" %}

* Range Column

To render a range column draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `RangeColumn` and inject `RangeColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs9" %}

* Scatter

To render a scatter draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Scatter` and
inject `ScatterSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs10" %}

## Radar Chart

To render a radar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Radar` and

### Draw Type

* Line

To render a line draw type, use series [`drawType`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#drawtype) as `Line` and inject
`LineSeries` inject `LineSeries`  into the `provide`. [`isClosed`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#isclosed) property specifies whether to join start and end point of a line series used in polar chart to form a closed path. Default value of isClosed is true.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs11" %}

### Customization

* Start Angle

You can customize the start angle of the polar series using [`startAngle`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#startangle-number) property. By default, `startAngle` is 0 degree.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs12" %}

* Coefficient in axis

You can customize the radius of the polar series and radar series using [`coefficient`](https://ej2.syncfusion.com/vue/documentation/api/chart/axisModel/#coefficient) property. By default, `coefficient` is 100.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/polar-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/polar-cs13" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
