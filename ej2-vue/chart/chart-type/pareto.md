---
layout: post
title: Pareto in Vue Chart component | Syncfusion
description: Learn here all about Pareto Chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Pareto Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pareto in Vue Chart Component

## Pareto chart

Pareto charts are used to find the cumulative values of data in different categories. It is a combination of Column and Line series. The initial values are represented by column chart and the cumulative values are represented by Line chart. To render a pareto chart, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/errorBarSettings/#type) as `Pareto` and inject `ParetoSeries` `ColumnSeries` and  `LineSeries` module.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs10" %}

## Pareto customization

The pareto line series can be customized by using the `marker`, `width`, `dashArray`, and `fill` properties in the `paretoOptions`. The secondary axis for the pareto series can be shown or hidden using the `showAxis` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/line-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs11" %}

## See also

* [Data label](../data-labels.md)
* [Tooltip](../tool-tip.md)