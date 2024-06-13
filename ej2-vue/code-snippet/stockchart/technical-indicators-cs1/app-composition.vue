<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
        :seriesType="seriesType" :trendlineType="trendlineType" :exportType="exportType" :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' low='low' high='high'
            open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { chartData } from "./datasource.js";
import {
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries, DateTime, CandleSeries, RangeTooltip, RangeAreaSeries, Logarithmic, Zoom,
  EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator
} from "@syncfusion/ej2-vue-charts"

const seriesData = chartData;
const primaryXAxis = {
  valueType: "DateTime",
  majorGridLines: { color: "transparent" },
};
const primaryYAxis = {
  majorTickLines: { color: "transparent", width: 0 }
};
const seriesType = [];
const trendlineType = [];
const exportType = [];
const title = 'AAPL Stock Price';


provide('stockChart', [
  DateTime, RangeTooltip, CandleSeries, EmaIndicator, RsiIndicator, RangeAreaSeries, Logarithmic, Zoom,
  BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator
]);

</script>
<style>
#container {
  height: 350px;
}
</style>