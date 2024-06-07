<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let remoteData = new DataManager({
  adaptor: new ODataV4Adaptor,
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
  crossDomain: true
});

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: remoteData,
        expandAll: true,
        filters: [],
        columns: [{ name: 'OrderDate' }, { name: 'ShipCity' }],
        rows: [{ name: 'OrderID' }, { name: 'CustomerID' }],
        values: [{ name: 'Freight' }]
      },
      height: 350,
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>