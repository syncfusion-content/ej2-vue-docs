<template>
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :border='chartBorder' :chartArea='chartArea' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold' :border='border'> </e-series>
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
        title: 'Countries'
      },
      primaryYAxis: {
        minimum: 0,
        maximum: 80,
        interval: 20,
        title: 'Medals'
      },
      chartBorder: { width: 2, color: 'green' },
      chartArea: {
        border: { width: 2, color: 'blue' },
        margin: {
          left: 50,
          right: 50,
          top: 50,
          bottom: 50
        }
      },
      title: "Olympic Medals",
      legendSettings: { visible: false },
      border: { width: 2, color: 'grey' }
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