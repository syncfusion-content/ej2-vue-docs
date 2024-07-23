<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowRowDragAndDrop="true" :selectionSettings="selectOptions" :rowDropSettings="rowDropOptions"
      id="Grid" :rowDrop="rowDrop">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="130"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, RowDD, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: employeeData,
      selectOptions: { type: "Multiple" },
      rowDropOptions: { targetID: "Grid" },
    };
  },
  methods: {
    rowDrop: function (args) {
      args.cancel = true;
      var value = [];
      for (var r = 0; r < args.rows.length; r++) {
        value.push(args.fromIndex + r);
      }
      this.$refs.grid.ej2Instances.reorderRows(value, args.dropIndex);
    },
  },
  provide: {
    grid: [RowDD, Page],
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