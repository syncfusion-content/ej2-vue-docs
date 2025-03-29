<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y' name='Apple'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y1' name='Orange'> </e-series>
        <e-series :dataSource='seriesData' type='StackingBar100' xName='x' yName='y2' name='Wastage'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, StackingBarSeries } from "@syncfusion/ej2-vue-charts";

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
        { x: 2000, y: 0.61, y1: 0.03, y2: 0.48 },
        { x: 2001, y: 0.81, y1: 0.05, y2: 0.53 },
        { x: 2002, y: 0.91, y1: 0.06, y2: 0.57 },
        { x: 2003, y: 1,    y1: 0.09, y2: 0.61 }, 
        { x: 2004, y: 1.19, y1: 0.14, y2: 0.63 },
        { x: 2005, y: 1.47, y1: 0.20, y2: 0.64 },
        { x: 2006, y: 1.74, y1: 0.29, y2: 0.66 }, 
        { x: 2007, y: 1.98, y1: 0.46, y2: 0.76 },
        { x: 2008, y: 1.99, y1: 0.64, y2: 0.77 },
        { x: 2009, y: 1.70, y1: 0.75, y2: 0.55 }
      ],
      primaryXAxis: {
        title: 'Months'
      },
      primaryYAxis: {
        title: 'Percentage (%)',
        labelFormat: '{value}%'
      },
      title: 'Sales Comparison'
    };
  },
  provide: {
    chart: [StackingBarSeries]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.index === 1 && args.point.series.index === 2) {
        args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
      }
      if (args.point.index === 4 && args.point.series.index === 2) {
        args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
      }
      if (args.point.index === 6 && args.point.series.index === 2) {
        args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
      }
      if (args.point.index === 8 && args.point.series.index === 2) {
        args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
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