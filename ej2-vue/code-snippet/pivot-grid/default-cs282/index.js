
import Vue from "vue";
import { PivotViewPlugin, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Excel Export</ejs-button>
        <label>Select a degree:</label>
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' :dataSource='degree' placeholder='Select a degree' width="150"></ejs-dropdownlist>
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowExcelExport="allowExcelExport" :gridSettings="gridSettings"> </ejs-pivotview>
    </div>
`,

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
      degree: [90, 135, 180, 270],
      gridSettings: {
        excelHeaderQueryCellInfo: function (args) {
          let dropDownListObject = document.getElementById('dropdownlist').ej2_instances[0];
          args.style = { rotation: dropDownListObject.value };
        },
        excelQueryCellInfo: function (args) {
          let dropDownListObject = document.getElementById('dropdownlist').ej2_instances[0];
          args.style = { rotation: dropDownListObject.value };
        }
      }
    }
  },
  methods: {
    btnClick: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.excelExport();
    }
  },
  provide: {
    pivotview: [
      ExcelExport
    ]
  }
});