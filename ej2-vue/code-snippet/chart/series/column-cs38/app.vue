<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='silver' name='Silver' columnWidthInPixel=10> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";

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
        { country: 'USA',       gold: 50, silver: 40 },
        { country: 'China',     gold: 40, silver: 35 },
        { country: 'Japan',     gold: 70, silver: 65 },
        { country: 'Australia', gold: 60, silver: 50 },
        { country: 'France',    gold: 50, silver: 55 },
        { country: 'Germany',   gold: 40, silver: 20 },
        { country: 'Italy',     gold: 40, silver: 30 },
        { country: 'Sweden',    gold: 30, silver: 40 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
      },
      primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 20, 
        title: 'Medals'
      },
      title: 'Olympic Medals',
      border: { 
        width: 2, 
        color: '#FFA500' 
      }
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>