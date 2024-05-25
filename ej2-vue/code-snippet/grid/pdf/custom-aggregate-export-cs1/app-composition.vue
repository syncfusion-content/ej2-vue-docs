<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true'
      :toolbarClick='toolbarClick'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
      </e-columns>
      <e-aggregates>
        <e-aggregate>
          <e-columns>
            <e-column columnName="ShipCountry" type="Custom" :customAggregate="customAggregateFn"
              :footerTemplate='footerTemp'></e-column>
          </e-columns>
        </e-aggregate>
      </e-aggregates>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref, createApp } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const app = createApp();
const toolbarOptions = ['PdfExport'];
const footerTemp = function () {
  return {
    template: app.component('footerTemplate', {
      template: `<span> {{data.Custom}} </span>`,
      data() { return { data: {} }; }
    })
  }
}
const toolbarClick = (args) => {
  if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
    grid.value.pdfExport();
  }
}
const customAggregateFn = function (data) {
  const brazilCount = data.result ? data.result.filter((item) => item['ShipCountry'] === 'Brazil').length
    : data.filter((item) => item['ShipCountry'] === 'Brazil').length;
  return `Brazil count: ${brazilCount}`;
}
provide('grid', [Toolbar, PdfExport, Aggregate]);
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