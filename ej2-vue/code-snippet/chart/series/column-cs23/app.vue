

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='silver' name='Gold' columnSpacing="0.25" columnWidth="0.25"> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data: function() {
    return {
      seriesData: [
        { country: "USA", gold: 50, silver: 20 },
        { country: "China", gold: 40, silver: 30 },
        { country: "Japan", gold: 70, silver: 10 },
        { country: "Australia", gold: 60, silver: 50 },
        { country: "France", gold: 50, silver: 20 },
        { country: "Germany", gold: 40, silver: 15 },
        { country: "Italy", gold: 40, silver: 25 },
        { country: "Sweden", gold: 30, silver: 35 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
      },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


