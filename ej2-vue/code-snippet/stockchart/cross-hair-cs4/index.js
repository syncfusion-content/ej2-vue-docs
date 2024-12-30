import Vue from "vue";
import { chartData } from "./datasource.js";
import {
  StockChartPlugin, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Crosshair, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

;
new Vue({
  el: '#app',
  template: `
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :crosshair="crosshair" :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' low='low' high='high' open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
`,

  data() {
    return {
      seriesData: chartData,
      primaryXAxis: {
        majorGridLines: { color: "transparent" },
        crosshairTooltip: { enable: true, fill: 'green' }
      },
      primaryYAxis: {
        majorTickLines: { color: "transparent", width: 0 },
        crosshairTooltip: { enable: true, fill: 'green' },
        lineStyle: { color: 'transparent' }
      },
      crosshair: { enable: true, line: { width: 2, color: 'green' }, snapToData: true },
      title: 'AAPL Stock Price'
    };
  },
  provide: {
    stockChart: [
      DateTime, Crosshair, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
      BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
    ]
  }

});