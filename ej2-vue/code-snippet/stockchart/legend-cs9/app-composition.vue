<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer"  :height="height" :primaryXAxis="primaryXAxis" 
        :primaryYAxis="primaryYAxis" :legendSettings="legendSettings" :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Line"  
            name='Google'></e-stockchart-series>
          <e-stockchart-series :dataSource="seriesData" type="Line"  
            name='MicrosoftEdge'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { chartData } from "./datasource.js";
import {
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, 
  StockChartSeriesDirective as EStockchartSeries, DateTime, LineSeries, RangeTooltip, StockLegend
} from "@syncfusion/ej2-vue-charts";

const iconMap = {
  'Google': 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
  'MicrosoftEdge': 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
};

const seriesData = chartData;
const height = '455px';

const primaryXAxis = {
  majorTickLines: { color: 'transparent', width: 0 }
};

const primaryYAxis = {
  lineStyle: { color: 'transparent' },
  majorTickLines: { color: 'transparent', width: 0 }
};

const title = 'AAPL Stock Price';

const legendTemplate = (props) => {
  const seriesName = props.series.name;
  const icon = iconMap[seriesName] || '';
  return `<div style="display:flex;align-items:center;gap:8px;padding:5px;cursor:pointer;">
      <img src="${icon}" width="24" height="24" style="object-fit:contain;border-radius:2px;" alt="${seriesName}" />
      <span style="font-size:13px;font-weight:500;">${seriesName}</span>
    </div>`;
};

const legendSettings = {
  visible: true,
  template: legendTemplate
};

provide('stockChart', [DateTime, LineSeries, RangeTooltip, StockLegend]);
</script>
<style>
#container {
  height: 350px;
}
</style>
