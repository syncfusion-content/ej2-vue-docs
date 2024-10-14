<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='RangeStepArea' xName='x' high='high' low='low' noRisers=true opacity=0.1 :border='border'>
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, RangeStepAreaSeries, Category } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Jan', high: 29, low: 19 },
        { x: 'Feb', high: 32, low: 22 },
        { x: 'Mar', high: 35, low: 25 },
        { x: 'Apr', high: 37, low: 27 },
        { x: 'May', high: 35, low: 25 },
        { x: 'Jun', high: 32, low: 22 },
        { x: 'Jul', high: 30, low: 20 },
        { x: 'Aug', high: 32, low: 22 },
        { x: 'Sep', high: 35, low: 25 },
        { x: 'Oct', high: 37, low: 27 },
        { x: 'Nov', high: 35, low: 25 },
        { x: 'Dec', high: 32, low: 22 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
      },
      primaryYAxis: {
        labelFormat: '{value}˚C',
        title: 'Temperature',
        lineStyle: { width: 0 },
        minimum: 10,
        maximum: 40,
        majorTickLines: { width: 0 }
      },
      title: 'Monthly Temperature Range',
      border: { width: 1.5 }
    };
  },
  provide: {
    chart: [RangeStepAreaSeries, Category]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>