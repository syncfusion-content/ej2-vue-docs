<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
        :tooltip="tooltip" :legendSettings="legendSettings" :indicatorType="indicatorType"
        :trendlineType="trendlineType" :crosshair="crosshair" :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' low='low' high='high'
            open='open' close='close' name='AAPL'></e-stockchart-series>
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
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Tooltip,
  Crosshair, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, StockLegend
} from "@syncfusion/ej2-vue-charts";


const seriesData = chartData;
const trendlineType = [];
const indicatorType = [];
const primaryXAxis = {
  valueType: "DateTime",
  majorGridLines: { color: "transparent" },
};
const primaryYAxis = {
  majorTickLines: { color: "transparent", width: 0 }
};
const crosshair = {
  enable: true,
};
const tooltip = { enable: true };
const legendSettings = {
  visible: true,
  //Legend item size for chart
  shapeHeight: 15, shapeWidth: 15
};
const title = 'AAPL Stock Price';

provide('stockChart', [
  DateTime, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, Tooltip,
  Crosshair, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, StockLegend
]);

</script>
<style>
#container {
  height: 350px;
}
</style>