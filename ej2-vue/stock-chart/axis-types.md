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

## DateTime axis

DateTime axis uses date time scale and displays the date time values as axis labels in the specified format. To use DateTime axis, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `DateTime`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/axis-types-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/axis-types-cs1" %}

>Note: To use this axis, we need to inject `DateTimeService` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `DateTime`.

## DateTimeCategory axis

DateTimeCategory axis in the stock chart is used to display only business days. To use DateTimeCategory axis, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `DateTimeCategory`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/axis-types-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/axis-types-cs3" %}

>Note: To use this axis, we need to inject `DateTimeCategoryService` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `DateTimeCategory`.

## Logarithmic axis

<!-- markdownlint-disable MD033 -->

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>). To use Logarithmic axis, set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `Logarithmic`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/axis-types-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/axis-types-cs2" %}

>Note: To use this axis, we need to inject `LogarithmicService` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxisModel/#valuetype) of axis to `Logarithmic`.

## See also

* [Axis Customization](./axis-customization/)