<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' yName='volume'
            low='low' high='high' open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { chartData } from "./datasource.js";
import {
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries, Logarithmic,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";

const seriesData = chartData;
const primaryXAxis = {
  valueType: "DateTime",
  majorGridLines: { color: "transparent" },
};
const primaryYAxis = {
  valueType: 'Logarithmic',
  majorTickLines: { color: "transparent", width: 0 }
};
const title = 'AAPL Stock Price';

provide('stockChart', [
  DateTime, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, Logarithmic,
  BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
]);

</script>
<style>
#container {
  height: 350px;
}
</style>