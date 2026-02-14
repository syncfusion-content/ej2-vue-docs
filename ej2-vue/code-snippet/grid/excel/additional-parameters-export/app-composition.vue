<template>
    <div id="app">
        <div style="margin-left:180px"><p style="color:red;" id="message">{{message}}</p></div>
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px'
        :allowExcelExport='true' :excelExportComplete='excelExportComplete' :toolbarClick='toolbarClick'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { Query } from "@syncfusion/ej2-data";
import { data } from './datasource.js';
const grid = ref(null);
const toolbarOptions = ['ExcelExport'];
const queryClone = ref(null);
const message = ref(null);
const toolbarClick = (args) => {
    if (args.item.id === 'Grid_excelexport') {
        queryClone.value = grid.value.ej2Instances.query;
        grid.value.ej2Instances.query = new Query().addParams('recordcount', '15');
        message.value =
            'Key: ' +
            grid.value.ej2Instances.query.params[0].key +
            ' and Value: ' +
            grid.value.ej2Instances.query.params[0].value + ' on ' + args.item.text;
        grid.value.excelExport();
    }
}
const excelExportComplete = () => {
    grid.value.ej2Instances.query = queryClone.value;
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