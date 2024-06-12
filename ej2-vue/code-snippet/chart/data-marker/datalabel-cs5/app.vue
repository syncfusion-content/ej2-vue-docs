<template>
    <div id="app">
         <ejs-chart id= "container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Warmest' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>

import { ChartComponent, ColumnSeries, Category, DataLabel, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-vue-charts";

export default {
name: "App",
components: {
"ejs-chart":ChartComponent,
"e-series-collection":SeriesCollectionDirective,
"e-series":SeriesDirective,

},

  data() {
    return {
      seriesData:[{ x: 'Jan', y: 12, text: 'January : 12°C' }, { x: 'Feb', y: 8, text: 'February : 8°C' },
                  { x: 'Mar', y: 11, text: 'March : 11°C' }, { x: 'Apr', y: 6, text: 'April : 6°C' }],
        primaryXAxis: {
           valueType: 'Category'
        },
        marker: { dataLabel: { visible: true, format: 'n2'} },
      title: "Alaska Weather Statistics - 2016"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, DataLabel]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>