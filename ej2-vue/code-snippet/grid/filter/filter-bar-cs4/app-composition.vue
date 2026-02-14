<template>
  <div id="app">
    <div style="display: flex;">
      <label style="margin-right:5px">
        <b> Show filter bar operator </b> 
      </label>
      <ejs-switch :change="onChange"></ejs-switch>
    </div>
    <ejs-grid style='margin-top:5px' :dataSource='data' :allowFiltering='true' :filterSettings='filterSettings' 
      allowPaging='true' :pageSettings="pageSettings" height='180px' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd'></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import { ref } from 'vue';
provide('grid',  [Filter, Page]);

let filterSettings= ref({ type:'FilterBar'});
const pageSettings= { pageSize: 5 };
const onChange = function (args) {
  filterSettings.value = {
    showFilterBarOperator: args.checked,
  }
}
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