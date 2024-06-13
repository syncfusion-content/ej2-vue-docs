---
layout: post
title: Spline Range Area in Vue Chart component | Syncfusion
description: Learn here all about Spline Range Area in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Spline Range Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Spline Range Area in Vue Chart Component

## Spline Range Area

The Spline Range Area Chart is used to display continuous data points as a set of splines that vary between high and low values over intervals of time and across different categories.

To render a spline range area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `SplineRangeArea` and inject `SplineRangeAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/area-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/area-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/area-cs3" %}

## Series customization

The following properties can be used to customize the `spline range area` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/splinerangearea-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/splinerangearea-cs/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/splinerangearea-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)