---
layout: post
title: Range Area in Vue Chart component | Syncfusion
description: Learn here all about Range Area in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Range Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Range Area in Vue Chart Component

## Range Area

To render a range area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `RangeArea` and inject `RangeAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs2" %}

## Series customization

The following properties can be used to customize the `range area` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/rangearea-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangearea-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)