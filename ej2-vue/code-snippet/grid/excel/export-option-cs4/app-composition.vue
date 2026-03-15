<template>
    <div id="app">
        <div style="display: flex;">
            <label style="margin-right:5px">
            Include or exclude hidden columns
            </label>
            <ejs-switch id='switch' ref='switchRef'></ejs-switch>
        </div>
        <ejs-grid style='margin-top:10px' ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' 
        height='270px' :allowExcelExport='true' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=120 :visible='false'></e-column>
                <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const grid = ref(null);
const switchRef = ref(null)
const toolbarOptions = ['ExcelExport'];
const toolbarClick = function(args) {
    if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        let excelExportProperties = {
          includeHiddenColumn: switchRef.value.$el.checked
        };
    grid.value.excelExport(excelExportProperties);
    }
}
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