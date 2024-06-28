<template>
    <div id="app">
      <div>
        <label style="padding: 30px 17px 0 0">Enter file name: </label>
        <ejs-textbox ref='textbox' type="textbox" placeholder="Enter file name" width="120"></ejs-textbox>
      </div> 
      <ejs-grid ref='grid' id='Grid' style="margin-top: 5px" :dataSource='data' :allowPdfExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' height='258px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>  
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>            
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
const grid = ref(null);
const textbox = ref(null);
      const toolbarOptions = ["PdfExport"];
    const toolbarClick = (args) => {
      if (args.item.id === "Grid_pdfexport") {
        if (textbox.value.$el.value) {
          const pdfExportProperties = {
            fileName: textbox.value.$el.value + '.pdf',
          };
          grid.value.pdfExport(pdfExportProperties);
        } else {
          const pdfExportProperties = {
            fileName: 'new.pdf',
          };
          grid.value.pdfExport(pdfExportProperties);
        }
      }
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