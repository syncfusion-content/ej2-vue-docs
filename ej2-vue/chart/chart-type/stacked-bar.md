---
layout: post
title: 100% Stacked Bar in Vue Chart component | Syncfusion
description: Learn here all about 100% Stacked Bar Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: 100% Stacked Bar Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked Bar in Vue Chart Component

## 100% Stacked Bar

To render a 100% stacked bar series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingBar100` and
inject `StackingBarSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bar-cs3" %}

## Series customization

The following properties can be used to customize the `100% stacked bar` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [Fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](../api/chart/borderModel/#properties) – Specifies the [Color](../api/chart/borderModel/#color) and [Width](../api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/stackedbar-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedbar-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)