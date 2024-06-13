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
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, ChartAnnotation } from "@syncfusion/ej2-vue-charts";
import { createApp } from 'vue';

const app = createApp();
let contentVue = app.component("contentTemplate", {
  template: '<div style="border: 1px solid black; padidng: 5px 5px 5px 5px, backgrund:#f5f5f5">Highest Medal Count</div>',
  data() {
    return {
      data: {}
    };
  }
});
let contentTemplate = function () {
  return { template: contentVue };
};


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
        { country: "USA", gold: 50 },
        { country: "China", gold: 40 },
        { country: "Japan", gold: 70 },
        { country: "Australia", gold: 60 },
        { country: "France", gold: 50 },
        { country: "Germany", gold: 40 },
        { country: "Italy", gold: 40 },
        { country: "Sweden", gold: 30 }
      ],
      annotations: [{
        content: contentTemplate,
        x: 'France',
        y: 50,
        verticalAlignment: 'Top',
        horizontalAlignment: 'Near'
      }],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
      },
      primaryYAxis:
      {
        minimum: 0, maximum: 80,
        interval: 20, title: 'Medals'
      },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, ChartAnnotation]
  },
};
</script>
<style>
#container {
  height: 350px;
}
</style>