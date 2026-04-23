<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :gridSettings="gridSettings"
      :allowPdfExport="allowPdfExport"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, PDFExport } from "@syncfusion/ej2-vue-pivotview";
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
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      allowPdfExport: true,
      gridSettings: {
        columnWidth: 140,
        pdfQueryCellInfo: function () {
          //triggers for every value cell while pdf export
        }
      },
      isPrimary: true
    }
  },
  provide: {
    pivotview: [
      PDFExport
    ]
  },
  methods: {
    btnClick: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.pdfExport();
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>