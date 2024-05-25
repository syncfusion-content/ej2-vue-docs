<template>
  <div id="app">
    <ejs-autocomplete :dataSource='sortFormatData' :fields='fields' :placeholder="waterMark"></ejs-autocomplete>
  </div>
</template>
<script setup>
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';

const waterMark = 'Find a format';
const sortFormatData = [
  { Class: 'sort', Type: 'Sort A to Z', Id: '1' },
  { Class: 'filter', Type: 'Filter', Id: '2' },
  { Class: 'clear', Type: 'Clear', Id: '3' }
];
const fields = { value: 'Type', iconCss: 'Class' };

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
  top: 35%;
  width: 30%;
}

#container {
  visibility: hidden;
}

#loader {
  color: #008cff;
  height: 40px;
  width: 30%;
  position: absolute;
  top: 45%;
  left: 45%;
}

.e-list-icon {
  line-height: 1.3;
  padding-right: 10px;
  text-indent: 5px;
}

.sort:before {
  content: '\e890';
  font-family: 'e-icons';
  font-size: 15px;

}

.filter:before {
  content: '\e7ee';
  font-family: 'e-icons';
  font-size: 15px;
  opacity: 0.78;
}

.clear:before {
  content: '\e7fc';
  font-family: 'e-icons';
  font-size: 15px;
}
</style>
