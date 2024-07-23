<template>
  <div id="app">
    <div style="padding:2px 0px 0px 0px">
      <ejs-checkbox ref="checkbox" label="Show / Hide Row" :change="onCheckBoxChange"></ejs-checkbox>
    </div>
    <p id="message">{{ message }}</p>
    <ejs-grid ref="grid" :dataSource="data" height="350">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
        <e-column field="OrderDate" type="date" headerText="Order Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShippedDate" type="date" headerText="Shipped Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-checkbox":CheckBoxComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      hiddenRows: [],
      message: "", 
      rowIndex:0
    };
  },
  methods: {
    onCheckBoxChange(args) {
      if (args.checked) {
        for (
          let i = 0;
          i < this.$refs.grid.ej2Instances.getRowsObject().length;
          i++
        ) {
          if (
            this.$refs.grid.ej2Instances.getRowsObject()[i].data
              .CustomerID === "VINET"
          ) {
            this.rowIndex =
              this.$refs.grid.ej2Instances.getRowsObject()[i].index;
            this.$refs.grid.ej2Instances.getRowByIndex(this.rowIndex).style.display = "none";
            this.hiddenRows.push(this.rowIndex);
          }
        }
        if (this.hiddenRows.length > 0) {
          this.message = `Rows with a customer name column value of VINET have been hidden`;
        }
      } else {
        this.hiddenRows.forEach((rowIndex) => {
          this.$refs.grid.ej2Instances.getRowByIndex(rowIndex).style.display = "";
        });
        this.hiddenRows = [];
        this.message = "Show all hidden rows";
      }
    },
  }
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
#message {
  color: red;
  text-align: center;
  font-weight: bold;
}
</style>