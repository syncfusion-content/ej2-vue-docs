<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" 
    :rowSelecting="rowselecting" :selectionSettings="selectionOptions" >
      <e-columns>
        <e-column type="checkbox" width="100"></e-column>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right">
        </e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
        <e-column type="date" field="OrderDate" headerText="Order Date" width="130" format="yMd" 
        textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" 
        textAlign="Right"></e-column>
        <e-column type="date" field="ShippedDate" headerText="Shipped Date" width="130" 
        format="yMd" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150">
        </e-column>
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
      selectionOptions: { checkboxMode: "ResetOnRowClick" },
    };
  },
  methods: {
    rowselecting: function (args) {
      if (args.target && args.target.classList.contains("e-icons"))
        this.$refs.grid.clearSelection();
    },
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
</style>
