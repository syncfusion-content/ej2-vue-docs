<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style='padding:  10px 10px 15px 0'> Change the field: </label>
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0" width="130" :dataSource="ddlData"></ejs-dropdownlist>
    </div>
    <div>
      <label style="padding: 30px 17px 0 0">Enter the width: </label>
      <ejs-textbox ref='textbox' type="textbox" placeholder="Enter new width" width="120"></ejs-textbox>
      <ejs-button ref='button' cssClass='e-outline' v-on:click="onExternalResize">Resize</ejs-button>
    </div>
    <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='315' :allowResizing='true'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Resize } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
const grid = ref(null);
const dropdown = ref(null);
const textbox = ref(null);

const ddlData = [
  { text: 'OrderID', value: 'OrderID' },
  { text: 'CustomerID', value: 'CustomerID' },
  { text: 'Freight', value: 'Freight' },
  { text: 'ShipCountry', value: 'ShipCountry' },
];
const onExternalResize = function () {
  grid.value.getColumnByField(dropdown.value.$el.value).width = textbox.value.$el.value;
  grid.value.refreshColumns();
}
provide('grid', [Resize]);
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