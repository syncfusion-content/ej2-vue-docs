---
layout: post
title: Axis types in Vue Stock chart component | Syncfusion
description: Learn here all about Axis types in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Axis types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Axis types in Vue Stock chart component

## DateTime Axis

Date time axis uses date time scale and displays the date time values as axis labels in the specified format and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to DateTime.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/axis-types-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/axis-types-cs1" %}

>Note: To use datetime axis, we need to inject `DateTimeService` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `DateTime`.

## Logarithmic Axis

<!-- markdownlint-disable MD033 -->

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>) and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `Lograthmic`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/axis-types-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/axis-types-cs2" %}

>Note: To use log axis, we need to inject `LogarithmicService` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `Logarithmic`.

## See Also

* [Axis Customization](./axis-customization/)