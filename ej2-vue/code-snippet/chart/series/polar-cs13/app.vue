<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Radar' xName='country' yName='gold' drawType='Column'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, RadarSeries, ColumnSeries } from "@syncfusion/ej2-vue-charts";

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
        { country: "USA",       gold: 50 },
        { country: "China",     gold: 40 },
        { country: "Japan",     gold: 70 },
        { country: "Australia", gold: 60 },
        { country: "France",    gold: 50 },
        { country: "Germany",   gold: 40 },
        { country: "Italy",     gold: 40 },
        { country: "Sweden",    gold: 30 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries',
        coefficient: 80
      },
      primaryYAxis: {
        title: 'Medals'
      },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [Category, RadarSeries, ColumnSeries]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>