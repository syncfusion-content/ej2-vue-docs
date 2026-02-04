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

A technical indicator is a mathematical calculation based on historical price, volume, or open‑interest information that aims to forecast financial market direction.

Chart supports 10 types of technical indicators.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of a stock. To render an Accumulation Distribution indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `AccumulationDistribution` and inject `AccumulationDistributionIndicator` into services. To calculate the signal line, the [`volume`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#volume) field must be included in the `dataSource`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/ad-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/ad-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/ad-cs1" %}

## Average True Range (ATR)

ATR measures stock volatility by comparing the current value with the previous value. To render an Average True Range (ATR) indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Atr` and inject `AtrIndicator` into `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/atr-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/atr-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/atr-cs1" %}

## Bollinger Band

A chart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `BollingerBand` and inject `BollingerBands` into the `provide`. Bollinger band will be represented by three lines (upperLine, lowerLine, signalLine).Bollinger Band default values of the [`period`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#period) is 14 and [`standardDeviations`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#standarddeviation) is 2.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/bollinger-cs1" %}

* Customization of BollingerBand

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using [`upperLine`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#upperline), and the `lowerLine` can be customized by using [`lowerLine`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#lowerline) properties of the indicator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/bollinger-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/bollinger-cs2" %}

## Exponential Moving Average (EMA)

Moving average indicators are used to define the direction of the trend. To render an EMA indicator, 
use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Ema` and inject `EMAIndicator` into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/ema-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/ema-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/ema-cs1" %}

## Momentum

Momentum shows the speed at which the stock price is changing. To render a Momentum indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Momentum` and inject the `MomentumIndicator` module into `provide`. The Momentum indicator is represented by two lines (`upperLine`, `signalLine`). In the Momentum indicator, the `upperBand` value is always rendered at 100.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/momentum-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/momentum-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/momentum-cs1" %}

* Customization of MomentumIndicator

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using the [`upperLine`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#upperline), property of the indicator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/momentum-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/momentum-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/momentum-cs2" %}

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMA's. To render a MACD indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Macd` and inject the `MacdIndicator` module into `provide`. The MACD indicator is represented by the MACD line, signal line, and MACD histogram. The MACD histogram highlights the difference between the MACD line and the signal line.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/macd-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/macd-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/macd-cs1" %}

* Customization of MACD

`stroke`, `stroke-width`, and `color` of `macdLine` can be customized by using the [`macdLine`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#macdline) property of the indicator. The positive and negative changes of the histogram can be customized by [`macdPositiveColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#macdpositivecolor) and [`macdNegativeColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#macdnegativecolor) properties. The [`macdType`] is used to define the type of MACD indicator. To customize the MACD period using [`slowPeriod`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#slowperiod) and [`fastPeriod`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#fastperiod) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/macd-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/macd-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/macd-cs2" %}

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render an RSI indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Rsi` and inject the `RsiIndicator` module into services. The RSI indicator is represented by three lines (`upperBand`, `lowerBand`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#overbought) and [`overSold`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#oversold) properties of the indicator, and the `signalLine` is calculated using the RSI formula.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/rsi-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/rsi-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/rsi-cs1" %}

## Simple Moving Average (SMA)

Moving average Indicators are used to define the direction of the trend. To render a SMA indicator,
use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type) as `Sma` and inject the `SmaIndicator` module using `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/sma-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/sma-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/sma-cs1" %}

## Stochastic

Stochastic shows how a stock compares to its previous price levels. To render a Stochastic indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#type)as `Stochastic` and inject the `StochasticIndicator` module into services. The Stochastic indicator is represented by four lines (`upperLine`, `lowerLine`, `periodLine`, `signalLine`). The `upperBand` and `lowerBand` values are customized by [`overBought`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#overbought) and [`overSold`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#oversold) properties of the indicator, and the `periodLine` and `signalLine` are rendered based on the stochastic formula.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/stochastic-cs1" %}

* Customization of StochasticIndicator

`stroke`, `stroke-width`, and `color` of `upperLine` can be customized by using [`upperLine`](./api-technicalIndicatorModel.html), the `lowerLine` can be customized by using [`lowerLine`](https://ej2.syncfusion.com/vue/documentation/chart/api-technicalindicatormodel#lowerline-connectormodel) and the `periodLine` can be customized by using [`periodLine`](https://ej2.syncfusion.com/vue/documentation/chart/api-technicalindicatormodel#lowerline-connectormodel) properties of the indicator. Customize the period used to find the average price using [`kPeriod`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#kperiod) and [`dPeriod`](https://ej2.syncfusion.com/vue/documentation/api/chart/technicalIndicatorModel/#dperiod) properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/technical-indicators/stochastic-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/technical-indicators/stochastic-cs2" %}