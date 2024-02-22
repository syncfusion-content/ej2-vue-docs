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
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
    };
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
.e-grid .e-headercell {
  background-color: #a2d6f4;
  color: rgb(3, 2, 2);
}
</style>