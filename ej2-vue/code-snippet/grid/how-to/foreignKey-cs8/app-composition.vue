<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowExcelExport='true'
      :excelExportComplete='excelExpComplete' :pdfExportComplete='pdfExportComplete' :allowPdfExport='true'
      :toolbarClick='toolbarClick'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const toolbarOptions = ['Add', 'PdfExport', 'ExcelExport'];
const toolbarClick = function (args) {
  if (args['item'].id.indexOf("pdfexport") != -1) {
    grid.value.pdfExport(null, null, null, true);
  }
  if (args['item'].id.indexOf("excelexport") != -1) {
    grid.value.excelExport(null, null, null, true);
  }
}
const excelExpComplete = function (args) {
  //This event will be triggered when excel exporting.
  args.promise.then((e) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
     exportBlob(e.blobData);
  });
}
const pdfExportComplete = function (args) {
  //This event will be triggered when pdf exporting.
  args.promise.then((e) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
     exportBlob(e.blobData);
  });
}
const exportBlob = function (blob) {
  let a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  let url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = 'Export';
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
provide('grid', [Toolbar, ExcelExport, PdfExport]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
</style>