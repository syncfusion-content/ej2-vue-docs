<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
        :indicatorType="indicatorType" :trendlineType="trendlineType" :exportType="exportType" :title="title">
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
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries
} from "@syncfusion/ej2-vue-charts";


const seriesData = chartData;
const primaryXAxis = {
  valueType: "DateTime",
  majorGridLines: { color: "transparent" },
};
const primaryYAxis = {
  majorTickLines: { color: "transparent", width: 0 }
};
const indicatorType = [];
const trendlineType = [];
const exportType = [];
const title = 'AAPL Stock Price';

provide('stockChart', [
  DateTime, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries]);

</script>
<style>
#container {
  height: 350px;
}
</style>