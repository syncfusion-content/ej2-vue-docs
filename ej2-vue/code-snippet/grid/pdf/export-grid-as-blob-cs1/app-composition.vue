<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='220px' :allowPdfExport='true' :toolbarClick='toolbarClick' :pdfExportComplete="pdfExportComplete">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ['PdfExport'];
    const toolbarClick = (args) => {
      if (args.item.id === 'Grid_pdfexport') {
        // pass fourth parameter as true to get the blob data of exported grid
        grid.value.pdfExport(null, null, null, true);
      }
    }
    const pdfExportComplete = (args) => {
      // execute the promise to get the blob data
      args.promise.then((e) => {
        exportBlob(e.blobData);
      });
    }
    const exportBlob = (blob) => {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      const url = window.URL.createObjectURL(blob); // Fix typo here
      a.href = url;
      a.download = 'Export';
      a.click();
      window.URL.revokeObjectURL(url); // Fix typo here
      document.body.removeChild(a);
    }
  provide('grid',  [Toolbar, PdfExport]);
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