<template>
  <div id="app">
    <div style="text-align:center">
      <p style="color:red;" id="message">{{ message }}</p>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" 
    :allowRowDragAndDrop="true" :rowDragStartHelper="rowDragStartHelper"
    :selectionSettings="selectOptions" 
    id="Grid" :rowDrop="rowDrop"  :rowDragStart="rowDragStart" :rowDrag="rowDrag">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="130"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, RowDD, Selection, Page } from "@syncfusion/ej2-vue-grids";
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
      message: "",
    };
  },
  methods: {
    rowDragStartHelper: function (args) {
      this.message = `rowDragStartHelper event triggered`;
      if (args.data[0].OrderID === 10248) {
        args.cancel = true;
      }
    },
    rowDrop: function (args) {
      this.message = `rowDragStart event triggered`;
      args.cancel = true;
    },
    rowDragStart: function (args) {
      this.message = `rowDrag event triggered`;
      args.rows.forEach((row) => {
        row.classList.add("drag-limit");
      });
    },
    rowDrag: function (args) {
      this.message = `rowDrop event triggered`;
      const value = [];
      for (let r = 0; r < args.rows.length; r++) {
        value.push(args.fromIndex + r);
      }
      this.$refs.grid.$el.ej2_instances[0].reorderRows(value, args.dropIndex);
    },
  },
  provide: {
    grid: [RowDD, Page, Selection],
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
.drag-limit .e-rowcell {
  border: 1px solid red;
}
</style>