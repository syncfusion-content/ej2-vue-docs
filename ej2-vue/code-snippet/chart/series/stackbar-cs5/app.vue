<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y' name='Apple' :border='border'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y1' name='Orange' :border='border1'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y2' name='Wastage' :border='border2'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, StackingBarSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Jan', y: 6,  y1: 6,  y2: -1 }, 
        { x: 'Feb', y: 8 , y1: 8,  y2: -1.5 },
        { x: 'Mar', y: 12, y1: 11, y2: -2 }, 
        { x: 'Apr', y: 15, y1: 16, y2: -2.5 },
        { x: 'May', y: 20, y1: 21, y2: -3 }, 
        { x: 'Jun', y: 24, y1: 25, y2: -3.5 },
        { x: 'Jul', y: 28, y1: 27, y2: -4 }, 
        { x: 'Aug', y: 32, y1: 31, y2: -4.5 },
        { x: 'Sep', y: 33, y1: 34, y2: -5 }, 
        { x: 'Oct', y: 35, y1: 34, y2: -5.5 },
        { x: 'Nov', y: 40, y1: 41, y2: -6 }, 
        { x: 'Dec', y: 42, y1: 42, y2: -6.5 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
      },
      primaryYAxis: {
        title: 'Percentage (%)',
        minimum: -20,
        maximum: 100,
        labelFormat: '{value}%',
        edgeLabelPlacement: 'Shift'
      },
      title: 'Sales Comparison',
      border: { width: 2, color: '#ff4251', dashArray: "5,5" },
      border1: { width: 2, color: '#66BDB7', dashArray: "5,5" },
      border2: { width: 2, color: '#794F1B', dashArray: "5,5" }
    };
  },
  provide: {
    chart: [StackingBarSeries, Category, Legend]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>