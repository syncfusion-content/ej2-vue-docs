<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :toolbarClick='toolbarClick'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { image } from './image.js';
const grid = ref(null);
      const toolbarOptions = ['PdfExport'];
    const toolbarClick = (args) => {
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
        let pdfExportProperties = {
          header: {
            fromTop: 0,
            height: 130,
            contents: [
              {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
              },
              {
                type: 'Text',
                value: 'Exported Document Of Customers',
                position: { x: 200, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 20 },
              },
              {
                type: 'Image',
                src: image,
                position: { x: 40, y: 10 },
                size: { height: 100, width: 150 },
              },
            ],
          },
          footer: {
            fromBottom: 10,
            height: 60,
            contents: [
              {
                type: 'PageNumber',
                pageNumberType: 'Arabic',
                format: 'Page {$current} of {$total}', //optional
                position: { x: 0, y: 25 },
                style: {
                  textBrushColor: '#4169e1',
                  fontSize: 15,
                  hAlign: 'Center',
                },
              },
              {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
              },
            ],
          },
        };
        grid.value.pdfExport(pdfExportProperties);
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