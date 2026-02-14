<template>
  <div id="app">
    <div style="padding: 0px 0px 20px 0px; display:flex">
      <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Query String</label>
      <ejs-switch ref="switch" id="switch"  @change="toggleQueryString"></ejs-switch>
    </div>
    <p id="message">{{ message }}</p>    
    <ejs-grid ref="grid" :dataSource='data' allowPaging='true'  :actionBegin="onActionBegin">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='OrderDate' type="date" headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
      </e-columns>
    </ejs-grid> 
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";

const grid = ref(null);
let message = ref('');

const toggleQueryString = function(args) {
  grid.value.ej2Instances.pageSettings.enableQueryString = args.checked;
};

const onActionBegin = function(args) {
  if (args.requestType === "paging" && grid.value.ej2Instances.pageSettings.enableQueryString) {
    message.value = "Current URL: " + window.location.href;
  }
};

provide('grid',  [Page]);
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
#message {
  color: red;
  text-align: center;
}
</style>
