
import Vue from "vue";
import { PivotViewPlugin, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Excel Export</ejs-button>
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowExcelExport="allowExcelExport" :gridSettings="gridSettings"> </ejs-pivotview>
    </div>
`,

  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
      },
      height: 320,
      allowExcelExport: true,
      isPrimary: true,
      gridSettings: {
        columnRender: function (args) {
          for (var i = 1; i < args.columns.length; i++) {
            if (args.stackedColumns[i].customAttributes &&
              args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
              args.stackedColumns[i].visible = false;
            }
          }
        }
      }
    }
  },
  methods: {
    btnClick: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      let excelExportProperties = {
        includeHiddenColumn: false
      };
      pivotGridObj.excelExport(excelExportProperties);
    }
  },
  provide: {
    pivotview: [
      ExcelExport
    ]
  }
});