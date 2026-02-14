<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowPaging='true' :toolbar='toolbarOptions' :allowPdfExport='true' :pdfExportComplete='pdfExportComplete' :toolbarClick='toolbarClick' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ProductName' headerText='Product Name' width=110></e-column>
        <e-column field='Quantity' headerText='Quantity' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ['PdfExport'];
    const toolbarClick = (args) => {
        if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
          grid.value.showSpinner();
          grid.value.pdfExport();
        }
    }
    const pdfExportComplete = () => {
        grid.value.hideSpinner();
    }
  provide('grid',  [Toolbar, PdfExport, Page]);
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