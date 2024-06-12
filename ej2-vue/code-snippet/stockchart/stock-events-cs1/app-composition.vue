<template>
  <div class="control-section">
    <div>
      <ejs-stockchart style="display:block" id="stockchartcontainer" :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis" :chartArea="chartArea" :crosshair="crosshair" :tooltip="tooltip"
        :seriesType="seriesType" :title="title" :indicatorType="indicator" :border="border">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Spline" xName="date" name="Apple Inc" yName="high"
            close="high"></e-stockchart-series>
        </e-stockchart-series-collection>
        <e-stockchart-stockevents>
          <e-stockchart-stockevent :date="date1" text="Q2" description="2012 Quarter2 starts"
            type="Flag"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date2" text="Open" description="Markets opened" :textStyle="textStyle"
            background="#f48a21" :border="borderCircle"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date3" text="Q3" description="2013 Quarter3 starts" type="Flag"
            :textStyle="textStyle" background="#6c6d6d" :border="borderFlag">
          </e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date4" text="Q4" description="2013 Quarter4 starts" type="Flag"
            :textStyle="textStyle" background="#6c6d6d" :border="borderFlag">
          </e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date5" text="G" description="Google stocks bought" :textStyle="textStyle"
            background="#f48a21" :border="borderCircle">
          </e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date6" text="Y" description="Yahoo stocks sold" type="Square"
            :textStyle="textStyle" background="#841391" :border="borderSquare">
          </e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date7" text="Y2" description="Year 2013" type="Pin" :showOnSeries="onAxis"
            :textStyle="textStyle" background="#6322e0" :border="borderPin"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date8" text="Q2" description="2013 Quarter2 starts" type="Flag"
            :textStyle="textStyle" background="#6c6d6d" :border="borderFlag">
          </e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date9" text="Q2" description="Surge in Stocks" type="ArrowUp"
            :textStyle="textStyle" background="#3ab0f9" :border="borderArrow"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date10" text="Q3" description="2013 Quarter3 starts" type="Flag"
            :textStyle="textStyle" background="#6c6c6d" :border="borderFlag"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date11" text="Q4" description="2013 Quarter4 starts" type="Flag"
            :textStyle="textStyle" background="#6c6c6d" :border="borderFlag"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date12" text="Y3" description="Year 2014" type="Pin" :showOnSeries="onAxis"
            :textStyle="textStyle" background="#6322e0" :border="borderPin"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date13" text="Q2" description="2014 Quarter2 starts" type="ArrowDown"
            :textStyle="textStyle" background="#3ab0f9" :border="borderArrow"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date14" text="Q3" description="2014 Quarter3 starts" :textStyle="textStyle"
            background="#f48a21" :border="borderCircle">
          </e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date15" text="Q4" description="2014 Quarter4 starts" type="Flag"
            :textStyle="textStyle" background="#6c6d6d" :border="borderFlag"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date16" text="Y4" description="Year 2015" type="Pin" :showOnSeries="onAxis"
            :textStyle="textStyle" background="#6322e0" :border="borderPin"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date17" text="End" description="Markets closed" type="ArrowDown"
            :textStyle="textStyle" background="#3ab0f9" :border="borderArrow"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date18" text="A" description="This is event description"
            :textStyle="textStyle" background="#f48a21" :border="borderCircle"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date19" text="Q1" description="Add longer text" :textStyle="textStyle"
            background="#dd3c9f" :border="borderText" type="Text"></e-stockchart-stockevent>
          <e-stockchart-stockevent :date="date20" text="Close" description="Markets closed" :textStyle="textStyle"
            background="#f48a21" :border="borderCircle"></e-stockchart-stockevent>
        </e-stockchart-stockevents>
      </ejs-stockchart>
    </div>
  </div>
</template>

<script setup>
import { provide } from "vue";

import { chartData } from "./datasource.js";
import {
  StockChartComponent as EjsStockchart, StockChartSeriesCollectionDirective as EStockchartSeriesCollection, StockChartSeriesDirective as EStockchartSeries, StockEventsDirective as EStockchartStockevents, StockEventDirective as EStockchartStockevent, DateTime, SplineSeries, Crosshair, Tooltip, RangeTooltip, LineSeries,
  CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator,
  RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator,
  AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";


const seriesData = chartData;
const seriesType = [];
const indicator = [];
const primaryXAxis = {
  valueType: "DateTime",
  majorGridLines: { color: "transparent" },
  crosshairTooltip: { enable: true }
};
const primaryYAxis = {
  lineStyle: { color: "transparent" },
  majorTickLines: { color: "transparent" },
  crosshairTooltip: { enable: true }
};
const chartArea = {
  border: {
    width: 0
  }
};
const date1 = new Date(2012, 3, 1);
const date2 = new Date(2012, 3, 20);
const date3 = new Date(2012, 6, 1);
const date4 = new Date(2012, 9, 1);
const date5 = new Date(2012, 7, 30);
const date6 = new Date(2012, 10, 1);
const date7 = new Date(2012, 12, 0);
const date8 = new Date(2013, 3, 1);
const date9 = new Date(2013, 3, 20);
const date10 = new Date(2013, 6, 1);
const date11 = new Date(2013, 9, 1);
const date12 = new Date(2013, 12, 0);
const date13 = new Date(2014, 3, 1);
const date14 = new Date(2014, 6, 1);
const date15 = new Date(2014, 9, 1);
const date16 = new Date(2014, 12, 0);
const date17 = new Date(2014, 2, 2);
const date18 = new Date(2015, 1, 7);
const date19 = new Date(2015, 1, 2);
const date20 = new Date(2015, 2, 12);
const textStyle = { color: "white" };
const borderFlag = { color: '#6c6d6d' };
const borderSquare = { color: '#841391' };
const borderArrow = { color: '#3ab0f9' };
const borderPin = { color: '#6233e0' };
const borderText = { color: '#dd3c9f' };
const borderCircle = { color: '#f48a21' };
const title = "AAPL Stock Price";
const tooltip = { enable: true };
const crosshair = { enable: true };
const border = { width: 0 };
const onAxis = false;

provide('stockChart', [
  DateTime, SplineSeries, Crosshair, Tooltip, RangeTooltip, LineSeries,
  CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator,
  RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator,
  AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
]);

</script>
<style>
#container {
  height: 350px;
}
</style>