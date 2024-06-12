<template>
  <div id="app">
    <ejs-stockchart :valueType='valueType' :labelFormat='labelFormat' :title='title'>
      <e-stockchart-series-collection>
        <e-stockchart-series :dataSource='seriesData' type='Candle' xName='date' low='low' high='high' open='open'
          close='close' width=2>
        </e-stockchart-series>
      </e-stockchart-series-collection>
    </ejs-stockchart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import {
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";
import { chartData } from "./datasource.js";

const valueType = 'DateTime';
const seriesData = chartData;
const labelFormat = 'MMM-yy';
const title = 'Sales Analysis';

provide('stockChart', [
  DateTime, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
  BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
]);

</script>