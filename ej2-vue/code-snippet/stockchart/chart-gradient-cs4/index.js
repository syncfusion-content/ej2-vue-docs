
import Vue from "vue";
import { chartData } from "./datasource.js";
import {
  StockChartPlugin, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, Tooltip, Crosshair
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

;
new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div>
      <ejs-stockchart
        id="stockchartcontainer"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :border="border"
        :indicators="indicators"
        :seriesType="seriesType"
        :exportType="exportType"
        :trendlineType="trendlineType"
        :tooltip="tooltip"
        :crosshair="crosshair"
        height="350"
        :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" name="Apple Inc" type="Candle" volume='volume' xName='date' low='low' high='high' open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
`,

  data() {
    return {
      seriesData: chartData,
      chartArea: { border: { width: 0 } },
      border: { width: 0 },
      primaryXAxis: {
        majorGridLines: { color: 'transparent' },
        crosshairTooltip: { enable: true }
      },
      primaryYAxis: {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', width: 0 },
      },
      indicators: [{
        type: 'Ema', field: 'Close', seriesName: 'Apple Inc', xName: 'date', high: 'high', low: 'low', open: 'open', close: 'close',
        period: 10,
        radialGradient: {
          cx: 0.5, cy: 0.5, r: 0.5,
          fx: 0.5, fy: 0.5,
          gradientColorStop: [
            { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
            { color: '#7C3AED', offset: 100, opacity: 1, lighten: 0, brighten: 0 },
          ]
        },
      }],
      seriesType: [],
      exportType: [],
      trendlineType: [],
      tooltip: { enable: true },
      crosshair: { enable: true },
      title: 'AAPL Stock Price',
    };
  },
  provide: {
    stockChart: [
      DateTime, Tooltip, Crosshair, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
      BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
    ]
  }

});
