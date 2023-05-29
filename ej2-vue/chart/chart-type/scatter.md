---
layout: post
title: Scatter in Vue Chart component | Syncfusion
description: Learn here all about Scatter Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Scatter Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Scatter in Vue Chart Component

## Scatter

To render a scatter series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Scatter` and inject `ScatterSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/scatter-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/scatter-cs1" %}

## Series customization

The following properties can be used to customize the `scatter` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [shape](https://ej2.syncfusion.com/vue/documentation/api/chart/chartShape/) - Specifies the shape of the scatter series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/scatter-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/scatter-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)