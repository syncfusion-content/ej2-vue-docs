<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowExcelExport='true' :toolbarClick='toolbarClick'>
            <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
            </e-columns>
            <e-aggregates>
            <e-aggregate>
                <e-columns>
                <e-column columnName="ShipCountry" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemplate'></e-column>
                </e-columns>
            </e-aggregate>
            </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref, createApp } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Aggregate, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const toolbarOptions = ['ExcelExport'];
var app = createApp();
const footerTemp = function () {
  return {
    template: app.component('footerTemplate', {
      template: `<span>{{data.Custom}}</span>`,
      data() { return { data: {} }; }
    })
  }
}
const toolbarClick = function(args) {
  if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
    grid.value.excelExport();
  }
};
const customAggregateFn = function (data) {
  const brazilCount = data.result ? data.result.filter((item) => item['ShipCountry'] === 'Brazil').length
  : data.filter((item) => item['ShipCountry'] === 'Brazil').length;
  return `Brazil count: ${brazilCount}`;
}
  provide('grid',  [Toolbar, ExcelExport, Aggregate]);
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