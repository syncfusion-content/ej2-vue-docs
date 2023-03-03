---
layout: post
title: Technical indicators in Vue Chart component | Syncfusion
description: Learn here all about Technical indicators in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Technical indicators 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Technical indicators in Vue Chart component

A technical indicator is a mathematical calculation based on historic price, volume or open interest information that aims to forecast financial market direction.

Chart supports 10 types of technical indicators.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of stock.
To render a Accumulation Distribution Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `AccumulationDistribution` and inject `AccumulationDistributionIndicator` into the `provide`.
To calculate the signal line [`volume`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#volume) field is additionally added with `dataSource`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/ad-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/ad-cs1" %}

## Average True Range (ATR)

ATR measures the stock volatility by comparing the current value with the previous value. To render a Average True Range (ATR) Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Atr` and inject `AtrIndicator` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/atr-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/atr-cs1" %}

## Bollinger Band

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `BollingerBand` and inject `BollingerBands` into the `provide`. Bollinger band will be represented by three lines (upperLine, lowerLine, signalLine).Bollinger Band default values of the [`period`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#period) is 14 and [`standardDeviations`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#standarddeviation) is 2.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/bollinger-cs1" %}

* Customization of BollingerBand

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#upperline), and the lowerLine can be customized by using [`lowerLine`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#lowerline) properties of indicator.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/bollinger-cs2" %}

## Exponential Moving Average (EMA)

Moving average Indicators are used to define the direction of the trend. To render a EMA Indicator,
use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Ema` and inject `EMAIndicator` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/ema-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/ema-cs1" %}

## Momentum

Momentum shows the speed at which the price of the stock is changing. To render a Momentum indicator, use indicator [`type`](..api/chart/technicalIndicatorModel/#type) as `Momentum`and inject `MomentumIndicator` into the `provide`. Momentum indicator will be represented by two lines (upperLine, signalLine).In momentum indicator the upperBand value is always render at the value 100.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/momentum-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/momentum-cs1" %}

* Customization of MomentumIndicator

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#upperline),
property of indicator.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/momentum-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/momentum-cs2" %}

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMA's. To render a MACD Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `MACD` and inject `MACDIndicator` into the `provide`.MACD indicator will be represented by MACD line,signal line, MACD histogram. MACD histogram is used to differentiate MACD line and signal line.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/macd-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/macd-cs1" %}

* Customization of MACD

`stroke`, `stroke-width`, and `color`of macdLine can be customized by using,[`macdLine`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#macdline),property of indicator. The positive and negative changes of histogram can be customized by [`macdPositiveColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#macdpositivecolor) and [`macdNegativeColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#macdnegativecolor) properties. The [`macdType`] is used to define the type of MACD indicator. To customize the MACD period using [`slowPeriod`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#slowperiod) and [`fastPeriod`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#fastperiod)
properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/macd-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/macd-cs2" %}

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render a RSI Indicator, use
indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as`Rsi` and inject `RsiIndicator` into the `.provide`.RSI indicator will be represented by three lines (upperBand, lowerBand, signalLine). The upperBand and lowerBand values are customized by [`overBought`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#overbought) and [`overSold`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#oversold) properties of indicator and the signalLine is calculated by RSI formula.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/rsi-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/rsi-cs1" %}

## Simple Moving Average (SMA)

Moving average Indicators are used to define the direction of the trend. To render a SMA Indicator,
use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Sma` and inject `SmaIndicator` module using `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/sma-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/sma-cs1" %}

## Stochastic

It shows how a stock is, when compared to previous state. To render a Stochastic indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Stochastic` and inject `StochasticIndicator` module using `provide` method. stochastic indicator will be represented by four lines (upperLine, lowerLine,periodLine, signalLine). In stochastic indicator the upperBand value and lowerBand value is customized by [`overBought`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#overbought) and [`overBought`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#overbought)properties of indicators and the periodLine and
signalLine is render based on stochastic formula.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/stochastic-cs1" %}

* Customization of StochasticIndicator

`stroke`, `stroke-width`, and `color` of upperLine can be customized by using,[`upperLine`](./api-technicalIndicatorModel.html), the lowerLine can be customized by using [`lowerLine`](https://ej2.syncfusion.com/vue/documentation/api-technicalIndicatorModel.html) and the periodLine can be customized by using [`periodLine`](https://ej2.syncfusion.com/vue/documentation/api-technicalIndicatorModel.html) properties of indicator. To customize the period to find the properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/stochastic-cs2" %}