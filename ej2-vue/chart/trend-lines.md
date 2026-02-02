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

Trendlines help identify patterns, direction, and overall trends in numerical data. They project the general movement of data values and are widely used in analytics, forecasting, and financial charts. Trendlines can be added to Cartesian series types such as Line, Column, Scatter, Area, Candle, and Hilo (excluding bar series). Multiple trendlines can be added to a single series based on the analysis needs.

Charts support six types of trendlines: **Linear**, **Exponential**, **Logarithmic**, **Polynomial**, **Power**, and **Moving Average**.

## Linear

A linear trendline is a straight, best‑fit line used to describe data with a constant rate of increase or decrease. Set the trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) to `Linear` and inject the `TrendLines` module using `provide`.

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

An exponential trendline displays a curved pattern useful when data rises or falls at increasing rates. Exponential trendlines cannot be generated if the dataset includes zero or negative values.

Set the trendline [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) to `Exponential` and inject the `TrendLines` module using `provide`.

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

A logarithmic trendline is a best‑fit curved line suitable when the data increases or decreases quickly and then stabilizes. It supports both positive and negative values.

A logarithmic trendline can use negative and/or positive values.

Set [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) to `Logarithmic` and inject the `TrendLines` module using `provide`.

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

A polynomial trendline is useful when data fluctuates. It uses a curved line that can model more complex datasets.

Set [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) to `Polynomial` and inject the `TrendLines` module using `provide`. Use [`polynomialOrder`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#polynomialorder) to define the degree of the polynomial.

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

A power trendline is ideal for datasets where measurements increase at a constant rate. It displays a curved line that best fits exponential growth or decay patterns.

Set [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) to `Power` and inject the `TrendLines` module.

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

A moving average trendline smooths fluctuations to reveal overall trends more clearly. The [`period`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#period) property specifies the number of data points used to calculate each average.

Set [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#type) to `MovingAverage` and inject the `TrendLines` module using `provide`.

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

## Customization of trendline

Customize trendline appearance using the [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#fill) property for color and the [`width`](https://ej2.syncfusion.com/vue/documentation/api/chart/trendlineModel/#width) property for line thickness.

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

Trendline forecasting extends the existing trendline to estimate future and past values.

Forecasting can be classified into two types as follows

Forward Forecasting
Backward Forecasting

### Forward forecasting

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

### Backward forecasting

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