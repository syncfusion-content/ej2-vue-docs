<template>
  <div id="app">
    <ejs-button  v-on:click="refreshHeader">Refresh Header</ejs-button>
    <div style='padding:20px 0px 0px 0px'>
      <ejs-grid ref="grid" :dataSource="data">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID"></e-column>
          <e-column field="CustomerID" headerText="Customer ID"></e-column>
          <e-column field="OrderDate" type="Date" headerText="Order Date" format="yMd">
          </e-column>
          <e-column field="Freight" headerText="Freight"></e-column>
          </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
    };
  },
  methods: {
    refreshHeader: function () {
      const column = this.$refs.grid.getColumnByField("CustomerID");
      column.headerText = "New Header Text"; // update the header text of the column object
      this.$refs.grid.refreshHeader(); // refresh the grid header
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