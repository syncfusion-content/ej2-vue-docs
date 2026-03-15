<template>
  <div id="app">
      <ejs-grid :dataSource="data">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="120" 
          textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150" ></e-column>
          <e-column field="OrderDate" type="Date"  headerText="Order Date" width="130" 
            format="yMd" textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="120" format="C2" 
            textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130"
          format="yMd" textAlign="Right"></e-column>
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
.e-grid .e-headercell {
  background-color: #a2d6f4;
  color: rgb(3, 2, 2);
}
</style>