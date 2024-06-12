<template>
    <div id="app">
         <ejs-chart id= "container" :title='title' :primaryXAxis='primaryXAxis' :pointRender='pointRender' :textRender='textRender'>
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
      seriesData: [
              { x: 'Jan', y: -7.1 }, { x: 'Feb', y: -3.7 },
              { x: 'Mar', y: 2 }, { x: 'Apr', y: 6.3 },
              { x: 'May', y: 13.3 }, { x: 'Jun', y: 18.0 },
              { x: 'Jul', y: 19.8 }, { x: 'Aug', y: 18.1 },
              { x: 'Sep', y: 13.1 }, { x: 'Oct', y: 4.1 },
              { x: 'Nov', y: -3.8 }, { x: 'Dec', y: -6.8 }
              ],
        primaryXAxis: {
           valueType: 'Category'
        },
        marker:{ dataLabel: { visible: true } },
      title: "Alaska Weather Statistics - 2016"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, DataLabel]
  },
  methods: {
      pointRender: function(args) {
       if (args.point.index === 6) {
                args.fill = 'red'
        }
  },
   textRender: function(args) {
      if (args.point.index === 6) {
                args.text = 'Maximum Temperature';
                args.color = 'red';
            }
  }
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>