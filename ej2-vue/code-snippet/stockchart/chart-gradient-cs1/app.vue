<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
        :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" xName="Date" high="High" low="Low"
            open="Open" close="Close" volume="Volume" :linearGradient="linearGradient">
          </e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script>

import { StockDetails } from "./datasource.js";
import {
  StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export, Tooltip, Crosshair
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
      seriesData: StockDetails,
      primaryXAxis: {
        valueType: 'DateTime',
      },
      primaryYAxis: {
        interval: 10
      },
      linearGradient: {
        x1: 0, y1: 0,
        x2: 1, y2: 1,
        gradientColorStop: [
          { color: '#FF7E5F', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
          { color: '#FEB47B', offset: 100, opacity: 1, lighten: 0, brighten: 0.5 },
        ]
      },
      title: 'AAPL Stock Price',
    };
  },
  provide: {
    stockChart: [
      DateTime, Tooltip, Crosshair, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
      BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
    ]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>
