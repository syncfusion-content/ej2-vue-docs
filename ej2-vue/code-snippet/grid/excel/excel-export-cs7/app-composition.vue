<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' 
        :allowExcelExport='true' :toolbarClick='toolbarClick' :excelHeaderQueryCellInfo='excelHeaderQueryCellInfo' :created='created'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>                
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='Freight' headerText='Freight' width=80></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const toolbarOptions = ['ExcelExport'];
const toolbarClick = function(args) {
    if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        grid.value.excelExport();
    }
};
const excelHeaderQueryCellInfo= function(args) {
    args.cell.value = '';
};
const created = function() {
    var processGridExportObject =
      grid.value.ej2Instances.excelExportModule.__proto__.processGridExport;
      grid.value.ej2Instances.excelExportModule.__proto__.processGridExport = function (
        gobj,
        props,
        r
      ) {
        var rows = processGridExportObject.call(this, gobj, props, r);
        rows.shift();
        rows.forEach((item, index) => {
          item.index = index + 1;
        });
        return rows;
    };
};
  provide('grid',  [Toolbar, ExcelExport]);
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