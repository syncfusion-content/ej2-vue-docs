<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :spinnerTemplate="spinnerTemplate" :height="height"> </ejs-pivotview>
  </div>
</template> 

<script>
  import Vue from "vue";
  import { PivotViewPlugin, IDataSet } from "@syncfusion/ej2-vue-pivotview";
  import { DataManager, WebApiAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';

  Vue.use(PivotViewPlugin);

  let remoteData: DataManager = new DataManager({
    url: "https://bi.syncfusion.com/northwindservice/api/orders",
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  });

  export default {
    data () {
      return {
        dataSourceSettings: {
          dataSource: remoteData as DataManager,
          expandAll: true,
          filters: [],
          columns: [{ name: 'ProductName', caption: 'Product Name' }],
          rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
          formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
          values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
        },
        spinnerTemplate: '<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>',
        height: 350
      }
    }
  }
</script>
<style>
  @import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



