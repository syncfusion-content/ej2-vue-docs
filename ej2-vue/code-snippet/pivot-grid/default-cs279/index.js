
import Vue from "vue";
import { PivotViewPlugin, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { Group_Data } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Excel Export</ejs-button>
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowExcelExport="allowExcelExport"> </ejs-pivotview>
    </div>
`,

  data() {
    return {
      dataSourceSettings: {
        dataSource: Group_Data,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Date', type: 'date', format: "EEE, MMM d, ''yy" }],
        rows: [{ name: 'Date' }],
        columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
      },
      height: 320,
      allowExcelExport: true,
      isPrimary: true
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