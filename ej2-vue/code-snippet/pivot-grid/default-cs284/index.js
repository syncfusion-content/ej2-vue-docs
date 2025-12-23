
import Vue from "vue";
import { PivotViewPlugin, VirtualScroll, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);

/* tslint:disable */
let date1;
let date2;
let isInit;
function data(count) {
  let result = [];
  let dt = 0;
  for (let i = 1; i < count + 1; i++) {
    dt++;
    let round;
    let toString = i.toString();
    if (toString.length === 1) {
      round = "0000" + i;
    } else if (toString.length === 2) {
      round = "000" + i;
    } else if (toString.length === 3) {
      round = "00" + i;
    } else if (toString.length === 4) {
      round = "0" + i;
    } else {
      round = toString;
    }
    result.push({
      ProductID: "PRO-" + round,
      Year: "FY " + (dt + 2013),
      Price: Math.round(Math.random() * 5000) + 5000,
      Sold: Math.round(Math.random() * 80) + 10
    });
    if (dt / 4 == 1) {
      dt = 0;
    }
  }
  return result;
}
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Excel Export</ejs-button>
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
          :enableVirtualization="enableVirtualization" :allowExcelExport="allowExcelExport" :exportComplete="exportComplete">
        </ejs-pivotview>
    </div>
`,

  data() {
    return {
      dataSourceSettings: {
        dataSource: data(10000),
        expandAll: false,
        rows: [{ name: 'ProductID' }],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
      },
      height: 350,
      enableVirtualization: true,
      allowExcelExport: true,
      isPrimary: true,
    }
  },
  provide: {
    pivotview: [VirtualScroll, ExcelExport]
  },
  methods: {
    exportComplete: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.hideWaitingPopup();
    },
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.showWaitingPopup();
      setTimeout(function () {
        pivotGridObj.excelExport();
      });
    }
  }
});