---
layout: post
title: Chart series in Vue Chart component | Syncfusion
description: Learn here all about Chart series in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Chart series 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chart series in Vue Chart component

## Multiple Series

You can add multiple series to the chart by using [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/) property.
The series are rendered in the order as it is added to the series array.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs27" %}

## Combination Series

Combination of different types like Line, column etc, can be rendered in a chart.

>Bar series cannot be combined with any other series as the axis orientation is different from other series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/combination-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/combination-cs1" %}

## Enable Complex Property in Series

By setting `enableComplexProperty` value as `true` in series you can bind complex data to the chart.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/combination-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/combination-cs2" %}