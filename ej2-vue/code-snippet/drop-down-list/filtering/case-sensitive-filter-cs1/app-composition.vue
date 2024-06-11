<template>
  <div id="app">
    <div id='container' style="margin:20px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' placeholder='Select a name' popupHeight='250px' sortOrder="Ascending"
        :query='query' :allowFiltering='allowFiltering' :filtering='filtering' :dataSource='dataSource'
        :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, Query, ODataV4Adaptor, Predicate } from "@syncfusion/ej2-data";

const dataSource = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});
const query = new Query().select(['ContactName', 'CustomerID']).take(7);
const fields = { text: 'ContactName', value: 'CustomerID' };
const allowFiltering = true;

const filtering = function (e) {
  let searchData = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  // load overall data when search key empty.
  if (e.text == '') e.updateData(searchData);
  else {
    let query: Query = new Query().select(['ContactName', 'CustomerID']);
    //enable the case sensitive filtering by passing false to 4th parameter.
    query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, false) : query;
    e.updateData(searchData, query);
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
