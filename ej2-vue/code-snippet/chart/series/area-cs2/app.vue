<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='RangeArea' xName='x' high='high' low='low'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, RangeAreaSeries, Category } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Jan', low: 0.7, high: 6.1 }, { x: 'Feb', low: 1.3, high: 6.3 },
        { x: 'Mar', low: 1.9, high: 8.5 }, { x: 'Apr', low: 3.1, high: 10.8 },
        { x: 'May', low: 5.7, high: 14.4 }, { x: 'June', low: 8.4, high: 16.9 },
        { x: 'July', low: 10.6, high: 19.2 }, { x: 'Aug', low: 10.5, high: 18.9 },
        { x: 'Sep', low: 8.5, high: 16.1 }, { x: 'Oct', low: 6.0, high: 12.5 },
        { x: 'Nov', low: 1.5, high: 6.9 }, { x: 'Dec', low: 5.1, high: 12.1 }
      ],
      primaryXAxis: {
        title: 'Month', valueType: 'Category',
        edgeLabelPlacement: 'Shift'
      },
      primaryYAxis: {
        title: 'Temperature(Celsius)',
        minimum: 0, maximum: 20
      },
      title: "Maximum and Minimum Temperature"
    };
  },
  provide: {
    chart: [RangeAreaSeries, Category]
  },
};
</script>
<style>
#container {
  height: 350px;
}
</style>