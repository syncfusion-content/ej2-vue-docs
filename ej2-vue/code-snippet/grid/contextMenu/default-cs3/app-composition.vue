<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :allowSorting='true' height='265px' :contextMenuItems='contextMenuItems' 
    :pageSettings='pageSettings' :allowExcelExport='true' :allowPdfExport='true' :created = 'created' v-on:click="clicked">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='90' textAlign="Right" isPrimaryKey='true'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='100'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='100'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='100'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ContextMenu, Page, ExcelExport, PdfExport, Sort, } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const values = "";
      const pageSettings = { pageSize: 8 };
      const contextMenuItems = [
        'SortAscending',
        'SortDescending',
        'FirstPage',
        'PrevPage',
        'LastPage',
        'NextPage',
        'PdfExport',
        'ExcelExport',
      ];
    const created = function() {
      grid.value.ej2Instances.contextMenuModule.contextMenu.beforeOpen = (
        args
      ) => {
        if (args.event && args.event.which === 3) args.cancel = true;
        args.event = values;
        grid.value.ej2Instances.contextMenuModule.contextMenuBeforeOpen(
          args
        );
      };
    }
    const clicked = function(event) {
      values = event;
      grid.value.ej2Instances.contextMenuModule.contextMenu.open(
        values.pageY + pageYOffset,
        values.pageX + pageXOffset
      );
    }
  provide('grid',  [ContextMenu, Page, ExcelExport, PdfExport, Sort]);
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