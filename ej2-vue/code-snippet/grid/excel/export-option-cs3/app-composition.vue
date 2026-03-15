<template>
  <div id="app">
    <ejs-grid ref='grid' id="Grid" height='220px' :dataSource='data' :toolbar='toolbarOptions' :allowExcelExport='true'
    :toolbarClick='toolbarClick' :allowPaging='true' :allowGrouping='true' :groupSettings='groupOptions'>
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport, Group, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const grid = ref(null);
const toolbarOptions = [ 'ExcelExport'];
const groupOptions = { columns: ['CustomerID', 'ShipCity'] };
const toolbarClick = function(args) {
  if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
    grid.value.excelExport();
  }
}
provide('grid', [Toolbar, ExcelExport, Group, Page]);
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>