<template>
    <div id="app">
        <ejs-stockchart :title='title'  :crosshair="crosshair">
            <e-stockchart-series-collection>
                <e-stockchart-series :dataSource='seriesData' type='Candle'>
                </e-stockchart-series>
            </e-stockchart-series-collection>
        </ejs-stockchart>
    </div>
</template>
<script>
import { chartData } from "./datasource.js";
import {
  StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries, Crosshair, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
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
      title: 'Sales Analysis',
      seriesData: chartData,
      crosshair: {
        enable: true
      }
    };
  },
  provide: {
    stockChart: [
      DateTime, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, Crosshair, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
    ]
  }
};
</script>