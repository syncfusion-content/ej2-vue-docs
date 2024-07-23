<template>
  <div id="app">
    <div style="display: inline-block">
      <label style="padding: 30px 17px 0 0">Choose selection mode:</label>
      <ejs-dropdownlist index="0" width="150" 
        :dataSource="dropdownData" :change="valueChange">
      </ejs-dropdownlist>
    </div>
    <div style="padding: 20px 0px 20px 0px">
      <label style="padding: 0px 20px 0px 0px">Enable/Disable Toggle selection</label>
      <ejs-switch :checked="true"   :change="toggleSelection">
      </ejs-switch>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-grid ref="grid" :dataSource="data"  :selectionSettings="selectionOptions" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns';
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
import { ref } from 'vue';
const grid = ref(null);
const selectionOptions = { type: 'Multiple' };
const dropdownData = [
  { text: 'Row', value: 'Row' },
  { text: 'Cell', value: 'Cell' },
  { text: 'Both', value: 'Both' }
];
const valueChange = function (args) {
  grid.value.ej2Instances.selectionSettings.mode = args.value;
}
const toggleSelection = function (args) {
  grid.value.ej2Instances.selectionSettings.enableToggle = args.checked;
}
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