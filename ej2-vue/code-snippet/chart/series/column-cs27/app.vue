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
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';



let dataManager = new DataManager({
  url: 'https://services.odata.org/V3/Northwind/Northwind.svc/Orders/',
  adaptor: new ODataAdaptor(),
  crossDomain: true
});
let query = new Query();

export default {
  name: "App",
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data() {
    return {
      seriesData: dataManager,
      queries: query,
      primaryXAxis: {
        valueType: 'Category'
      },
      title: 'Order Details'
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