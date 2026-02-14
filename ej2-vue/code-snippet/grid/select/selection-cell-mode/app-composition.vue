<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding: 30px 17px 0 0">Choose cell selection mode :</label>
      <ejs-dropdownlist index="0" width="150" :dataSource="dropdownData" :change="valueChange">
      </ejs-dropdownlist>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource='data' :selectionSettings='selectionOptions' height='315px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=150>
          </e-column>
          <e-column field='ShipCity' headerText='Ship City' width=150>
          </e-column>
          <e-column field='ShipName' headerText='Ship Name' width=150>
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns';
import { data } from "./datasource.js";
import { ref } from 'vue';
const grid = ref(null);
const dropdownData = [
  { text: 'Flow', value: 'Flow' },
  { text: 'Box', value: 'Box' },
  { text: 'BoxWithBorder', value: 'BoxWithBorder' },
];
const selectionOptions = { mode: 'Cell', type: 'Multiple' };
const valueChange = function (args) {
  grid.value.ej2Instances.selectionSettings.cellSelectionMode = args.value;
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