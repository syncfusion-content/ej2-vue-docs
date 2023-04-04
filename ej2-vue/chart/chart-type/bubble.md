---
layout: post
title: Bubble in Vue Chart component | Syncfusion
description: Learn here all about Bubble Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Bubble Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Bubble in Vue Chart Component

## Bubble 

To render a bubble series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Bubble` and inject `BubbleSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bubble-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs1" %}

## Size mapping

`size` property can be used to map the size value specified in data source.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bubble-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs2" %}

## Series customization

The following properties can be used to customize the `bubble` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/bubble-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/bubble-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)