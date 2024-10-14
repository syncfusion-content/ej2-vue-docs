<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' isTransposed='true'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' width=2 :marker='marker' :emptyPointSettings='emptyPointSettings'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineSeries, Category } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 },
        { x: 'Mar', y: 2 }, { x: 'Apr', y: null },
        { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
        { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 },
        { x: 'Sep', y: undefined }, { x: 'Oct', y: 10 },
        { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }
      ],
      primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
      },
      primaryYAxis: {
        minimum: -5, maximum: 25, interval: 10,
        labelFormat: '{value}˚C',
        majorGridLines: { width : 0 }
      },
      title: "Climate Graph-2012",
      marker: {
        visible: true, 
        width: 7, 
        height: 7, 
        isFilled: true
      },
      emptyPointSettings: {
        mode: 'Zero'
      }
    };
  },
  provide: {
    chart: [SplineSeries, Category]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>