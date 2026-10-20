<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
      <ejs-listbox :dataSource='data' :query="query" :fields="fields"></ejs-listbox>
    </div>
  </div>
</template>
<script setup>
import { ListBoxComponent as EjsListbox } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const data = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  adaptor: new ODataV4Adaptor
});
const query = new Query().from('Products').select('ProductID,ProductName').take(10);
const fields = { text: 'ProductName', value: 'ProductID' };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/list-box/index.css";
</style>
