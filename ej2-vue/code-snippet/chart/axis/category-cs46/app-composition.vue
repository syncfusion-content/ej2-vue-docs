<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :legendSettings='legendSettings'>
     <template v-slot:myTemplate="{ data }">
          <div id="wrap">
             <table>
            <tr>
                <td align="center" style="background-color: #2E8B57; font-size: 14px; color: #FFD700; font-weight: bold; padding: 5px">Country :</td>
                <td align="center" style="background-color: #4682B4; font-size: 14px; color: #FFFFFF; font-weight: bold; padding: 5px">${label}</td>
            </tr>
        </table>
          </div>
        </template>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='count' > </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";

const seriesData = [
   { Country: 'USA', Count: 46 },
    { Country: 'UK', Count: 27 },
    { Country: 'China', Count: 26 },
    { Country: 'Russia', Count: 19 },
    { Country: 'Germany', Count: 17 }
];
const primaryXAxis = {
   valueType: 'Category',
   labelTemplate: '#myTemplate'
};
const primaryYAxis = {
 valueType: 'Double'
};
const legendSettings = {
  visible: true,
  layout: "Auto",
  maximumColumns: 3,
  fixedWidth: true
};
const title = "Olympic Medals";

provide('chart', [ColumnSeries, Category, Legend]);
</script>
<style>
  #container {
    height: 350px;
  }
</style>