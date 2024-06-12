<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      :annotations='annotations'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide, createApp } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category, ChartAnnotation } from "@syncfusion/ej2-vue-charts";

const app = createApp()
let contentVue = app.component("contentTemplate", {
  template: '<div style="border: 1px solid black; padding: 5px 5px 5px 5px, backgrund:#f5f5f5">Annotation in Pixel</div>',
  data() {
    return {
      data: {}
    };
  }
});
let contentTemplate = function () {
  return { template: contentVue };
};


const seriesData = [
  { country: "USA", gold: 50 },
  { country: "China", gold: 40 },
  { country: "Japan", gold: 70 },
  { country: "Australia", gold: 60 },
  { country: "France", gold: 50 },
  { country: "Germany", gold: 40 },
  { country: "Italy", gold: 40 },
  { country: "Sweden", gold: 30 }
];
const annotations = [{
  content: contentTemplate,
  coordinateUnits: 'Pixel',
  x: 150,
  y: 50
}];
const primaryXAxis = {
  valueType: 'Category',
  title: 'Countries'
};
const primaryYAxis =
{
  minimum: 0, maximum: 80,
  interval: 20, title: 'Medals'
};
const title = "Olympic Medals";

provide('chart', [ColumnSeries, Category, ChartAnnotation]);

</script>
<style>
#container {
  height: 350px;
}
</style>