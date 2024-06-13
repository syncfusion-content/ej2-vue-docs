<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Run Rates'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, StripLine } from "@syncfusion/ej2-vue-charts";

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
        { x: 1, y: 20 }, { x: 2, y: 22 }, { x: 3, y: 0 }, { x: 4, y: 12 }, { x: 5, y: 5 },
        { x: 6, y: 15 }, { x: 7, y: 6 }, { x: 8, y: 12 }, { x: 9, y: 20 }, { x: 10, y: 7 }
      ],
      primaryYAxis:
      {
        title: 'Runs'
      },
      primaryXAxis: {
        title: 'Overs',
        stripLines: [
          { start: 0, end: 5, text: 'powerplay 1', color: 'red', visible: true, opacity: 0.5, rotation: 45, testStyle: { size: 20, color: 'black' } },
          { start: 5, end: 10, text: 'powerplay 2', color: 'blue', visible: true, opacity: 0.5, rotation: 45, testStyle: { size: 20, color: 'black' } },
        ]
      },
      title: "India Vs Australia 1st match"
    };
  },
  provide: {
    chart: [ColumnSeries, StripLine]
  },
}
</script>
<style>
#container {
  height: 350px;
}
</style>