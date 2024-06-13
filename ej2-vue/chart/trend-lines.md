---
layout: post
title: Trend lines in Vue Chart component | Syncfusion
description: Learn here all about Trend lines in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Trend lines 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Trend lines in Vue Chart component

Trendlines are used to show the direction and speed of price.

Trendlines can be generated for Cartesian type series (Line, Column, Scatter, Area, Candle, Hilo etc.)
except bar type series. You can add more than one trendline to a series.

Chart supports 6 types of trendlines.

## Linear

A linear trendline is a best fit straight line that is used with simpler data sets. To render a linear trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) as `Linear` and inject `TrendLines` module using `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/linear-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/linear-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/linear-cs1" %}

## Exponential

An exponential trendline is a curved line that is most useful when data values rise or fall at increasingly higher rates. You cannot create an exponential trendline, if your data contains zero or negative values.

To render a exponential trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) as `Exponential` and inject `TrendLines` module using `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/exponential-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/exponential-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/exponential-cs1" %}

## Logarithmic

A logarithmic trendline is a best-fit curved line that is most useful when the rate of change in the data increases or decreases quickly and then levels out.

A logarithmic trendline can use negative and/or positive values.

To render a logarithmic trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) as `Logarithmic` and inject `TrendLines` module using `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/logarithmic-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/logarithmic-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/logarithmic-cs1" %}

## Polynomial

A polynomial trendline is a curved line that is used when data fluctuates.

To render a polynomial trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) as `Polynomial` and inject `TrendLines` module using `provide`.

`polynomialOrder` used to define the polynomial value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/polynomial-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/polynomial-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/polynomial-cs1" %}

## Power

A power trendline is a curved line that is best used with data sets that compare measurements that increase at a specific rate.

To render a power trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) as `Power` and inject
`TrendLines`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/power-cs1" %}

## Moving Average

A moving average trendline smoothen out fluctuations in data to show a pattern or trend more clearly.

To render a moving average trendline, use trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) as `MovingAverage` and inject `TrendLines` module using `provide`.

`period` property defines the period to find the moving average.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/power-cs2" %}

* Customization of Trendlines

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#fill) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#width) properties are used to customize the appearance of the trendline.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/power-cs3" %}

## Forecasting

Trendlines forecasting is the prediction of future/past situations.

Forecasting can be classified into two types as follows

Forward Forecasting
Backward Forecasting

* Forward Forecasting

The value set for forwardForecast is used to determine the distance moving towards the future trend.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/power-cs4" %}

* Backward Forecasting

The value set for the backwardForecast is used to determine the past trends.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/power-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/power-cs5" %}

## Show or hide a trendline

You can show or hide the trendline by setting trendline `visible` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/linear-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/trendlines/linear-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/trendlines/linear-cs2" %}