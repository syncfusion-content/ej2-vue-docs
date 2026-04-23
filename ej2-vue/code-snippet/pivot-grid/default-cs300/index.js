
import Vue from "vue";
import { PivotViewPlugin, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">PDF Export</ejs-button>
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowPdfExport="allowPdfExport" :gridSettings="gridSettings"> </ejs-pivotview>
    </div>
`,

  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }],
        rows: [{ name: 'Country' }, { name: 'Products' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 320,
      allowPdfExport: true,
      isPrimary: true,
      gridSettings: {
        pdfQueryCellInfo: function (args) {
          if (args.cell && args.cell.row && args.cell.row.pdfGrid) {
            args.cell.row.pdfGrid.repeatHeader = false;
          }
        }
      }
    }
  },
  methods: {
    btnClick: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.pdfExport();
    }
  },
  provide: {
    pivotview: [
      PDFExport
    ]
  }
});

