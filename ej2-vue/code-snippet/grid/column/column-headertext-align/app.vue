<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding:  10px 10px 12px 0"> Align the text of header text : </label> 
      <ejs-dropdownlist  index="0" width="150" :dataSource="alignmentData"  :change="changeAlignment"></ejs-dropdownlist>
    </div>
    <ejs-grid ref="grid" style="padding-top: 20px" :dataSource="data" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120">
        </e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="140">
        </e-column>
        <e-column field="Freight" headerText="Freight" format="C" width="120">
        </e-column>
        <e-column field="OrderDate" type="date" headerText="Order Date" format="yMd" width="140">
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      alignmentData: [
        { text: "Left", value: "Left" },
        { text: "Right", value: "Right" },
        { text: "Center", value: "Center" },
        { text: "Justify", value: "Justify" },
      ],
    };
  },
  methods: {
    changeAlignment: function (args) {
      this.$refs.grid.ej2Instances.columnModel.forEach((col) => {
        col.headerTextAlign = args.value;
      });
      this.$refs.grid.ej2Instances.refreshHeader();
    },
  }
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
</style>