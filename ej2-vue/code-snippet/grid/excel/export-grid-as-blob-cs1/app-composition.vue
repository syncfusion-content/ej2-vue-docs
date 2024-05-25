<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='220px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick' :excelExportComplete="excelExportComplete">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ['ExcelExport', 'CsvExport'];
      const toolbarClick = (args) => {
      if (args.item.id === 'Grid_excelexport') {
        // pass fourth parameter as true to get the blob data of exported grid
        grid.value.excelExport(null, null, null, true);
      }
      if (args.item.id === 'Grid_csvexport') {
        // pass fourth parameter as true to get the blob data of exported grid
        grid.value.csvExport(null, null, null, true);
      }
    }
    const excelExportComplete = (args) => {
      // execute the promise to get the blob data
      args.promise.then((e) => {
        console.log(e.blobData);
      });
    }
  provide('grid',  [Toolbar, ExcelExport, Page]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>