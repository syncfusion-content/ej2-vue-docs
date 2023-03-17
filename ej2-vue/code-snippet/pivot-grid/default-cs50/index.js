
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
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
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowExcelExport="allowExcelExport"> </ejs-pivotview>
        <ejs-pivotview id="pivotview2" :height="height" :dataSourceSettings="dataSourceSettings" :allowExcelExport="allowExcelExport"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 320,
      allowExcelExport: true,
      isPrimary: true
    }
  },
  methods: {
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      let pivotGridObj2 = document.getElementById('pivotview2').ej2_instances[0];
      let excelExportProperties: ExcelExportProperties = {
          multipleExport: { type: 'NewSheet' }
      };
      let firstGridExport: Promise<any> = pivotGridObj.grid.excelExport(excelExportProperties, true);
      firstGridExport.then((fData: any) => {
          pivotGridObj2.excelExport(excelExportProperties, false, fData);
      });
    }
  }

});