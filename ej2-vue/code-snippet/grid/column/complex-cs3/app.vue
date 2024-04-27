

<template>
    <div id="app">
        <ejs-grid :dataSource="data" :query='query' allowPaging=true>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
          <e-column field='Employee.City' headerText='City' width=130  ></e-column>
        </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataV4Adaptor, Query } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

export default {
  data() {
    let query = new Query().expand('Employee');
    let SERVICE_URI =
      "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new ODataV4Adaptor(),
        crossDomain: true,
      }),
      query: query
    };
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


