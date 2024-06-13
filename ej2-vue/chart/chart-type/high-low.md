---
layout: post
title: Hilo in Vue Chart component | Syncfusion
description: Learn here all about Hilo Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Hilo Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hilo in Vue Chart Component

## Hilo

Hilo Series illustrates the price movements in stock using the high and low values. To render a Hilo series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Hilo` and inject `HiloSeries` into the `provide`. Hilo series requires 3 fields (x, high and low) to show the high and low price in the stock.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hilo-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hilo-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hilo-cs1" %}

## Series customization

The following properties can be used to customize the `hilo` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hilo-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/hilo-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/hilo-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)