

<template>
    <div id="app">
         <ejs-chart id="container" :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Run Rates'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, ColumnSeries, StripLine, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
                {x: 1, y: 5},{x: 2, y: 39},{x: 3, y: 21},{x: 4, y: 51},{x: 5, y: 30},
                {x: 6, y: 25},{x: 7, y: 10},{x: 8, y: 40},{x: 9, y: 50},{x: 10, y: 20}
        ],
          primaryYAxis:
        {
          minimum: 0,
          maximum: 60,
          interval: 10,
          stripLines:[
                  { start: 30, size: 2, sizeType: 'Pixel', dashArray:"10,5", color: "red"}
        ],
        },
    };
  },
  provide: {
    chart: [ColumnSeries, StripLine, LineSeries]
  },
};
</script>
<style>
#container {
   height: 350px;
 }
</style>


