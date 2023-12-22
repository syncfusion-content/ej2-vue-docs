

<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='220px' :allowPaging='true' :allowPdfExport='true' :toolbarClick='toolbarClick' :pdfExportComplete="pdfExportComplete">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, PdfExport, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      toolbarOptions: ['PdfExport']
    };
  },
  methods: {
    toolbarClick(args) {
      if (args.item.id === 'Grid_pdfexport') {
        // pass fourth parameter as true to get the blob data of exported grid
        this.$refs.grid.pdfExport(null, null, null, true);
      }
    },
    pdfExportComplete(args) {
      // execute the promise to get the blob data
      args.promise.then((e) => {
        console.log(e.blobData);
      });
    },
  },
  provide: {
    grid: [Toolbar, PdfExport, Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>



