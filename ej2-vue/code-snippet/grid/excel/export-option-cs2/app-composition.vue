<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' height='220px' :dataSource='data' :toolbar='toolbarOptions'
     :allowExcelExport='true' :toolbarClick='toolbarClick' :selectionSettings='selectionOption'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const grid = ref(null);
const toolbarOptions = [ 'ExcelExport'];
const selectionOption = { type: 'Multiple', enableSimpleMultiRowSelection: true };
const toolbarClick = function(args) {

  if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
      let selectedRecords = grid.value.getSelectedRecords();
    let excelExportProperties = {
      dataSource: selectedRecords
    };
    grid.value.excelExport(excelExportProperties);
  }
}
provide('grid', [Toolbar, ExcelExport]);
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