<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Temperature'> </e-series>
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
    "e-series": SeriesDirective,
  },
  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 60 }, { x: 'Feb', y: 50 }, { x: 'Mar', y: 64 },
        { x: 'Apr', y: 63 }, { x: 'May', y: 81 }, { x: 'Jun', y: 64 },
        { x: 'Jul', y: 82 }, { x: 'Aug', y: 96 }, { x: 'Sep', y: 78 },
        { x: 'Oct', y: 60 }, { x: 'Nov', y: 58 }, { x: 'Dec', y: 56 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        majorTickLines: {
          color: 'blue',
          width: 5
        },
        minorTickLines: {
          color: 'red',
          width: 0
        }
      },
      primaryYAxis:
      {
        majorGridLines: {
          color: 'blue',
          width: 1
        },
        minorGridLines: {
          color: 'red',
          width: 0
        }
      },
      title: "Temperature flow over months"
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  },
};
</script>
<style>
#container {
  height: 350px;
}
</style>