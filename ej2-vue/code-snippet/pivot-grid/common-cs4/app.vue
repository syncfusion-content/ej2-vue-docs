


<template>
    <div id="app">
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, IDataSet, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, WebApiAdaptor, ODataV4Adaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

Vue.use(PivotViewPlugin);

let remoteData: DataManager = new DataManager({
  adaptor: new ODataV4Adaptor,
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
  crossDomain: true
});

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: remoteData as DataManager,
        expandAll: true,
        filters: [],
        columns: [{ name: 'OrderDate'}, { name: 'ShipCity' }],
        rows: [{ name: 'OrderID' }, { name: 'CustomerID' }],
        values: [{ name: 'Freight' }]
      },
      height: 350,
      showFieldList: true
    }
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



