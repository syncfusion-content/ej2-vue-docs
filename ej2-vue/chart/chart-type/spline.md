---
layout: post
title: Spline in Vue Chart component | Syncfusion
description: Learn here all about Spline in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Spline Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Spline in Vue Chart Component

## Spline

To render a spline series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Spline` and inject `SplineSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs5" %}

## Series customization

The following properties can be used to customize the `spline` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/spline-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/spline-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)