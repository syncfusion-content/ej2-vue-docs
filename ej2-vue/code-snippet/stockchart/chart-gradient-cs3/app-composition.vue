<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
        :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" high='high' low='low'
            open='open' close='close' volume='volume' :radialGradient="radialGradient">
          </e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { chartData } from "./datasource.js";
import {
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, Tooltip, Crosshair
} from "@syncfusion/ej2-vue-charts";

const seriesData = chartData;
const primaryXAxis = {
  majorGridLines: { width: 0 },
};
const primaryYAxis = {
  majorGridLines: { width: 0 },
  interval: 10
};
const radialGradient = {
  cx: 0.5, cy: 0.5, r: 0.5,
  fx: 0.5, fy: 0.5,
  gradientColorStop: [
    { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
    { color: '#7C3AED', offset: 100, opacity: 1, lighten: 0, brighten: 0 },
  ]
};
const title = 'AAPL Stock Price';

provide('stockChart', [
  DateTime, Tooltip, Crosshair, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
  BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
]);

</script>
<style>
#container {
  height: 350px;
}
</style>
