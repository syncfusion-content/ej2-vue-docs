<template>
  <div id="app">
    <div style="display: inline-block;">
      <label style="padding:  10px 10px 12px 0"> Auto wrap mode: </label>
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0" width="150" :dataSource="ddlData" :fields='fields'
        :change="change"></ejs-dropdownlist>
    </div>
    <ejs-grid ref='grid' id="grid" style="padding: 5px 5px" :dataSource='data' :allowPaging='true' :allowTextWrap='true'
      :textWrapSettings='wrapSettings' height='310' width='800'>
      <e-columns>
        <e-column field='Inventor' headerText='Inventor Name' width='150' textAlign="Right"></e-column>
        <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='180'
          textAlign="Right"></e-column>
        <e-column field='Country' headerText='Country' width='140'></e-column>
        <e-column field='Active' width='120'></e-column>
        <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const wrapSettings = { wrapMode: 'Content' };
const fields = { text: 'text', value: 'value' };
const ddlData = [
  { text: 'Content', value: 'Content' },
  { text: 'Both', value: 'Both' },
];
const change = function (args) {
  grid.value.textWrapSettings.wrapMode = args.value;
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
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";</style>