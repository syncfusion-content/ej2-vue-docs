<template>
  <div id="app">
      <ejs-grid ref=grid :dataSource="data" allowPaging="true">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" 
          :customAttributes="{class:'customcss'}" textAlign="Center">
          </e-column>
          <e-column field="CustomerID" headerText="Customer Name" 
          textAlign="Center"> </e-column>
          <e-column field="OrderDate" type="Date" headerText="Order Date" format="yMd"
          :customAttributes="{class:'customcss'}" textAlign="Center">
          </e-column>
          <e-column field="ShippedDate" type="date" headerText="Shipped Date" textAlign="Center" format="yMd"></e-column>
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
      data: data,
    };
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
.e-grid .e-headercell.customcss {
  background-color: rgb(43, 195, 226);
  color: rgb(10, 8, 8);
}
.e-grid .e-headercell {
  background-color: #a2d6f4;
}
</style>