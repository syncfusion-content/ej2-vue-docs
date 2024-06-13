<template>
    <div id="app">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Run Rates'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import { ChartComponent,SeriesCollectionDirective,SeriesDirective, ColumnSeries, Category, LineSeries, DataLabel, StripLine, DateTime } from "@syncfusion/ej2-vue-charts";

export default {
name: "App",
components: {
"ejs-chart":ChartComponent,
"e-series-collection":SeriesCollectionDirective,
"e-series":SeriesDirective
},

  data() {
    return {
      seriesData: [
              { x: new Date(2000, 0, 1), y: 10 }, { x: new Date(2002, 0, 1), y: 40 },
              { x: new Date(2004, 0, 1), y: 20 }, { x: new Date(2006, 0, 1), y: 50 },
              { x: new Date(2008, 0, 1), y: 15 }, { x: new Date(2010, 0, 1), y: 30 }
        ],
        primaryXAxis: {
           valueType: 'DateTime', intervalType: 'Years',
           stripLines:[
                {start:new Date(2002, 0, 1) , size: 2, sizeType: 'Years', color: 'rgba(167,169,171, 0.3)'}
        ],
        },
        primaryYAxis: {
          minimum: 0, maximum: 60, interval: 10
          },
    };
  },
  provide: {
    chart: [ColumnSeries, Category, LineSeries, DataLabel, StripLine, DateTime]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>