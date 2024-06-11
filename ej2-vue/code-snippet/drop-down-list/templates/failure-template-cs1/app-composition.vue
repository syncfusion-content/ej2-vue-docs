<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' placeholder='Select an customer' sortOrder='Ascending'
        :actionFailureTemplate='failureTemplate' :dataSource='dataSource' :query='query'
        :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";

let itemVue = createApp().component("failureTemplate", {
  template: `<span class='action-failure'> Data fetch get fails</span>`,
  data() {
    return {
      data: {}
    };
  }
});

const failureTemplate = function (e) {
  return {
    template: itemVue
  }
};
const query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
const dataSource = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});
const fields = { text: 'ContactName', value: 'CustomerID' };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
