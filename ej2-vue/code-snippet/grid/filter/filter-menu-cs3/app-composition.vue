<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' 
    allowPaging= 'true' :pageSettings="pageSettings" :actionComplete="actionComplete" height='273px'>
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field="OrderDate" headerText="Order Date" width="180" type="datetime" :format="formatoptions" textAlign="Right"></e-column>
          <e-column field="ShippedDate" headerText="Shipped Date" width="180" type="datetime" :format="formatoptions" textAlign="Right"></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
provide('grid',  [Filter, Page]);

const grid = ref(null);
const pageSettings = { pageCount: 5 };
const filterOptions = {
    type: 'Menu'
};
const formatoptions = { type: 'dateTime', format: 'M/d/y HH:mm' };

const actionComplete = (args) => {
    if (args.requestType === 'filterAfterOpen') {
      var columnObj = grid.value.getColumnByField(args.columnName);
      if (columnObj.type === 'datetime') {
        var dateObj = (document.getElementById('dateui-' + columnObj.uid))['ej2_instances'][0];
        dateObj.timeFormat = 'HH:mm';
      }
    }
  }
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