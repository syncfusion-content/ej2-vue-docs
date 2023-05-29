---
layout: post
title: Watterfall in Vue Chart component | Syncfusion
description: Learn here all about Watterfall Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Watterfall Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Watterfall in Vue Chart Component

## Waterfall

Waterfall chart helps to understand the cumulative effect of the sequentially introduced positive and negative values. To render a Waterfall series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Waterfall` and inject `WaterfallSeries` into the `provide`. [`intermediateSumIndexes`](https://ej2.syncfusion.com/vue/documentation/api-seriesDirective.html#intermediateSumIndexes-any) property of waterfall is used is used to represent the cumulative sum values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/waterfall-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs1" %}

## Series customization

The negative changes of waterfall charts is represented by using [`negativeFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#negativefillcolor) and the summary changes are represented by using [`summaryFillColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#summaryfillcolor) properties.

By default, the negativeFillColor as ‘#E94649’ and the summaryFillColor as ‘#4E81BC’.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/waterfall-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/waterfall-cs2" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)