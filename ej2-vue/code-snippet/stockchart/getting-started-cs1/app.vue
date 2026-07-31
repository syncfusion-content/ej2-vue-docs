<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :title="title" :enablePeriodSelector="enablePeriodSelector">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' low='low' high='high'
            open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script>
import {
  StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, DateTime, CandleSeries
} from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective
  },
  data() {
    return {
      seriesData: [
            { date: new Date('2012-04-02'), open: 320.71, high: 324.07, low: 317.74, close: 323.78, volume: 45638000 },
            { date: new Date('2012-04-03'), open: 323.03, high: 324.30, low: 319.64, close: 321.63, volume: 40857000 },
            { date: new Date('2012-04-04'), open: 319.54, high: 319.82, low: 315.87, close: 317.89, volume: 32519000 },
            { date: new Date('2012-04-05'), open: 316.44, high: 318.53, low: 314.60, close: 316.48, volume: 46327000 },
            { date: new Date('2012-04-06'), open: 317.20, high: 320.50, low: 315.30, close: 319.80, volume: 38200000 },
            { date: new Date('2012-04-07'), open: 320.00, high: 322.90, low: 318.50, close: 321.10, volume: 35500000 },
            { date: new Date('2012-04-08'), open: 321.50, high: 325.20, low: 320.80, close: 324.70, volume: 41200000 },
            { date: new Date('2012-04-09'), open: 325.00, high: 326.80, low: 322.40, close: 323.90, volume: 39800000 },
            { date: new Date('2012-04-10'), open: 324.20, high: 327.00, low: 323.10, close: 326.10, volume: 42100000 },
            { date: new Date('2012-04-11'), open: 326.30, high: 329.20, low: 325.50, close: 328.70, volume: 44500000 },
            { date: new Date('2012-04-12'), open: 328.90, high: 330.50, low: 326.70, close: 327.80, volume: 36700000 }
        ],
      title: 'AAPL Stock Price',
      enablePeriodSelector: false
    };
  },
  provide: {
    stockChart: [
      DateTime, CandleSeries
    ]
  }
};
</script>