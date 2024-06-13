<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
        :seriesType="seriesType" :indicatorType="indicatorType" :exportType="exportType" :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' low='low' high='high'
            open='open' close='close'>
            <e-trendlines>
              <e-trendline :type='type'></e-trendline>
            </e-trendlines>
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
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries, StockChartTrendlinesDirective as ETrendlines, StockChartTrendlineDirective as ETrendline, DateTime, CandleSeries, RangeTooltip, Trendlines
} from "@syncfusion/ej2-vue-charts";

const seriesData = chartData;
const seriesType = [];
const indicatorType = [];
const exportType = [];
const type = 'MovingAverage';
const primaryXAxis = {
  valueType: "DateTime",
  majorGridLines: { color: "transparent" },
};
const primaryYAxis = {
  majorTickLines: { color: "transparent", width: 0 }
};
const title = 'AAPL Stock Price';

provide('stockChart', [
  DateTime, RangeTooltip, CandleSeries, Trendlines
]);

</script>
<style>
#container {
  height: 350px;
}
</style>