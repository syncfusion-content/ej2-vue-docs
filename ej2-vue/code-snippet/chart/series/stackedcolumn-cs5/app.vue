<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y' name='UK' :border='border'> </e-series>
        <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y1' name='Germany' :border='border1'> </e-series>
        <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y2' name='France' :border='border2'> </e-series>
        <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y3' name='Italy' :border='border3'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries, DateTime, Legend } from "@syncfusion/ej2-vue-charts";

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
        { x: new Date(2006, 0, 1), y: 900, y1: 190, y2: 250, y3: 150 },
        { x: new Date(2007, 0, 1), y: 544, y1: 226, y2: 145, y3: 120 },
        { x: new Date(2008, 0, 1), y: 880, y1: 194, y2: 190, y3: 115 },
        { x: new Date(2009, 0, 1), y: 675, y1: 250, y2: 220, y3: 125 },
        { x: new Date(2010, 0, 1), y: 765, y1: 222, y2: 225, y3: 132 },
        { x: new Date(2011, 0, 1), y: 679, y1: 181, y2: 135, y3: 137 },
        { x: new Date(2012, 0, 1), y: 770, y1: 128, y2: 152, y3: 110 }
      ],
      primaryXAxis: {
        valueType: 'DateTime',
        title: 'Years',
        interval: 1,
        labelFormat: 'y'
      },
      primaryYAxis: {
        title: 'GDP (%) Per Annum',
        rangePadding: 'None',
        labelFormat: '{value}%'
      },
      title: 'Gross Domestic Product Growth',
      border: { width: 2, color: '#ff4251', dashArray: "5,5" },
      border1: { width: 2, color: '#66BDB7', dashArray: "5,5" },
      border2: { width: 2, color: '#794F1B', dashArray: "5,5" },
      border3: { width: 2, color: '#1a9a6f', dashArray: "5,5" }
    };
  },
  provide: {
    chart: [StackingColumnSeries, DateTime, Legend]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>