<template>
  <div id="app">
    <ejs-grid :dataSource='data' printMode='CurrentPage' :allowPaging='true' :pageSettings='pageOptions'
      :toolbar='toolbarOptions'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data,
      toolbarOptions: ['Print'],
      pageOptions: { pageSize: 6 }
    };
  },
  provide: {
    grid: [Page, Toolbar]
  }
}
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>