<template>
  <div id="app">
    <div style="display: flex;">
      <label style="margin-right:5px">
        Enable or disable Horizontal Overflow property
      </label>
      <ejs-switch ref='switch1' id="switch"></ejs-switch>
    </div>
    <ejs-grid ref='grid' id='Grid' style="margin-top: 5px" :dataSource='data' :allowPdfExport='true'
      :toolbar='toolbarOptions' :toolbarClick='toolbarClick' height='258px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width=130></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' width=90></e-column>
        <e-column field='ShipPostalCode' headerText='Ship PostalCode' width=90></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const grid = ref(null);
const switch1 = ref(null);
const toolbarOptions = ["PdfExport"];
const toolbarClick = (args) => {
  if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
    let pdfExportProperties = {
      allowHorizontalOverflow: !switch1.$el.checked
    };
    grid.value.pdfExport(pdfExportProperties);
  }
}
provide('grid', [Toolbar, PdfExport]);
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