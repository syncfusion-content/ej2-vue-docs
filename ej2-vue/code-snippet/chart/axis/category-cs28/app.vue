<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      :annotations='annotations'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='country' yName='gold' name='Gold'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Category, Selection, ChartAnnotation } from "@syncfusion/ej2-vue-charts";

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
        { country: "USA", gold: 50, silver: 60 },
        { country: "China", gold: 40, silver: 50 },
        { country: "Japan", gold: 70, silver: 80 },
        { country: "Australia", gold: 60, silver: 70 },
        { country: "France", gold: 50, silver: 60 },
        { country: "Germany", gold: 40, silver: 50 },
        { country: "Italy", gold: 40, silver: 50 },
        { country: "Sweden", gold: 30, silver: 70 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
      },
      primaryYAxis:
      {
        minimum: 0, maximum: 80,
        interval: 20, title: 'Medals'
      },
      annotations: [{
        content: '<div style="border-top:3px dashed grey;border-top-width: 2px; width: 1000px"></div>',
        coordinateUnits: 'Point',
        x: 'France',
        y: 50
      }],
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [LineSeries, Category, Selection, ChartAnnotation]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>