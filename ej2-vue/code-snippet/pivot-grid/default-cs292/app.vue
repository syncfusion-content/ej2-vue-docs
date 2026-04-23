<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
    <ejs-pivotview id="PivotTable1" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowPdfExport="allowPdfExport"> </ejs-pivotview>
    <ejs-pivotview id="PivotTable2" :height="height" :dataSourceSettings="dataSourceSettings1"
      :allowPdfExport="allowPdfExport"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { salesData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: salesData,
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Sales', caption: 'Q4 Sales' },
            { name: 'ProfitMargin', caption: 'Profit Margin' }
        ],
        formatSettings: [
            { name: 'Sales', format: 'C0' },
            { name: 'ProfitMargin', format: '0\'%\'' }
        ],
        filterSettings: [{ name: 'Product', items: ['Laptop'], type: 'Include' }]
      },
      dataSourceSettings1: {
        dataSource: salesData,
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Units', caption: 'Units Sold' },
            { name: 'Sales', caption: 'Q4 Sales' }
        ],
        formatSettings: [
            { name: 'Sales', format: 'C0' },
        ],
        filterSettings: [{ name: 'Product', items: ['Smartphone'], type: 'Include' }]
      },
      height: 320,
      allowPdfExport: true,
      isPrimary: true
    }
  },
  provide: {
    pivotview: [PDFExport]
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('PivotTable1').ej2_instances[0];
      const pdfExportProperties = {
          multipleExport: { type: 'NewPage' },
          pivotTableIds: ['PivotTable1', 'PivotTable2']
      };
      pivotGridObj.pdfExport(pdfExportProperties, true);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";

#pivotview2 {
  margin-top: 20px;
}
</style>