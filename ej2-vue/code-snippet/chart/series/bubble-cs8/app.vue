<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Bubble' size='size' xName='x' yName='y'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, BubbleSeries } from "@syncfusion/ej2-vue-charts";

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
        { x: 92.2, y: 7.8,  size: 1.347 },
        { x: 74,   y: 6.5,  size: 1.241 },
        { x: 90.4, y: 6.0,  size: 0.238 },
        { x: 99.4, y: 2.2,  size: 0.312 },
        { x: 88.6, y: 1.3,  size: 0.197 },
        { x: 99,   y: 0.7,  size: 0.0818 },
        { x: 72,   y: 2.0,  size: 0.0826 },
        { x: 99.6, y: 3.4,  size: 0.143 },
        { x: 99,   y: 0.2,  size: 0.128 },
        { x: 86.1, y: 4.0,  size: 0.115 },
        { x: 92.6, y: 6.6,  size: 0.096 },
        { x: 61.3, y: 14.5, size: 0.162 }
      ],
      primaryXAxis: {
        title: 'Literacy Rate',
        minimum: 60,
        maximum: 100,
        interval: 5
      },
      primaryYAxis: {
        title: 'GDP growth rate',
        minimum: -2,
        maximum: 16,
        interval: 2
      },
      title: 'GDP vs Literacy Rate'
    };
  },
  provide: {
    chart: [BubbleSeries]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.y < 4) {
        args.fill = '#ff6347';
      }
      else {
        args.fill = '#009cb8';
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