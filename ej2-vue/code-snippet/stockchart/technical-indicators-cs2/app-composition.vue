<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :tooltip="tooltip"
        :crosshair="crosshair" :title="title" :beforeIndicatorChange="beforeIndicatorChange" :indicatorChanged="indicatorChanged">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" xName="date" open="open" high="high" low="low" close="close"
            volume="volume" name="Apple Inc">
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
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries,
  DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, LineSeries, SplineSeries, AccumulationDistributionIndicator, AtrIndicator, BollingerBands,
  EmaIndicator, MomentumIndicator, MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator, TmaIndicator
} from "@syncfusion/ej2-vue-charts";

const seriesData = chartData;
const title = "AAPL Stock Price";
const primaryXAxis = {
  valueType: "DateTime"
};
const tooltip = {
  enable: true
};
const crosshair = {
  enable: true
};
const beforeIndicatorChange = (args) => {
  console.log("Before Indicator Change:", args.type);
  // Prevent EMA indicator
  if (args.type === "Ema") {
    args.cancel = true;
  }
};
const indicatorChanged = (args) => {
  console.log(`${args.type} indicator ${args.isAdd ? "added" : "removed"}`);
};


provide("stockChart",[ 
  DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, LineSeries, SplineSeries, AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator,
  MomentumIndicator, MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator, TmaIndicator 
]);
</script>

<style>
.control-section {
  height: 350px;
}
</style>