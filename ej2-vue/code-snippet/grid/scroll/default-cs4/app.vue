<template>
    <div id="app">
      <ejs-grid :dataSource="data">
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
          </e-columns>
      </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>