<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='RangeArea' xName='x' high='high' low='low' fill='blue'> </e-series>
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
        { x: 'Jan', high: 14, low: 4 },
        { x: 'Feb', high: 17, low: 7 },
        { x: 'Mar', high: 20, low: 10 },
        { x: 'Apr', high: 22, low: 12 },
        { x: 'May', high: 20, low: 10 },
        { x: 'Jun', high: 17, low: 7 },
        { x: 'Jul', high: 15, low: 5 },
        { x: 'Aug', high: 17, low: 7 },
        { x: 'Sep', high: 20, low: 10 },
        { x: 'Oct', high: 22, low: 12 },
        { x: 'Nov', high: 20, low: 10 },
        { x: 'Dec', high: 17, low: 7 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
      },
      primaryYAxis: {
        title: 'Temperature',
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 30,
        majorTickLines: { width: 0 }
      },
      title: 'Monthly Temperature Range'
    };
  },
  provide: {
    chart: [RangeAreaSeries, Category]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>