---
layout: post
title: Range Column in Vue Chart component | Syncfusion
description: Learn here all about Range Column in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Range Column Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Range Column in Vue Chart Component

## Range Column

To render a range column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `RangeColumn` and inject `RangeColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs14" %}

## Series customization

The following properties can be used to customize the `range column` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#color) and [width](https://helpej2.syncfusion.com/vue/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/rangecolumn-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/rangecolumn-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)