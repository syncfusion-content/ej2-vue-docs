<template>
  <div id="app">
    <div style="padding:0 0 20px 0">
      <label style="padding: 30px 17px 0 0;font-weight: bold">Select page size:</label>
      <ejs-numerictextbox ref="numericTextbox"   width="200px"  format="####.##" :min="150" :step="50" placeholder='select container height'
      @change='calculatePageSize' ></ejs-numerictextbox>
    </div>
    <ejs-grid ref="grid" id="grid" :dataSource="data" :allowPaging="true" >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90">
        </e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign='Right' format='C2' 
        width="90"></e-column>
        <e-column field="OrderDate" type="date" headerText="Order Date" textAlign='Right' 
        format='yMd' width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
const grid = ref(null);
const calculatePageSize=function(args) {
   grid.value.ej2Instances.pageSettings.pageSize =  grid.value.ej2Instances.calculatePageSizeByParentHeight(args.value.toString());
}
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
</style>