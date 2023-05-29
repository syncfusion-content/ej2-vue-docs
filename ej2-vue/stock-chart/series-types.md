---
layout: post
title: Series types in Vue Stock chart component | Syncfusion
description: Learn here all about Series types in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Series types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Series types in Vue Stock chart component

Essential JS 2 StockChart supports 6 major types of series namely `Line`, `Spline`, `Hilo`, `HiloOpenClose`, `Hollow Candle` and `Candle` . By using the series dropdown button you can navigate between the above listed series types.

<!-- markdownlint-disable MD036 -->

## Line

To render a line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockSeriesModel/#type-string) as `Line` and
inject `LineSeries` into the `provide`.

## Spline

To render a spline series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockSeriesModel/#type-string) as `Spline` and inject `SplineSeries` into the `provide`.

## Hilo

To render a hilo series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockSeriesModel/#type-string) as `Hilo` and
inject `HiloSeries` into the `provide`.

## HiloOpenClose

To render a hiloOpenClose series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockSeriesModel/#type-string) as `HiloOpenClose` and inject `HiloOpenCloseSeries` into the `provide`.

## HollowCandle

To render a hollowcandle series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockSeriesModel/#type-string) as `Candle` and set `enableSolidCandle` as false. Now inject `CandleSeries` into the `provide`.

## Candle

To render a candle series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockSeriesModel/#type-string) as `Candle` and inject `CandleSeries` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/series-types-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/series-types-cs1" %}