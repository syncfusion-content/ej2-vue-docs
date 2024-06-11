<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="getTradeData" :query="query" :allowPaging='true' :allowFiltering='true'
      :allowSorting='true' :pageSettings='pageSettings' :filterSettings='filterSettings'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
        <e-column field='Employees' headerText='Employee Name' width='150'></e-column>
        <e-column field='Designation' headerText='Designation' width='130' textAlign='Right'></e-column>
        <e-column field='CurrentSalary' headerText='CurrentSalary' width='120' format='C2' textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Page, Sort } from "@syncfusion/ej2-vue-grids";
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";
const pageSettings = { pageCount: 5 };
const filterSettings = { type: "Excel", enableInfiniteScrolling: true };
const getTradeData = new DataManager({
  url: "https://services.syncfusion.com/vue/production/api/UrlDataSource",
  adaptor: new UrlAdaptor(),
});

const query = new Query().addParams('dataCount', '10000');
provide('grid', [Filter, Page, Sort])
</script>