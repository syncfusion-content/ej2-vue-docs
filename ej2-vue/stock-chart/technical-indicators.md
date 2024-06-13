---
layout: post
title: Technical indicators in Vue Stock chart component | Syncfusion
description: Learn here all about Technical indicators in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Technical indicators 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Technical indicators in Vue Stock chart component

A technical indicator is a mathematical calculation based on historic price, volume or open interest information that aims to forecast financial market direction.

StockChart supports 10 types of technical indicators namely `Accumulation Distribution`, `ATR`, `EMA`,`SMA`,`TMA`,`Momentum`,`MACD`,`RSI`,`Stochastic`,`Bollinger Band`. By using indicator dropdown box you can add an remove the required indicators types.

## Accumulation Distribution

Accumulation Distribution combines price and volume to show how money may be flowing into or out of stock.
To render a Accumulation Distribution Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `AccumulationDistribution` and inject `AccumulationDistributionIndicator` into the `provide`. To calculate the signal line [`volume`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#volume) field is additionally added with `dataSource`.

## Average True Range (ATR)

ATR measures the stock volatility by comparing the current value with the previous value. To render a Average True Range (ATR) Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `Atr` and inject `AtrIndicator` into the `provide`.

## Exponential Moving Average (EMA)

Moving average Indicators are used to define the direction of the trend. To render a EMA Indicator,
use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `Ema` and inject `EmaIndicator` into the `provide`.

## Momentum

Momentum shows the speed at which the price of the stock is changing. To render a Momentum indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `Momentum`and inject `MomentumIndicator` into the `provide`. Momentum indicator will be represented by two lines (upperLine,
signalLine).In momentum indicator the upperBand value is always renders at the value 100.

## Moving Average Convergence Divergence (MACD)

MACD is based on the difference between two EMA's. To render a MACD Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `Macd` and inject `MacdIndicator` into the `provide`.MACD indicator will be represented by MACD line,signal line, MACD histogram. MACD histogram is used to differentiate MACD line and signal line.

## Relative Strength Index (RSI)

RSI shows how strongly a stock is moving in its current direction. To render a RSI Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `Rsi` and inject `RsiIndicator` into the `provide`.RSI indicator will be represented by three lines (upperBand, lowerBand, signalLine). The upperBand and lowerBand values are customized by [`overBought`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#overBought) and [`overSold`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) properties of indicator and the signalLine is calculated by RSI formula.

## Simple Moving Average (SMA)

Moving average Indicators are used to define the direction of the trend. To render a SMA Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `Sma` and inject `SmaIndicator` into the `provide`.

## Stochastic

It shows how a stock is, when compared to previous state. To render a Stochastic indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `Stochastic` and inject `StochasticIndicator` into the `provide`. stochastic indicator will be represented by four lines (upperLine, lowerLine, periodLine, signalLine). In stochastic indicator the upperBand value and lowerBand value is customized by [`overBought`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#overBought) and [`overSold`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#overSold) properties of indicators and the periodLine and signalLine is render based on stochastic formula.

## Triangular Moving Average (TMA)

Moving average Indicators are used to define the direction of the trend. To render a TMA Indicator, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `Tma` and inject `TmaIndicator` into the `provide`.

## Bollinger Band

A StockChart overlay that shows the upper and lower limits of normal price movements based on the standard deviation of prices. To render a Bollinger Band, use indicator [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#type) as `BollingerBand` and inject `BollingerBands` into the `provide`.
Bollinger band will be represented by three lines (upperLine, lowerLine, signalLine).The default values of the Bollinger Band [`period`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#period) is 14 and [`standardDeviations`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartIndicatorModel/#standardDeviations) is 2.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/technical-indicators-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/technical-indicators-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/technical-indicators-cs1" %}