<template>
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' 
        :allowPdfExport='true' :pdfExportComplete='pdfExportComplete' :toolbarClick='toolbarClick'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column headerText='Order Details' :columns='orderColumns' textAlign="Center" width=150></e-column>
          <e-column headerText='Ship Details' :columns='shipColumns' textAlign="Center" width=150></e-column>
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
const orderColumns= [
    {
        field: 'OrderDate',
        headerText: 'Order Date',
        format: 'yMd',
        width: 130,
        textAlign: 'Right',
        minWidth: 10,
    },
    {
        field: 'Freight',
        headerText: 'Freight ($)',
        width: 120,
        format: 'C1',
        textAlign: 'Right',
        minWidth: 10,
    }];      
const shipColumns= [
    {
        field: 'ShippedDate',
        headerText: 'Shipped Date',
        format: 'yMd',
        textAlign: 'Right',
        width: 150,
        minWidth: 10,
    },
    {
        field: 'ShipCountry',
        headerText: 'Ship Country',
        width: 150,
        minWidth: 10,
    },
    {
        field: 'ShipName',
        headerText: 'Ship Name',
        width: 150,
        minWidth: 10,
        visible:false
    },
];
const toolbarClick = function(args) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.value.ej2Instances.columns[1].columns[0].visible = false;
        grid.value.ej2Instances.columns[2].columns[2].visible = true;
        grid.value.pdfExport();
    }
}
const pdfExportComplete = function(args) {
    grid.value.ej2Instances.columns[1].columns[0].visible = true;
    grid.value.ej2Instances.columns[2].columns[2].visible = false;
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