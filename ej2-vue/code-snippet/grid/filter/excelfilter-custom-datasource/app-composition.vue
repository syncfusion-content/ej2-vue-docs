<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowFiltering='true' :pageSettings='pageSettings' :allowSorting="true" :filterSettings="filterOptions" height="200px" :actionBegin="actionBegin">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="80" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="CustomerID" width="90"></e-column>
        <e-column field="Freight" headerText="Freight" width="80"></e-column>
        <e-column field="OrderDate" headerText="OrderDate" width="120" format="yMd"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { data } from './datasource.js';
provide('grid', [Filter, Page]);

const filterOptions = { type: "Excel" };
const pageSettings = { pageSize: 12 };
const hostUrl= "https://services.syncfusion.com/vue/production";
const actionBegin= function(args) {
      if (args.requestType === "filterBeforeOpen") {
        args.filterModel.options.dataSource = new DataManager({
          url: this.hostUrl + 'api/Orders',
          adaptor: new WebApiAdaptor(),
        });
      }
    };

</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>