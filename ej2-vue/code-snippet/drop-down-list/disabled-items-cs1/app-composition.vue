<template>
  <div id="app">
    <ejs-dropdownlist :dataSource='statusData' :fields='fields' :placeholder="waterMark"></ejs-dropdownlist>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns';

const waterMark = 'Select Status';
const statusData = [
    { "Status": "Open", "State": false },
    { "Status": "Waiting for Customer", "State": false },
    { "Status": "On Hold", "State": true },
    { "Status": "Follow-up", "State": false },
    { "Status": "Closed", "State": true },
    { "Status": "Solved", "State": false },
    { "Status": "Feature Request", "State": false }
];
const fields = { value: 'Status', disabled: 'State' };
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  left: 35%;
  position: absolute;
  top: 10%;
  width: 30%;
}
</style>
