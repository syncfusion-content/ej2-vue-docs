<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        id="stockchartcontainer"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :seriesType="seriesType"
        :indicatorType="indicatorType"
        :exportType="exportType"
        :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle"  volume='volume' xName='date' low='low' high='high' open='open' close='close'>
          <e-trendlines>
              <e-trendline :type='type'></e-trendline>
          </e-trendlines>
          </e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script>

import { chartData } from "./datasource.js";
import {
  StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, StockChartTrendlinesDirective, StockChartTrendlineDirective, DateTime, CandleSeries, RangeTooltip,Trendlines
} from "@syncfusion/ej2-vue-charts";


export default {
name: "App",
components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective,
    'e-trendlines': StockChartTrendlinesDirective,
    'e-trendline': StockChartTrendlineDirective
  },
  data() {
    return {
        seriesData:chartData,
         seriesType:[],
        indicatorType:[],
        exportType: [],
        type: 'MovingAverage',
        primaryXAxis: {
            valueType: "DateTime",
            majorGridLines: { color: "transparent" },
        },
        primaryYAxis: {
            majorTickLines: { color: "transparent", width: 0 }
        },
      title: 'AAPL Stock Price',
    };
  },
  provide: {
    stockChart: [
      DateTime, RangeTooltip,  CandleSeries, Trendlines
    ]
  }
};
</script>
<style>
#container {
   height: 350px;
 }
</style>