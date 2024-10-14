<template>
    <div id="app">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :pointRender='pointRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Scatter' xName='x' yName='y' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ScatterSeries } from "@syncfusion/ej2-vue-charts";

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
        { x: 1, y: 15 }, { x: 2, y: 25 }, { x: 3, y: 35 }, { x: 4, y: 45 },
        { x: 5, y: 55 }, { x: 6, y: 60 }, { x: 7, y: 65 }, { x: 8, y: 70 },
        { x: 9, y: 75 }, { x: 10, y: 80 }, { x: 11, y: 85 }, { x: 12, y: 90 },
        { x: 13, y: 92 }, { x: 14, y: 94 }, { x: 15, y: 96 }, { x: 16, y: 97 },
        { x: 17, y: 98 }, { x: 18, y: 99 }, { x: 19, y: 100 }, { x: 20, y: 100 }
      ],
      primaryXAxis: {
        minimum: 0,
        maximum: 21,
        interval: 3,
        majorGridLines: { width: 0 },
        title: 'Study Hours (Per Week)'
      },
      primaryYAxis:
      {
        title: 'Test Scores (%)',
        minimum: 0,
        maximum: 120,
        interval: 20,
        labelFormat: '{value}%'
      },
      title: 'Relationship Between Study Hours and Test Scores',
      marker: { 
        visible: false,
        width: 10,
        height: 10,
        shape: 'Circle'
      },
    };
  },
  provide: {
    chart: [ScatterSeries]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.index % 2 !== 0) {
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