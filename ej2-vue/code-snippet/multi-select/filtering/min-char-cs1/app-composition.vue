<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' sortOrder='Ascending' popupHeight="250px" :allowFiltering='allowFiltering'
        :filtering='filtering' :dataSource='searchData' :fields='fields'
        placeholder="Select a customer"></ejs-multiselect>
    </div>
  </div>
</template>
<script setup>
import { MultiSelectComponent as EjsMultiselect } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const searchData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});
const fields = { text: 'ContactName', value: 'CustomerID' };
const query = new Query().select(['ContactName', 'CustomerID']).take(6);
const allowFiltering = true

const filtering = function (e) {
  var searchData = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  // load overall data when search key empty.
  if (e.text == '') e.updateData(searchData);
  else {
    // restrict the remote request until search key contains 3 characters.
    if (e.text.length < 3) { return; }
    let query = new Query().select(['ContactName', 'CustomerID']);
    query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
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
