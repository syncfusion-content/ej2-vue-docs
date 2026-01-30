<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :enablePaging="enablePaging"
      :pageSettings="pageSettings" :pagerSettings="pagerSettings" :gridSettings="gridSettings"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, Pager } from "@syncfusion/ej2-vue-pivotview";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

let remoteData = new DataManager({
  url: "https://bi.syncfusion.com/northwindservice/api/orders",
  adaptor: new WebApiAdaptor(),
  crossDomain: true
});

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent,
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: remoteData,
        expandAll: true,
        filters: [],
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }]
      },
      height: 350,
      enablePaging: true,
      pageSettings: {
        rowPageSize: 10,
        columnPageSize: 5,
        currentColumnPage: 1,
        currentRowPage: 1
      },
      pagerSettings: {
        showRowPager: false
      },
      gridSettings: { columnWidth: 120 },
    }
  },
  provide: {
    pivotview: [Pager]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>