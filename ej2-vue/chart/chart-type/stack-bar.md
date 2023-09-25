---
layout: post
title: Stacked Bar in Vue Chart component | Syncfusion
description: Learn here all about Stacked Bar Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Stacked bar chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Stacked Bar in Vue Chart Component

## Stacked bar

To render a stacked bar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingBar` and inject `StackingBarSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs2" %}

## Cylindrical stacked bar chart

To render a cylindrical stacked bar chart, set the `columnFacet` property to `Cylinder` in the chart series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs7" %}

## Series customization

The following properties can be used to customize the `stacked bar` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/stackbar-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackbar-cs" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)