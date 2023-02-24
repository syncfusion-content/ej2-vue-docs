

<template>
    <div id="app">
        <ejs-grid :dataSource="data" :query='query'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataAdaptor, Query } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

export default {
  data() {
    let SERVICE_URI =
      "https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders?$top=7";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new ODataAdaptor()
      }),
      pageSettings: {pageSize: 7},
      query: new Query().addParams('ej2grid', 'true');
    };
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


