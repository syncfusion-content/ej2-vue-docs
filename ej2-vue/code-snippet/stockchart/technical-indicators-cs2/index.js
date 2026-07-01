
import Vue from "vue";
import { chartData } from "./datasource.js";
import { StockChartPlugin, DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, LineSeries, SplineSeries, AccumulationDistributionIndicator,
  AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator, MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator, TmaIndicator
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

new Vue({
  el: "#app",
  template: `
    <div class="control-section">
      <div>
        <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :tooltip="tooltip"
          :crosshair="crosshair" :title="title" :beforeIndicatorChange="beforeIndicatorChange" :indicatorChanged="indicatorChanged">
          <e-stockchart-series-collection>
            <e-stockchart-series :dataSource="seriesData" type="Candle" xName="date" open="open" high="high" low="low" close="close"
              volume="volume" name="Apple Inc">
            </e-stockchart-series>
          </e-stockchart-series-collection>
        </ejs-stockchart>
      </div>
    </div>
  `,

  data() {
    return {
      seriesData: chartData,
      title: "AAPL Stock Price",
      primaryXAxis: {
        valueType: "DateTime"
      },
      tooltip: {
        enable: true
      },
      crosshair: {
        enable: true
      }
    };
  },

  methods: {
    beforeIndicatorChange(args) {
      console.log("Before Indicator Change:", args.type);
      // Prevent EMA indicator
      if (args.type === "Ema") {
        args.cancel = true;
      }
    },
    indicatorChanged(args) {
      console.log(`${args.type} indicator ${args.isAdd ? "added" : "removed"}`);
    }
  },
  provide: {
    stockChart: [ DateTime, Tooltip, RangeTooltip, Crosshair, CandleSeries, LineSeries, SplineSeries, AccumulationDistributionIndicator,
      AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator, MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator, TmaIndicator
    ]
  }
});