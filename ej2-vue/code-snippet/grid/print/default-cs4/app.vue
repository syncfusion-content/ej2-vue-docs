<template>
  <div id="app">
    <div style="display: inline-block; margin-bottom:5px">
      <label style="padding:  10px 10px 12px 0;font-weight: bold;"> Sekect print mode: </label> 
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
      width="150" :dataSource="dropDownData" :fields='fields' :change="change"></ejs-dropdownlist>
    </div>
    <ejs-grid id='grid' ref='grid' :dataSource='data' :allowPaging='true' :pageSettings='pageOptions' :toolbar='toolbarOptions'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Toolbar} from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-dropdownlist": DropDownListComponent,
  },
  data() {
    return {
      data: data,
      toolbarOptions: ["Print"],
      pageOptions: { pageSize: 6 },
      fields: { text: "text", value: "value" },
      dropDownData: ["AllPages", "CurrentPage"],
    };
  },
  methods: {
    change: function (args) {
      this.$refs.grid.ej2Instances.printMode = args.value;
    },
  },
  provide: {
    grid: [Page, Toolbar]
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
</style>