
import Vue from "vue";
import { chartData } from "./datasource.js";
import {
  StockChartPlugin, DateTime, CandleSeries, RangeTooltip, LineSeries,SplineSeries,Crosshair,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,BollingerBands,  TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";
Vue.use(StockChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-stockchart :title='title'  :crosshair="crosshair">
            <e-stockchart-series-collection>
                <e-stockchart-series :dataSource='seriesData' type='Candle'>
                </e-stockchart-series>
            </e-stockchart-series-collection>
        </ejs-stockchart>
    </div>
`,

  data() {
    return {
     title: 'Sales Analysis',
     seriesData: chartData,
       crosshair: {
        enable: true,
      }
    };
  },
   provide: {
    stockChart: [
      DateTime, RangeTooltip, LineSeries, SplineSeries, CandleSeries,HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,Crosshair,
      BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator,      AccumulationDistributionIndicator,  MacdIndicator, StochasticIndicator, Export
    ]
  }

});