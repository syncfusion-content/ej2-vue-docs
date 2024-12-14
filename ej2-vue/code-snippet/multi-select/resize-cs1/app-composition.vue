<template>
  <div id="app">
    <ejs-multiselect :dataSource='tagData' :allowResize='allowResize' :fields='fields' :placeholder="waterMark"></ejs-multiselect>
  </div>
</template>
<script setup>
import { MultiSelectComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';

const waterMark = 'Select Tags';
const tagData = [
    { "Text": "Add to KB", "State": false },
    { "Text": "Crisis", "State": false },
    { "Text": "Enhancement", "State": true },
    { "Text": "Presale", "State": false },
    { "Text": "Needs Approval", "State": false },
    { "Text": "Approved", "State": true },
    { "Text": "Internal Issue", "State": true },
    { "Text": "Breaking Issue", "State": false },
    { "Text": "New Feature", "State": true },
    { "Text": "New Component", "State": false },
    { "Text": "Mobile Issue", "State": false }
];
const fields = { value: 'Text' };
const allowResize = 'true' ;
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
