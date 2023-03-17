

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='month' yName='sales' name='Sales' :emptyPointSettings='emptyPointSettings1'></e-series>
                <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales Compare' :emptyPointSettings='emptyPointSettings2'></e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, ColumnSeries, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: null },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: undefined }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
              ],
        primaryXAxis: {
           valueType: 'Category'
        },
      emptyPointSettings1: {
           mode: "Average",
           fill:'grey'
        },
         emptyPointSettings2: {
           mode: "Gap"
        },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [ColumnSeries, LineSeries, Category]
  }
};
</script>
<style>
 #container {
    height: 350px;
 }
</style>


