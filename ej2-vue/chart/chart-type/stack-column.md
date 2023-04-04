---
layout: post
title: Stacked Column in Vue Chart component | Syncfusion
description: Learn here all about Stacked Column in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Stacked Column Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Stacked Column in Vue Chart Component

## Stacked Column

To render a stacked column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingColumn` and inject `StackingColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/column-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs15" %}

## Series customization

The following properties can be used to customize the `stacked column` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](../api/chart/borderModel/#properties) – Specifies the [color](../api/chart/borderModel/#color) and [width](../api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/stackcolumn-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackcolumn-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)