<template>
  <div id="app">
    <table class="table-section">
      <tr>
        <td>Select customer name:</td>
        <td>
          <ejs-inplaceeditor ref="dropObj" id="dropdownEle" mode="Inline" type="DropDownList" value='Maria Anders'
            :model="dropdownModel">
          </ejs-inplaceeditor>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>

import { InPlaceEditorComponent as EjsInplaceeditor } from "@syncfusion/ej2-vue-inplace-editor";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";

const dropdownModel = {
  dataSource: new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  }),
  placeholder: "Select a customer",
  query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
  fields: { text: 'ContactName', value: 'CustomerID' }
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/inplace-editor/index.css";

.table-section {
  margin: 0 auto;
  margin-top: 45px;
}

tr td:first-child {
  text-align: right;
  padding-right: 20px;
}
</style>
