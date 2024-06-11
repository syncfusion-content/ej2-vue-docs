<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport"> </ejs-pivotview>
    <ejs-pivotview id="pivotview2" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";
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
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 320,
      allowExcelExport: true,
      isPrimary: true
    }
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      let pivotGridObj2 = document.getElementById('pivotview2').ej2_instances[0];
      let excelExportProperties = {
        multipleExport: { type: 'NewSheet' }
      };
      let firstGridExport = pivotGridObj.grid.excelExport(excelExportProperties, true);
      firstGridExport.then((fData) => {
        pivotGridObj2.excelExport(excelExportProperties, false, fData);
      });
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";

#pivotview2 {
  margin-top: 20px;
}</style>