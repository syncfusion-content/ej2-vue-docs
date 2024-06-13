---
layout: post
title: Stacked Column in Vue Chart component | Syncfusion
description: Learn here all about Stacked Column in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Stacked column chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Stacked Column in Vue Chart Component

## Stacked column

To render a stacked column series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingColumn` and inject `StackingColumnSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs15" %}

## Cylindrical stacked column chart

To render a cylindrical stacked column chart, set the [`columnFacet`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#columnfacet) property to `Cylinder` in the chart series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs25/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/column-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/column-cs25" %}

## Series customization

The following properties can be used to customize the `stacked column` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#properties) – Specifies the [color](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#color) and [width](https://ej2.syncfusion.com/vue/documentation/api/chart/borderModel/#width) of series border.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackcolumn-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackcolumn-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackcolumn-cs" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)