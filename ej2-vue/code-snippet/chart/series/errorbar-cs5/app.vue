<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' :marker='marker' :errorBar='errorBar' :animation='animation'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, ErrorBar } from "@syncfusion/ej2-vue-charts";

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
        { x: 2006, y: 7.8 },
        { x: 2007, y: 7.2 },
        { x: 2008, y: 6.8 },
        { x: 2009, y: 10.7 },
        { x: 2010, y: 10.8 },
        { x: 2011, y: 9.8 }
      ],
      primaryXAxis: {
        minimum: 2005, 
        maximum: 2012, 
        interval: 1,
        title: 'Year'
      },
      primaryYAxis: {
        minimum: 3, maximum: 12,
        interval: 1, title: 'Percentage',
        labelFormat: '{value}%'
      },
      errorBar: {
        visible: true,
        mode: 'Vertical',
        direction: 'Minus'
      },
      marker: {
        visible: true
      },
      animation: { 
        enable: false 
      },
      title: "Unemployment rate (%)"
    };
  },
  provide: {
    chart: [LineSeries, ErrorBar]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>