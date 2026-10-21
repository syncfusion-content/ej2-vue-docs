<template>
  <div id="app">
    <div class="container">
      <div class="control-group" style="text-align:center;margin: 100px auto">
        Best Employee of the year: <ejs-inplaceeditor id="element" type="DropDownList" mode="Inline"
          value="Andrew Fuller" name="Employee" :url="serviceUrl" primaryKey="Employee" adaptor="UrlAdaptor"
          :model="dropdownModel" :actionSuccess="actionSuccess" :created='created'></ejs-inplaceeditor>
      </div>
      <table style="margin:auto;width:50%">
        <tr>
          <td style="text-align: left">
            Old Value :
          </td>
          <td id="oldValue" ref="oldValue" style="text-align: left">

          </td>
        </tr>
        <tr>
          <td style="text-align: left">
            New Value :
          </td>
          <td id="newValue" ref="newValue" style="text-align: left">
            Andrew Fuller
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from 'vue';
import { InPlaceEditorComponent as EjsInplaceeditor, MultiSelect } from '@syncfusion/ej2-vue-inplace-editor';

const oldValue = ref(null);
const newValue = ref(null);
const serviceUrl = "https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData";
const dropdownModel = {
  dataSource: ['Andrew Fuller', 'Janet Leverling', 'Laura Callahan', 'Margaret Hamilt', 'Michael Suyama', 'Nancy Davloio', 'Robert King'],
  popupHeight: '200px',
  placeholder: 'Select employee'
};
const actionSuccess = function (e) {
  oldValue.value.textContent = newValue.value.textContent;
  newValue.value.textContent = e.value;
}

provide("inplaceeditor", [MultiSelect])

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";

<style>
.e-inplaceeditor {
  min-width: 200px;
  text-align: left
}
</style>
