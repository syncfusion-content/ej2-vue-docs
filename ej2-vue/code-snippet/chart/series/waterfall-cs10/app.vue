<template>
    <div id="app">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis' :seriesRender='seriesRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' :intermediateSumIndexes='intermediate' :sumIndexes='sum'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, WaterfallSeries, Category } from "@syncfusion/ej2-vue-charts";

export default {
name: "App",
components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: 'Income', y: 4711 },
        { x: 'Sales', y: -1015 },
        { x: 'Development', y: -688 },
        { x: 'Revenue', y: 1030 },
        { x: 'Balance' },
        { x: 'Administrative', y: -780 },
        { x: 'Expense', y: -361 },
        { x: 'Tax', y: -695 },
        { x: 'Net Profit' }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      sum: [8],
      intermediate: [4]
    };
  },
  provide: {
    chart: [WaterfallSeries, Category]
  },
  methods: {
    seriesRender: function (args) {
      args.fill = '#ff6347';
      args.series.negativeFillColor = '#ff6347';
      args.series.summaryFillColor = '#ff6347';
    }
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>