<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' sortOrder='Ascending' popupHeight="250px" :allowFiltering='allowFiltering'
        :filtering='filtering' :dataSource='searchData' :query='query' :fields='fields'
        placeholder="Select a customer"></ejs-multiselect>
    </div>
  </div>
</template>
<script setup>
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager } from '@syncfusion/ej2-data';


const searchData = new DataManager({
  url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Suppliers',
  crossDomain: true
});
const fields = { text: "ContactName", key: "SupplierID" };
const query = new Query().select(["SupplierID", "ContactName"]).take(6);
const allowFiltering = true;

const filtering = function (e) {
  var searchData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Suppliers',
    crossDomain: true
  });
  if (e.text == '') e.updateData(searchData);
  else {
    var query = new Query().select(["SupplierID", "ContactName"]);
    query = (e.text !== '') ? query.where('ContactName', 'endswith', e.text, true) : query;
    e.updateData(searchData, query);
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
