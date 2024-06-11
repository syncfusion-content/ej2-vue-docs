<template>
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{message}}</p></div>
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :pdfExportComplete='pdfExportComplete' :toolbarClick='toolbarClick'>
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
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ['PdfExport'];
      const queryClone = '';
      const message = '';
      const toolbarClick = (args) => {
      if (args.item.id === 'Grid_pdfexport') {
        queryClone = grid.value.query;
        grid.value.query = new Query().addParams('recordcount', '15');
        message =
            'Key: ' +
            grid.value.query.params[0].key +
            ' and Value: ' +
            grid.value.query.params[0].value + ' on ' + args.item.text;
        grid.value.pdfExport();
      }  
    }
    const pdfExportComplete = (args) => {
      grid.value.query = queryClone;
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