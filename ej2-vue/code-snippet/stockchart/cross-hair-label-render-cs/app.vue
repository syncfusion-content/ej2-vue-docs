<template>
<div class="control-section">
  <ejs-stockchart id="stockchartsplinearea" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :chartArea="chartArea" :crosshair="crosshair" :seriesType="seriesType" :indicatorType="indicatorType" :crosshairLabelRender="crosshairLabelRender">
    <e-stockchart-series-collection>
      <e-stockchart-series :dataSource="seriesData" type="SplineArea" xName="x" yName="high" :opacity="0.5"/>
    </e-stockchart-series-collection>
  </ejs-stockchart>
  </div>
</template>

<script>
import { stockData1 } from './datasource.js';
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, DateTime, SplineAreaSeries,RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator } from '@syncfusion/ej2-vue-charts';

export default {
  name: 'App',
  components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective
  },
  data() {
    return {
      seriesData: stockData1,
      primaryXAxis: {
        valueType: 'DateTime',
        majorGridLines: { width: 0 },
        crosshairTooltip: { enable: true }
      },
      primaryYAxis: {
        crosshairTooltip: { enable: true }
      },
      crosshair: { enable: true, lineType: 'Both' },
    };
  },
  provide: {
    stockChart: [DateTime, SplineAreaSeries, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator ]
  },
  methods: {
    crosshairLabelRender(args) {
      if (args.axisName === 'primaryXAxis') {
        const date = args.value instanceof Date ? args.value : new Date(args.text);
        args.text = date.toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });
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
  }
};
</script>

<style>
.control-section {
    height: 420px;
  }
</style>