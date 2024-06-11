<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-combobox id='combobox' :dataSource='customerData' :actionFailureTemplate='actionFailureTemplate'
        :fields='fields' :query='query' placeholder="Select a customer"></ejs-combobox>
    </div>
  </div>
</template>

<script setup>
import { createApp } from "vue";
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const footerVue = createApp().component("actionFailureTemplate", {
  template: `<span class='action-failure'> Data fetch get fails</span>`,
  data() {
    return {
      data: {}
    };
  }
});

const customerData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});
const query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
const fields = { text: 'ContactName', value: 'CustomerID' };
const actionFailureTemplate = function (e) {
  return {
    template: footerVue
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
