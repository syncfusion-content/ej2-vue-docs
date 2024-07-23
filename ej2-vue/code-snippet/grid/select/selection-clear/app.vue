<template>
  <div id="app">
    <ejs-button @click="onClick">Clear Selection</ejs-button>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :selectionSettings="selectionOptions" :pageSettings="pageOptions">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
          <e-column field="Freight" headerText="Freight" format="C2" width="100">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
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
      selectionOptions: { mode: "Both", allowColumnSelection: true, type: "Multiple"},
      pageOptions: { pageSize: 5 },
    };
  },
  methods: {
    onClick: function () {
      this.$refs.grid.ej2Instances.clearSelection();
    },
  },
  provide: {
    grid: [Page],
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