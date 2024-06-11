<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' sortOrder='Ascending' :groupTemplate='groupTemplate' :dataSource='employeeData'
        :query='query' :fields='fields' placeholder="Select an employee"></ejs-multiselect>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor, Predicate } from '@syncfusion/ej2-data';

let itemVue = createApp().component("groupTemplate", {
  template: `<strong>{{data.City}}</strong>`,
  data() {
    return {
      data: {}
    };
  }
});

const employeeData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});
const query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6).where(new Predicate('City', 'equal', 'london').or('City', 'equal', 'seattle'));
const fields = { text: 'FirstName', value: 'EmployeeID', groupBy: 'City' };
const groupTemplate = function (e) {
  return {
    template: itemVue
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>