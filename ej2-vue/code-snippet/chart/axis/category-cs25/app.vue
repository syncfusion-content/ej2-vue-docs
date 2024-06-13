<template>
  <div id="app">
    <ejs-chart id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      :chartArea='chartArea'>
      <e-series-collection>
        <e-series :pointColorMapping='pointColorMapping' :dataSource='seriesData' type='Column' xName='x' yName='y'
          :cornerRadius='cornerRadius'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Jan', y: 6.96, color: "red" },
        { x: 'Feb', y: 8.9, color: "blue" },
        { x: 'Mar', y: 12, color: "orange" },
        { x: 'Apr', y: 17.5, color: "aqua" },
        { x: 'May', y: 22.1, color: "grey" }
      ],
      primaryXAxis: {
        valueType: 'Category', majorGridLines: { width: 0 }
      },
      pointColorMapping: "color",
      primaryYAxis: {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}°C',
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      title: "USA CLIMATE - WEATHER BY MONTH",
      cornerRadius: {
        topLeft: 10, topRight: 10
      }
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>