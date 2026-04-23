
import Vue from "vue";
import { PivotViewPlugin, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';
import { ButtonPlugin} from "@syncfusion/ej2-vue-buttons";

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">PDF Export</ejs-button>
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :gridSettings="gridSettings" :allowPdfExport="allowPdfExport"> </ejs-pivotview>
    </div>
`,

  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      allowPdfExport: true,
      isPrimary: true,
      gridSettings: {
        columnWidth: 140,
        pdfQueryCellInfo: function (args) {
          //triggers for every value cell while pdf export
        }
      }
    }
  },
  provide: {
    pivotview: [
      PDFExport
    ]
  },
  methods: {
    btnClick: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.pdfExport();
    }
  }
});