<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"></ejs-pivotview>
  </div>
</template>
<script setup>
import { PivotViewComponent as EjsPivotview } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';

let remoteData = new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});
remoteData.defaultQuery = new Query().take(2);

const dataSourceSettings = {
  dataSource: remoteData,
  expandAll: true,
  filters: [],
  columns: [{ name: 'ProductName', caption: 'Product Name' }],
  rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
  formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
  values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
};
const height = 350;

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>