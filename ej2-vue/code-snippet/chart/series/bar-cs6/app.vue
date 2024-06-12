<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Bar' columnFacet='Cylinder' xName='x' yName='y' name='India'>
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, BarSeries } from "@syncfusion/ej2-vue-charts";



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
        { x: 2006, y: 9 },
        { x: 2007, y: 7.8 },
        { x: 2008, y: 10.5 },
        { x: 2009, y: 8.4 },
        { x: 2010, y: 6 },
        { x: 2011, y: 11 }
      ],
      title: "Unemployment rate in percentage",
      primaryXAxis: {
        minimum: 2005,
        maximum: 2012,
        interval: 1,
        title: 'Year'
      },
      primaryYAxis:
      {
        minimum: 3,
        maximum: 12,
        interval: 1,
        title: 'Percentage',
        labelFormat: '{value}%'
      }
    };
  },
  provide: {
    chart: [BarSeries]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>