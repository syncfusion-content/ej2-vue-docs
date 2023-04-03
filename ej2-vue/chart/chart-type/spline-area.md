---
layout: post
title: Spline Area in Vue Chart component | Syncfusion
description: Learn here all about Spline Area in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Spline Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Spline Area in Vue Chart Component

## Spline Area

To render a step area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `SplineArea` and inject `SplineAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/splinearea/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/splinearea" %}

## Series customization

The following properties can be used to customize the `spline area` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/splinearea-cs/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/splinearea-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
