---
layout: post
title: Trend lines in Vue Stock chart component | Syncfusion
description: Learn here all about Trend lines in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Trend lines 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Trend lines in Vue Stock chart component

Trendlines are used to show the direction and speed of price.

StockChart supports 6 types of trendlines namely `Linear`,`Exponential`,`Logarithmic`,`Polynomial`,`Power`,`Moving Average`. By using trendline dropdown button you can add or remove the required trendline type.

## Linear

A linear trendline is a best fit straight line that is used with simpler data sets. To render a linear trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Linear` and inject
`Trendlines` module using `provide`.

## Exponential

An exponential trendline is a curved line that is most useful when data values rise or fall at increasingly higher rates. You cannot create an exponential trendline, if your data contains zero or negative values.

To render a exponential trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Exponential` and inject `Trendlines` module using `provide`.

## Logarithmic

A logarithmic trendline is a best-fit curved line that is most useful when the rate of change in the data increases or decreases quickly and then levels out. A logarithmic trendline can use negative and/or positive values.

To render a logarithmic trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Logarithmic` and inject `Trendlines` module using `provide`.

## Polynomial

A polynomial trendline is a curved line that is used when data fluctuates.

To render a polynomial trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Polynomial` and inject `Trendlines` module using `provide`.

`polynomialOrder` used to define the polynomial value.

## Power

A power trendline is a curved line that is best used with data sets that compare measurements that increase at a specific rate.

To render a power trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `Power` and inject `Trendlines` module using `provide`.

## Moving Average

A moving average trendline smoothen out fluctuations in data to show a pattern or trend more clearly.

To render a moving average trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartTrendlineModel/#type) as `MovingAverage` and inject `Trendlines` module using `provide`.

`period` property defines the period to find the moving average.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/trend-lines-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/trend-lines-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/trend-lines-cs1" %}

**Customization of Trendlines**

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartTrendlineModel/#fill-string) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartTrendlineModel/#width-number) properties are used to customize the appearance of the trendline.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/trend-lines-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/trend-lines-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/trend-lines-cs2" %}