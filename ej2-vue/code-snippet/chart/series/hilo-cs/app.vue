<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Hilo' xName='x' high='high' low='low' name='India' fill="blue">
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, HiloSeries, Category } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Jan', low: 87, high: 200 }, { x: 'Feb', low: 45, high: 135 },
        { x: 'Mar', low: 19, high: 85 }, { x: 'Apr', low: 31, high: 108 },
        { x: 'May', low: 27, high: 80 }, { x: 'June', low: 84, high: 130 },
        { x: 'July', low: 77, high: 150 }, { x: 'Aug', low: 54, high: 125 },
        { x: 'Sep', low: 60, high: 155 }, { x: 'Oct', low: 60, high: 180 },
        { x: 'Nov', low: 88, high: 180 }, { x: 'Dec', low: 84, high: 230 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
      },
      primaryYAxis: {
        labelFormat: '{value}mm',
        edgeLabelPlacement: 'Shift',
        title: 'Rainfall',
      },
      title: "Maximum and Minimum Rainfall"
    };
  },
  provide: {
    chart: [HiloSeries, Category]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>