<template>
    <div id="app">
      <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowPdfExport='true' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' height='258px'>
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
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import {PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ["PdfExport"];
      const groupOptions = { columns: ['ShipCity'] };
    const toolbarClick = (args) => {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        var pdfExportProperties = {
          theme: {
            header: {
              font: new PdfStandardFont(
                PdfFontFamily.TimesRoman,
                11,
                PdfFontStyle.Bold
              ),
              fontColor: '#000080',
              bold: true,
              border: { color: '#5A5A5A', dashStyle: 'Solid' },
            },
            caption: {
              font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9),
              fontColor: '#0B6623',
              bold: true,
            },
            record: {
              font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10),
              fontColor: '#B22222',
              bold: true,
            },
          }
        };
        grid.value.pdfExport(pdfExportProperties);
      }
    }
  provide('grid',  [Group, Toolbar, PdfExport]);
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