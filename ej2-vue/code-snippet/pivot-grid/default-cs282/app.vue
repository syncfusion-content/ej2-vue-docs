<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">Excel Export</ejs-button>
    <label>Select a degree:</label>
    <ejs-dropdownlist ref='dropdown' id='dropdownlist' :dataSource='degree' placeholder='Select a degree' width="150"></ejs-dropdownlist>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowExcelExport="allowExcelExport" :gridSettings="gridSettings"> </ejs-pivotview>
  </div >
</template >
<script>
import { PivotViewComponent, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent,
    "ejs-dropdownlist": DropDownListComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }],
        values: [{ name: 'Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
      },
      height: 320,
      allowExcelExport: true,
      isPrimary: true,
      degree: [90, 135, 180, 270];
      gridSettings: {
        excelHeaderQueryCellInfo: function (args) {
          let dropDownListObject = document.getElementById('dropdownlist').ej2_instances[0];
          args.style = { rotation: dropDownListObject.value };
        },
        excelQueryCellInfo: function (args) {
          let dropDownListObject = document.getElementById('dropdownlist').ej2_instances[0];
          args.style = { rotation: dropDownListObject.value };
        }
      },
    }
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.excelExport();
    }
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