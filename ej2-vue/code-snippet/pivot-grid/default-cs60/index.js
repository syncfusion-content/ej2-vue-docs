
import Vue from "vue";
import { PivotViewPlugin, VirtualScroll, ExportCompleteEventArgs, ExcelExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { ExcelExportProperties } from '@syncfusion/ej2-grids';
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">Excel Export</ejs-button>
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowExcelExport="allowExcelExport" :enableVirtualization="enableVirtualization" :exportComplete="exportComplete"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        values: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 320,
      allowExcelExport: true,
      enableVirtualization: true,
      isPrimary: true
    }
  },
  provide: {
    pivotview: [
      VirtualScroll,
      ExcelExport
    ]
  }
  methods: {
    exportComplete: function (args: ExportCompleteEventArgs) {
      args.promise.then( function(e: { blobData: Blob }) {
        console.log(e.blobData);
      });
    },
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      let excelExportProperties: ExcelExportProperties = {
        fileName: 'excelexport.xlsx'
      };
      pivotGridObj.excelExport(excelExportProperties, false, null, true);
    }
  }

});