<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbarOptions' height='220px' :allowPaging='true' :allowExcelExport='true' :toolbarClick='toolbarClick'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport, Page, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ['ExcelExport'];
      const groupOptions = { columns: ['CustomerID', 'ShipCity'] };
      const toolbarClick = function(args) {
         if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            grid.value.excelExport();
        }
    }
  provide('grid',  [Toolbar, ExcelExport, Page, Group]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>