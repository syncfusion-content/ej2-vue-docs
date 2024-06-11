<template>
  <div class="app">
    <table class="table-section">
      <tr>
        <td>Select customer name: </td>
        <td>
          <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" type="DropDownList" :model="dropdownModel"
            value="Maria Anders">
          </ejs-inplaceeditor>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>

import { InPlaceEditorComponent as EjsInplaceeditor, MultiSelect, ActionEventArgs } from "@syncfusion/ej2-vue-inplace-editor";

let dropdownData = [
  { Id: '1', Name: 'Maria Anders' },
  { Id: '2', Name: 'Ana Trujillo' },
  { Id: '3', Name: 'Antonio Moreno' },
  { Id: '4', Name: 'Thomas Hardy' },
  { Id: '5', Name: 'Chiristina Berglund' },
  { Id: '6', Name: 'Hanna Moos' }
];

const dropdownModel = {
  dataSource: dropdownData,
  placeholder: 'Select a customer',
  fields: { text: 'Name' },
}


</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inplace-editor/styles/material.css";

.table-section {
  margin: 0 auto;
  margin-top: 45px;
}

tr td:first-child {
  text-align: right;
  padding-right: 20px;
}
</style>
