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
        enableSorting: true,
        columns: [{ name: 'Year' }],
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        expandAll: false,
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
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      let drilledMembers = pivotGridObj.dataSourceSettings.drilledMembers;
      pivotGridObj.setProperties({ dataSourceSettings: { expandAll: true, drilledMembers: [] } }, true);
      pivotGridObj.engineModule.generateGridData(pivotGridObj.dataSourceSettings, true);
      args.dataCollections = [pivotGridObj.engineModule.pivotValues];
      pivotGridObj.setProperties({ dataSourceSettings: { expandAll: false, drilledMembers: drilledMembers } }, true);
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
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>