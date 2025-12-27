<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport" :beforeExport="beforeExport"> </ejs-pivotview>
  </div >
</template >
<script>
import { PivotViewComponent, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
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
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
      },
      height: 320,
      allowExcelExport: true,
      isPrimary: true
    }
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.excelExport();
    },
    beforeExport: function (args) {
      for (var i = 0; i < args.dataCollections.length; i++) {
        var pivotValue = args.dataCollections[i];
        for (var j = 0; j < pivotValue.length; j++) {
          var row = pivotValue[j];
          if (row) {
            pivotValue[j] = row.filter(function (item) {
              return item !== null && (item.axis !== 'row');
            });
          }
        }
      }
    },
  },
  provide: {
    pivotview: [
      ExcelExport
    ]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>