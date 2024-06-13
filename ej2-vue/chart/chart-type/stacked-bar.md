---
layout: post
title: 100% Stacked Bar in Vue Chart component | Syncfusion
description: Learn here all about 100% Stacked Bar Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: 100% Stacked bar chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked Bar in Vue Chart Component

## 100% Stacked bar

To render a 100% stacked bar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingBar100` and
inject `StackingBarSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bar-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs3" %}

## 100% Cylindrical stacked bar chart

To render a 100% cylindrical stacked bar chart, set the [`columnFacet`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bar-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/bar-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs8" %}

## Series customization

The following properties can be used to customize the `100% stacked bar` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [Fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#properties) – Specifies the [Color](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#color) and [Width](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedbar-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)