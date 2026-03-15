<template>
  <div id="app">
    <div style="display: flex;">
      <label style="margin-right:5px">
        Enable or disable ignoreAccent property
      </label>
      <ejs-switch id="switch" :change="change"></ejs-switch>
    </div>
    <ejs-grid ref='grid' style="padding-top: 10px" :dataSource='data' :toolbar='toolbarOptions' height='272px'>
      <e-columns>
        <e-column field='CategoryName' headerText='Category Name' width='100'></e-column>
        <e-column field='ProductName' headerText='Product Name' width='130'></e-column>
        <e-column field='QuantityPerUnit' headerText='Quantity per unit' width='150' textAlign='Right'></e-column>
        <e-column field='UnitsInStock' headerText='Units In Stock' width='80' textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js'
const toolbarOptions = ['Search'];
const grid = ref(null);
const change = function(args){
  if (args.checked) {
    grid.value.ej2Instances.searchSettings.ignoreAccent = true;
  } else {
    grid.value.ej2Instances.searchSettings.ignoreAccent = false;
  }
}
provide('grid', [Toolbar, Search]);
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