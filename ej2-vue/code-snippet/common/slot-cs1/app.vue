<template>
  <div id="grid">
    <ejs-grid ref="grid" :dataSource="ds">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
        <e-column field="CustomerName" headerText="Customer Name" width=150 />
        <e-column field="ShipCountry" headerText="Ship Country" width=150 :template="'cTemplate'">
          <template v-slot:cTemplate="{ data }">
            <ejs-button :content="data.ShipCountry"></ejs-button>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { GridComponent } from "@syncfusion/ej2-vue-grids";
var empData = [
  { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
  { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
  { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
  { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
];
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() { return { ds: empData } }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>