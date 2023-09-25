import Vue from "vue";
import { series2 } from "./datasource.js";
import {
  StockChartPlugin, DateTimeCategory, CandleSeries, RangeTooltip, LineSeries, SplineSeries, Tooltip, Crosshair,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

new Vue({
  el: '#app',
  template: `
  <div class="control-section">
    <div>
      <ejs-stockchart
        id="stockchartcontainer"
        :primaryXAxis="primaryXAxis"
        :title="title"
        :crosshair="crosshair"
        :tooltip="tooltip">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Line" xName='x' yName='y'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
`,

  data() {
    return {
      seriesData: series2,
      primaryXAxis: {
        valueType: "DateTimeCategory",
        majorGridLines: { width: 0 },
        crosshairTooltip: { enable: true }
      },
      crosshair: {
        enable: true
      },
      tooltip: { enable: true, header: 'AAPL Stock Price' }
    };
  },
  provide: {
    stockChart: [
      DateTimeCategory, RangeTooltip, LineSeries, SplineSeries, CandleSeries, Tooltip, Crosshair, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
      BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
    ]
  }
});