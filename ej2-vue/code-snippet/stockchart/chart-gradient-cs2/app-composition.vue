<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
        :chartArea="chartArea" :border="border" :indicators="indicators" :seriesType="seriesType"
        :exportType="exportType" :trendlineType="trendlineType" :tooltip="tooltip" :crosshair="crosshair"
        height="350" :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" name="Apple Inc" type="Candle" volume='volume'
            xName='date' low='low' high='high' open='open' close='close'>
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
const chartArea = { border: { width: 0 } };
const border = { width: 0 };
const primaryXAxis = {
  majorGridLines: { color: 'transparent' },
  crosshairTooltip: { enable: true }
};
const primaryYAxis = {
  lineStyle: { color: 'transparent' },
  majorTickLines: { color: 'transparent', width: 0 },
};
const indicators = [{
  type: 'Ema', field: 'Close', seriesName: 'Apple Inc', xName: 'date', high: 'high', low: 'low', open: 'open', close: 'close',
  period: 10,
  linearGradient: {
    x1: 0, y1: 0,
    x2: 0, y2: 1,
    gradientColorStop: [
      { color: 'red', offset: 0, opacity: 1 },
      { color: 'blue', offset: 100, opacity: 1 },
    ]
  }
}];
const seriesType = [];
const exportType = [];
const trendlineType = [];
const tooltip = { enable: true };
const crosshair = { enable: true };
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
