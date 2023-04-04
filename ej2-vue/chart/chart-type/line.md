---
layout: post
title: Line Chart in Vue Chart component | Syncfusion
description: Learn here all about Line Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Line Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Line Chart in Vue Chart component

## Line

To render a line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Line` and
inject `LineSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs1" %}

## Multicolored Line

To render a multicolored line series, use the series type as `MultiColoredLine`, and inject the
`MultiColoredLineSeries` into the `provide`. Here, the individual colors to the data can be mapped by using `pointColorMapping`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs7" %}

## Series customization

The following properties can be used to customize the `line` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs8" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)