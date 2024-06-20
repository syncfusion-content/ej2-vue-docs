<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis='primaryXAxis' :title='title'>
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
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';


let dataManager = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
  adaptor: new ODataV4Adaptor()
});
let query = new Query();


const seriesData = dataManager;
const queries = query;
const primaryXAxis = {
  valueType: 'Category'
};
const title = 'Order Details';

provide('chart', [ColumnSeries, Category]);

</script>
<style>
  #container {
    height: 350px;
  }
</style>