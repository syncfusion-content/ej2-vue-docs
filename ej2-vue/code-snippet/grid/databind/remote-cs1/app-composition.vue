<template>
    <div id="app">
        <ejs-grid :dataSource="data" :query='query'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataAdaptor, Query } from "@syncfusion/ej2-data";
    let SERVICE_URI =
      "https://services.syncfusion.com/js/production/api/Orders";
    let data = new DataManager({
        url: SERVICE_URI,
        adaptor: new ODataAdaptor()
      });
      const pageSettings = {pageSize: 7};
      const query = new Query().addParams('ej2grid', 'true');
  provide('grid',  [Page]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>