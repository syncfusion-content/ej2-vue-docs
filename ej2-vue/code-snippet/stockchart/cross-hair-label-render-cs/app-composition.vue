<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis='primaryXAxis' :crosshair='crosshair' :crosshairLabelRender='crosshairLabelRender'>
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource='seriesData' type='Line' xName='x' yName='y'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { stockData1 } from "./datasource.js";
import { StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries, DateTime, SplineAreaSeries, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator } from "@syncfusion/ej2-vue-charts";

const seriesData = stockData1;

const primaryXAxis = {
  valueType: 'DateTime'
};

const crosshair = {
  enable: true
};

const crosshairLabelRender = function(args) {
  if (args.axisName === 'primaryXAxis') {
    const date = args.value instanceof Date ? args.value : new Date(args.text);
    args.text = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }
  if (args.axisName === 'primaryYAxis') {
    const price = typeof args.value === 'number' ? args.value : Number(args.text);
    args.text = '₹' + price.toLocaleString('en-IN', { maximumFractionDigits: 0 });
    if (price > 310) {
      args.textStyle = args.textStyle || {};
      args.textStyle.color = '#d32f2f';
      args.fill = '#ffebee';
    }
  }
};

provide('stockChart', [DateTime, SplineAreaSeries, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]);
</script>

<style>
  .control-section {
    height: 420px;
  }
</style>
