<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowPdfExport="allowPdfExport" :enableVirtualization="enableVirtualization" :exportComplete="exportComplete">
    </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, VirtualScroll, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        values: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 320,
      allowPdfExport: true,
      enableVirtualization: true,
      isPrimary: true
    }
  },
  provide: {
    pivotview: [
      VirtualScroll,
      PDFExport
    ]
  },
  methods: {
    exportComplete: function (args) {
      args.promise.then(function (e) {
        console.log(e.blobData);
      });
    },
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      let pdfExportProperties = {
        fileName: 'pdfexport.csv'
      };
      pivotGridObj.pdfExport(pdfExportProperties, false, null, true);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>