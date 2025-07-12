<template>
    <div id="app">
        <ejs-grid :dataSource="data" :allowPaging="true">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='EmployeeID' headerText='EmployeeID' width=120 textAlign='Right'> </e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCountry' headerText='ShipCountry' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
class CustomAdaptor extends WebApiAdaptor {
  beforeSend(dm, request, settings) {
    request.headers.set('Syncfusion', true);
    super.beforeSend(dm, request, settings);
  }
}
let SERVICE_URI = "https://services.syncfusion.com/vue/production/api/Orders";
const data = new DataManager({
  url: SERVICE_URI,
  adaptor: new CustomAdaptor(),
});
provide('grid',  [Page]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>