<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :allowPdfExport='true' :allowExcelExport='true' :excelExportComplete='excelExportComplete' :pdfExportComplete='pdfExportComplete' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, PdfExport, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      toolbarOptions: ['PdfExport', 'ExcelExport']
    };
  },
  methods: {
    toolbarClick(args) {
        if (args.item.id === 'Grid_pdfexport') {
            this.$refs.grid.showSpinner();
            this.$refs.grid.pdfExport();
        }
        else if (args.item.id === 'Grid_excelexport') {
            this.$refs.grid.showSpinner();
            this.$refs.grid.excelExport();
        }
    },
    pdfExportComplete(args) {
        this.$refs.grid.hideSpinner();
    },
    excelExportComplete(args) {
        this.$refs.grid.hideSpinner();
    }
  },
  provide: {
    grid: [Toolbar, PdfExport, ExcelExport]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>