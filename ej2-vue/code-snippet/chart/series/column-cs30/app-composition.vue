<template>
  <div id="app">
    <ejs-chart id="container" :primaryXAxis='primaryXAxis' :title='title'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='CustomerID' yName='Sno' :query='queries'>
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';

class SerialNoAdaptor extends ODataAdaptor {
    processResponse() {
        let i = 0;
        //calling base class processResponse function
        let original = super.processResponse.apply(this, arguments);
        //Adding serial number
        original.result.forEach((item) => item['Sno'] = ++i);
        return { result: original.result, count: original.count };
    }
}

let dataManager = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/orders',
  adaptor: new SerialNoAdaptor()
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