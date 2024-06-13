<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Freight' :query='queries'>
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query } from '@syncfusion/ej2-data';


let dataManager = new DataManager({
  url: 'https://services.syncfusion.com/vue/production/api/orders'
});
let query = new Query().take(5).where('Estimate', 'lessThan', 3, false);


const seriesData = dataManager;
const queries = query;
const primaryXAxis = {
  valueType: 'Category',
};
const primaryYAxis = {
  title: 'Freight rate in U.S. dollars'
};
const title = 'Container freight rate';

provide('chart', [ColumnSeries, Category]);

</script>
<style>
#container {
  height: 350px;
}
</style>