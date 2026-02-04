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

Multiple series can be added to a chart by using the [`series`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel) property. Each series represents a distinct set of data, and all configured series are rendered in the same chart area for easy comparison.

The series are rendered in the same order in which they are defined in the `series` collection. This ordering determines the visual stacking of series when multiple series overlap.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs27/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs27" %}

## Combination Series

A combination chart allows different series types, such as Line and Column, to be rendered together in a single chart. This is useful for comparing multiple datasets that have different visual representation requirements.

> Note: Bar series cannot be combined with other series types because their axis orientation differs from other series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/combination-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/combination-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/combination-cs1" %}

## Enable Complex Property in Series

By setting the `enableComplexProperty` value to `true` in a series, complex data objects can be bound directly to the chart. This enables mapping of nested object values to the series data fields, which is useful when working with structured or hierarchical data sources.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/combination-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/combination-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/combination-cs2" %}