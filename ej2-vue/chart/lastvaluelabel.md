---
layout: post
title: Last value label in Vue Chart component | Syncfusion
description: Learn here all about Last value label in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Last value label
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Last value label in Vue Chart component

The `lastValueLabel` in a chart allows you to easily display the value of the last data point in a series. This feature provides an intuitive way to highlight the most recent or last data value in a series on your chart.

## Enable last value label

To show the last value label, make sure the `enable` property inside the `lastValueLabel` settings is set to `true` within the series configuration. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/last-value-label/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/last-value-label/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label" %}

> Note: To use the last value label feature, inject `LastValueLabel` module into the `provide`.

## Customization

The appearance of the last value label can be customized using style properties such as `font`, `background`, `border`, `dashArray`, `lineWidth`, `lineColor`, `rx`, and `ry` in the lastValueLabel property of the chart series. These settings allow you to tailor the label’s look to align with your desired visual presentation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/last-value-label-customization/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/last-value-label-customization/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label-customization" %}