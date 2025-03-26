<template>
  <div id="app">
    <div style="padding: 20px 0px 20px 0px;display:flex">
      <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable and disable search option</label>
      <ejs-switch ref="switch" id="switch" :checked="true" :change="change"></ejs-switch>
    </div>
    <ejs-grid :dataSource="data" :showColumnChooser='true' :toolbar='toolbarOptions' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='150'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' :visible='true' width='150'></e-column>
        <e-column field='ShipCity' headerText='Ship City' :visible='false' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const toolbarOptions = ['ColumnChooser'];
const grid = ref(null);

const change = function(args) {
  if (grid.value && grid.value.ej2Instances) {
    grid.value.ej2Instances.columnChooserSettings.enableSearching = args.checked;
  }
}
provide('grid', [ColumnChooser, Toolbar]);

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