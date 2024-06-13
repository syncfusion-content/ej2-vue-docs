<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Radar' xName='x' yName='y' drawType='Line'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, RadarSeries, LineSeries } from "@syncfusion/ej2-vue-charts";

export default {
name: "App",
components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data() {
    return {
    seriesData:[
     { x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 },
     { x: 2008, y: 27 }, { x: 2009, y: 32 }, { x: 2010, y: 35 },
     { x: 2011, y: 30 }],
      primaryXAxis: {
          title: 'Year', coefficient: 50,
          minimum: 2004, maximum: 2012, interval: 1
        },
         primaryYAxis: {
            minimum: 20, maximum: 40, interval: 5,
            title: 'Efficiency',
            labelFormat: '{value}%'
        },
      title: "Efficiency of oil-fired power production"
    };
  },
  provide: {
    chart: [RadarSeries, LineSeries]
  },
};
</script>
<style>
  #container {
   height: 350px;
 }
</style>