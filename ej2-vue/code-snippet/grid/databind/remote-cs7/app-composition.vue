<template>
    <div id="app">
        <ejs-grid :dataSource="data" :allowSorting='true' :allowFiltering='true' :allowPaging="true" :pageSettings='pageSettings' :loadingIndicator='loadingIndicator'>
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

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";
      const data = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Orders/',
        adaptor: new ODataAdaptor()
      });
      const pageSettings = { pageCount: 3 };
      const loadingIndicator = { indicatorType: 'Shimmer' };
   provide('grid',  [Page, Sort, Filter]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>