
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
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date', showNoDataItems: true }],
        values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
        filters: [],
        emptyCellsTextContent: '**'
      },
      height: 320,
      allowPdfExport: true,
      isPrimary: true,
      gridSettings: {
        queryCellInfo: function (args) {
          const colIndex = Number(args.cell.getAttribute('aria-colindex'));
          const currentCell = args.data[colIndex - 1];
          if (currentCell.formattedText === '**' &&
            currentCell.actualText === 'Quantity' &&
            ['Canada.New Mexico', 'United States.British Columbia'].includes(currentCell.rowHeaders)) {
            args.rowSpan = 2;
            args.colSpan = 2;
          }
        },
        pdfQueryCellInfo: function (args) {
          if (args.value === '**' &&
            args.data.actualText === 'Quantity' &&
            ['Canada.New Mexico', 'United States.British Columbia'].includes(args.data.rowHeaders)) {
            args.cell.rowSpan = 2;
            args.cell.colSpan = 2;
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