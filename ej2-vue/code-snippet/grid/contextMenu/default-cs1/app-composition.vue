<template>
  <div id="app">
    <ejs-grid :dataSource='data' id="gridcomp" :allowPaging='true' :allowExcelExport='true' :allowPdfExport='true'
      height='215px' :allowSorting='true' :contextMenuItems="contextMenuItems" :editSettings='editing'
      :allowGrouping='true'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='90' textAlign="Right" isPrimaryKey='true'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='100'></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit'
          width='80'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='100'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ContextMenu, Page, Resize, Sort, Group, Edit, PdfExport, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { provide } from 'vue';
const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
  'Group',
  'Ungroup'
];
const editing = { allowEditing: true, allowDeleting: true };
provide('grid', [ContextMenu, Page, Resize, Sort, Group, Edit, PdfExport, ExcelExport]);
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
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";</style>