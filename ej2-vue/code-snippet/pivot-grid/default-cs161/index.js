
import Vue from "vue";
import { PivotViewPlugin, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { salesData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">PDF Export</ejs-button>
        <ejs-pivotview id="PivotTable1" :height="height" :dataSourceSettings="dataSourceSettings" :allowPdfExport="allowPdfExport"> </ejs-pivotview>
        <ejs-pivotview id="PivotTable2" :height="height" :dataSourceSettings="dataSourceSettings1" :allowPdfExport="allowPdfExport"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: salesData,
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Sales', caption: 'Q4 Sales' },
            { name: 'ProfitMargin', caption: 'Profit Margin' }
        ],
        formatSettings: [
            { name: 'Sales', format: 'C0' },
            { name: 'ProfitMargin', format: '0\'%\'' }
        ],
        filterSettings: [{ name: 'Product', items: ['Laptop'], type: 'Include' }]
      },
      dataSourceSettings1: {
        dataSource: salesData,
        expandAll: false,
        rows: [{ name: 'Region', caption: 'Region' }],
        columns: [{ name: 'Product', caption: 'Product' }],
        values: [
            { name: 'Units', caption: 'Units Sold' },
            { name: 'Sales', caption: 'Q4 Sales' }
        ],
        formatSettings: [
            { name: 'Sales', format: 'C0' },
        ],
        filterSettings: [{ name: 'Product', items: ['Smartphone'], type: 'Include' }]
      },
      height: 320,
      allowPdfExport: true,
      isPrimary: true
    }
  },
  provide: {
    pivotview: [PDFExport]
  },
  methods: {
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('PivotTable1').ej2_instances[0];
      const pdfExportProperties = {
          multipleExport: { type: 'AppendToPage', blankSpace: 100 },
          pivotTableIds: ['PivotTable1', 'PivotTable2']
      };
      pivotGridObj.pdfExport(pdfExportProperties, true);
    }
  }

});