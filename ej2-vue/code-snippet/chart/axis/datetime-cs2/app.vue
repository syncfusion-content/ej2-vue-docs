<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Sales'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, DateTime } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: new Date(2000, 6, 11), y: 10 }, { x: new Date(2002, 3, 7), y: 30 },
        { x: new Date(2004, 3, 6), y: 15 }, { x: new Date(2006, 3, 30), y: 65 },
        { x: new Date(2008, 3, 8), y: 90 }, { x: new Date(2010, 3, 8), y: 85 }
      ],
      primaryXAxis: {
        valueType: 'DateTime',
        title: 'Sales Across Years',
        labelFormat: 'yMMM'
      },
      primaryYAxis: {
        title: 'Sales Amount in millions(USD)',
      },
      title: "Average Sales Comparison"
    };
  },
  provide: {
    chart: [LineSeries, DateTime]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>