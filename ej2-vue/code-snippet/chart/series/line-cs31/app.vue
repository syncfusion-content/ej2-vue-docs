<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :legendSettings='legendSettings' :tooltip='tooltip' :chartArea='chartArea' :pointRender='pointRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Pareto' xName='x' yName='y' name='Defect' width='2' :paretoOptions='paretoOptions'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ParetoSeries, LineSeries, ColumnSeries, Category, Legend, Tooltip } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Button Defect', y: 23 },
        { x: 'Pocket Defect', y: 16 },
        { x: 'Coller Defect', y: 10 },
        { x: 'Cuff Defect', y: 7 },
        { x: 'Sleeve Defect', y: 6 },
        { x: 'Other Defect', y: 2 }
      ],
      primaryXAxis: {
        interval: 1,
        valueType: 'Category',
        majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
        lineStyle: { width: 0 }, labelIntersectAction: 'Rotate45'
      },
      primaryYAxis: {
        title: 'Frequency of Occurence',
        minimum: 0,
        maximum: 25,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
        minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      title: 'Pareto chart - Defects in Shirts',
      legendSettings: { visible: true },
      tooltip: {
        enable: true,
        shared: true
      },
      paretoOptions: {
        marker: { 
          visible: true, 
          isFilled: true, 
          width: 7, 
          height: 7 
        },
        width: 2
      }
    };
  },
  provide: {
    chart: [ParetoSeries, LineSeries, ColumnSeries, Category, Legend, Tooltip]
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