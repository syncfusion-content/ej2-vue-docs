---
layout: post
title: Funnel in Vue Accumulation chart component | Syncfusion
description: Learn here all about Funnel in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Funnel 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Funnel in Vue Accumulation chart component

To render a funnel series, use the series [`type`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationSeriesModel/#type) as `Funnel` and inject, the `FunnelSeries` module  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/funnel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/funnel-cs1" %}

## Size

The size of the funnel chart can be customized by using the  `width` and `height` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/funnel-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/funnel-cs2" %}

## Neck Size

The funnel's neck size can be customized by using the `neckWidth` and `neckHeight` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/funnel-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/funnel-cs3" %}

## Gap between the segments

Funnel chart provides options to customize the space between the segments by using the `gapRatio` property of the series. It ranges from 0 to 1.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/funnel-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/funnel-cs4" %}

## Explode

Points can be exploded on mouse click by setting the `explode` property to true. You can also explode the point
on load using `explodeIndex`. Explode distance can be set by using `explodeOffset` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/funnel-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/funnel-cs5" %}

## Smart Data Label

It provides the data label smart arrangement of the funnel and pyramid series. The overlap data label will be placed on left side of the funnel/pyramid series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/funnel-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/funnel-cs6" %}

## Customization

Individual points can be customized using the `pointRender` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/funnel-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/funnel-cs7" %}

## See Also

* [Data label](./data-label/)
* [Grouping](./grouping/)
