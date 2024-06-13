<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Pareto' xName='x' yName='y' name='Defect' width='2'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, StackingColumnSeries, Tooltip, ColumnSeries, Category, Legend, ParetoSeries } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      seriesData: [
        { x: 'Traffic', y: 56 }, { x: 'Child Care', y: 44.8 },
        { x: 'Transport', y: 27.2 }, { x: 'Weather', y: 19.6 },
        { x: 'Emergency', y: 6.6 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Defects'
      },
      primaryYAxis:
      {
        title: 'Frequency',
        minimum: 0,
        maximum: 150,
        interval: 30,
      },

      title: 'Defect vs Frequency'

    };
  },
  provide: {
    chart: [StackingColumnSeries, LineSeries, Category, ColumnSeries, Legend, Tooltip, ParetoSeries]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>