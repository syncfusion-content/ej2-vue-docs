<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' name='England'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, AreaSeries } from "@syncfusion/ej2-vue-charts";

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
        { x: 1, y: 7 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 14 }, { x: 5, y: 1 }, { x: 6, y: 10 },
        { x: 7, y: 8 }, { x: 8, y: 6 }, { x: 9, y: 10 }, { x: 10, y: 10 }, { x: 11, y: 16 }, { x: 12, y: 6 },
        { x: 13, y: 14 }, { x: 14, y: 7 }, { x: 15, y: 5 }, { x: 16, y: 2 }, { x: 17, y: 14 }, { x: 18, y: 7 },
        { x: 19, y: 7 }, { x: 20, y: 10 }],
      primaryXAxis: {
        valueType: 'Double',
        title: 'Overs'
      },
      primaryYAxis: {
        title: 'Runs',
        valueType: 'Double',
        rangePadding: 'None'
      },
      title: "England - Run Rate"
    };
  },
  provide: {
    chart: [AreaSeries]
  },
};
</script>
<style>
#container {
  height: 350px;
}
</style>