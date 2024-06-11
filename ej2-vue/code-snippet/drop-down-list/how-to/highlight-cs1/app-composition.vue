<template>
  <div id="app">
    <div id='container' style="margin:20px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' placeholder='Select a customer' popupHeight='250px' sortOrder="Ascending"
        :query='query' :allowFiltering='allowFiltering' :filtering='filtering' :dataSource='dataSource'
        :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist, highlightSearch } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";

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
  let text = e.text;
  let query = new Query().select(['ContactName', 'CustomerID']);
  //frame the query based on search string with filter type.
  query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
  //pass the filter data source, filter query to updateData method.
  e.updateData(searchData, query);
  setTimeout(() => {
    let popupElement = document.getElementById('dropdownlist_popup');
    // get the list from popup element
    let lists = popupElement.querySelector('ul');
    // pass the element, text, ignore case and filter type as argument to highlightSearch method.
    highlightSearch(lists, text, true, 'StartsWith');
  }, 300);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
