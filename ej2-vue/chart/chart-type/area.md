---
layout: post
title: Area in Vue Chart component | Syncfusion
description: Learn here all about Area in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Area in Vue Chart Component

## Area

To render a area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `Area` and inject `AreaSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs1" %}

## Multicolored area

To render a multicolored area series, use the series type as `MultiColoredArea`, and inject the `MultiColoredAreaSeries` into the `provide`. The required `segments` of the series can be customized using the `value`, `color`, and `dashArray`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs8" %}

## Series customization

The following properties can be used to customize the `area` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs9" %}

## Area border

The following properties in the `border` can be used to customize the border of the Area Chart.

* [`width`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/borderModel/#width) - Specifies the width for the border of the Area Chart.
* [`color`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/borderModel/#color) - Specifies the Color for the border of the Area Chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/area-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs10" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)