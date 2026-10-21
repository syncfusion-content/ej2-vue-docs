<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :actionFailureTemplate='actionFailureTemplate' :dataSource='customerData'
        :query='query' :fields='fields' placeholder="Select a customer"></ejs-multiselect>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let footerVue = createApp().component("footerTemplate", {
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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/multi-select/index.css";
</style>
