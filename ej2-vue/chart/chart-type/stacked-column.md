---
layout: post
title: 100% Stacked Column in Vue Chart component | Syncfusion
description: Learn here all about 100% Stacked Column in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: 100% Stacked column chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked Column in Vue Chart Component

## 100% Stacked column

To render a 100% stacked column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingColumn100` and inject `StackingColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs16" %}

## 100% Cylindrical stacked column chart

To render a 100% cylindrical stacked column chart, set the [`columnFacet`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs26" %}

## Series customization

The following properties can be used to customize the `100% stacked column` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/vue/documentation./api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/stackedcolumn-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedcolumn-cs" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
