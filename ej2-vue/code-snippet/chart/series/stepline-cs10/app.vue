<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :seriesRender='seriesRender'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y' width=2> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, StepLineSeries } from "@syncfusion/ej2-vue-charts";

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
        { x: 2005, y: 370 },
        { x: 2006, y: 378 },
        { x: 2007, y: 416 },
        { x: 2008, y: 404 },
        { x: 2009, y: 390 },
        { x: 2010, y: 376 },
        { x: 2011, y: 365 },
        { x: 2012, y: 350 }
      ],
      primaryXAxis: {
        minimum: 2004, 
        maximum: 2013, 
        interval: 1,
        title: 'Year'
      },
      primaryYAxis: {
        minimum: 330, 
        maximum: 450, 
        interval: 30,
        title: 'Intensity (g/kWh)'
      },
      title: 'CO2 - Intensity Analysis'
    };
  },
  provide: {
    chart: [StepLineSeries]
  },
  methods: {
    seriesRender: function (args) {
      args.fill = '#ff6347';
    }
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>