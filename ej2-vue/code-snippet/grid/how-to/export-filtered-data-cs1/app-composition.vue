<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbarOptions' :allowPaging='true' :allowFiltering='true'
      :allowPdfExport='true' :allowExcelExport='true' :pageSettings='pageSettings' :toolbarClick='toolbarClick'
      :selectionSettings='selectionOption'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport, Filter, Page, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DataManager } from "@syncfusion/ej2-data";
const grid = ref(null);
const toolbarOptions = ['PdfExport', 'ExcelExport'];
const pageSettings = { pageSize: 5, pageCount: 5 };
const selectionOption = { type: 'Multiple' };
const toolbarClick = (args) => {
  if (args['item'].id.indexOf("pdfexport") != -1) {
    let selectedRecords = grid.value.getSelectedRecords();
    let exportProperties = {
      dataSource: selectedRecords
    };
    grid.value.pdfExport(exportProperties);
  }
  else if (args['item'].id.indexOf("excelexport") != -1) {
    let selectedRecords = grid.value.getSelectedRecords();
    let exportProperties = {
      dataSource: selectedRecords
    };
    grid.value.excelExport(exportProperties);
  }
}
provide('grid', [Toolbar, PdfExport, Filter, Page, ExcelExport]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";</style>