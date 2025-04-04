<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData1' type='RangeColumn' xName='x' low='low' high='high'></e-series>
        <e-series :dataSource='seriesData2' type='RangeColumn' xName='x' low='low' high='high'></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, RangeColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data() {
    return {
      seriesData1: [
        { x: 'Jan', low: 0.7, high: 6.1 },    { x: 'Feb', low: 1.3, high: 6.3 },   { x: 'Mar', low: 1.9, high: 8.5 },
        { x: 'Apr', low: 3.1, high: 10.8 },   { x: 'May', low: 5.7, high: 14.40 }, { x: 'Jun', low: 8.4, high: 16.90 },
        { x: 'Jul', low: 10.6, high: 19.20 }, { x: 'Aug', low: 10.5, high: 18.9 }, { x: 'Sep', low: 8.5, high: 16.1 },
        { x: 'Oct', low: 6.0, high: 12.5 },   { x: 'Nov', low: 1.5, high: 6.9 },   { x: 'Dec', low: 5.1, high: 12.1 }
      ],
      seriesData2: [
        { x: 'Jan', low: 1.7, high: 7.1 },  { x: 'Feb', low: 1.9, high: 7.7 },   { x: 'Mar', low: 1.2, high: 7.5 },
        { x: 'Apr', low: 2.5, high: 9.8 },  { x: 'May', low: 4.7, high: 11.4 },  { x: 'Jun', low: 6.4, high: 14.4 },
        { x: 'Jul', low: 9.6, high: 17.2 }, { x: 'Aug', low: 10.7, high: 17.9 }, { x: 'Sep', low: 7.5, high: 15.1 },
        { x: 'Oct', low: 3.0, high: 10.5 }, { x: 'Nov', low: 1.2, high: 7.9 },   { x: 'Dec', low: 4.1, high: 9.1 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
      },
      primaryYAxis: {
        title: 'Temperature(Celsius)',
        labelFormat: '{value}°C'
      },
      title: 'Maximum and Minimum Temperature'
    };
  },
  provide: {
    chart: [RangeColumnSeries, Category]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.index === 1) {
        args.cornerRadius = { topLeft: 10, bottomLeft: 10, topRight: 10, bottomRight: 10 };
      }
      if (args.point.index === 4) {
        args.cornerRadius = { topLeft: 10, bottomLeft: 10, topRight: 10, bottomRight: 10 };
      }
    }
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>