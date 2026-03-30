import Vue from "vue";
import { stockData1 } from "./datasource.js";
import {
  StockChartPlugin,
  DateTime,
  SplineAreaSeries,
  RangeTooltip,
  Crosshair,
  LineSeries,
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  Export,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

new Vue({
	el: '#stockcontainer',
	template: `
  <div class="control-section">
    <div>
      <ejs-stockchart
        id="stockchartcontainer"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :crosshair="crosshair"
        @crosshairLabelRender="crosshairLabelRender">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="SplineArea" xName='x' yName='high' :opacity='0.5'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
`,

  data() {
    return {
      seriesData: stockData1,
      primaryXAxis: {
        valueType: "DateTime",
        crosshairTooltip: { enable: true }
      },
      primaryYAxis: {
        crosshairTooltip: { enable: true }
      },
      crosshair: {
        enable: true
      }
    };
    },
  methods: {
    crosshairLabelRender: function(args) {
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
    }
  },
  provide: {
    stockChart: [DateTime, SplineAreaSeries, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]
  }

});
