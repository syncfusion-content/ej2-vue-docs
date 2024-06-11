<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' :dataSource='sortFormatData' :fields='fields'
        placeholder='Select a format'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";

const sortFormatData = [
        { Class: 'sort', Type: 'Sort A to Z', Id: '1' },
        { Class: 'filter', Type: 'Filter', Id: '2' },
        { Class: 'clear', Type: 'Clear', Id: '3' }
      ];
const fields = { text: 'Type', iconCss: 'Class', value: 'Id' };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

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
