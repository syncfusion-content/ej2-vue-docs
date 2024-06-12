<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='group.x' yName='group.y' name='USA'
          enableComplexProperty="true"> </e-series>
        <e-series :dataSource='seriesData' type='Column' xName='group.x' yName='y' name='UK'
          enableComplexProperty="true"> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

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
        { group: { x: 'Aaa', y: 10 }, y: 20 },
        { group: { x: 'Baa', y: 30 }, y: 10 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      title: "Annual Growth GDP in France"
    };
  },
  provide: {
    chart: [ColumnSeries, LineSeries, Category]
  },
};
</script>
<style>
#container {
  height: 350px;
}
</style>