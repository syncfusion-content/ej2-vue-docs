<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :pdfHeaderQueryCellInfo='pdfHeaderQueryCellInfo' :toolbarClick='toolbarClick'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, PdfExport } from "@syncfusion/ej2-vue-grids";
import { purchaseData } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: purchaseData,
      toolbarOptions: ['PdfExport']
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') {
        this.$refs.grid.pdfExport();
      }
    },
    pdfHeaderQueryCellInfo(args) {
      args.cell.row.pdfGrid.repeatHeader = true;
    }
  },
  provide: {
    grid: [Toolbar, PdfExport]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>