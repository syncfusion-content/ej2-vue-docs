<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :allowExcelExport='true' :excelExportComplete='excelExportComplete' :pdfExportComplete='pdfExportComplete' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { Query } from "@syncfusion/ej2-data";
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ['PdfExport', 'ExcelExport'];
      const queryClone = "";
      const toolbarClick = (args) => {
        if (args.item.id === 'Grid_pdfexport') {
            queryClone = grid.value.query;
            grid.value.query = new Query().addParams("recordcount", "12")
            grid.value.pdfExport();
        }
        else if (args.item.id === 'Grid_excelexport') {
            queryClone = grid.value.query;
            grid.value.query = new Query().addParams("recordcount", "12")
            grid.value.excelExport();
        }
    }
    const pdfExportComplete = (args) => {
        grid.value.query = queryClone();
    }
    const excelExportComplete = (args) => {
        grid.value.query = queryClone();
    }
  provide('grid',  [Toolbar, PdfExport, ExcelExport]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>