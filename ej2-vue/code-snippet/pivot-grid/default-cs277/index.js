
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
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowExcelExport="allowExcelExport" :beforeExport="beforeExport"> </ejs-pivotview>
    </div>
`,

  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        enableSorting: true,
        columns: [{ name: 'Year' }],
        values: [
          { name: 'Sold', caption: 'Units Sold' },
          { name: 'Amount', caption: 'Sold Amount' },
        ],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        expandAll: false,
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
    },
    beforeExport: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      // Store the drilledMembers here(row/column headers that has been expanded).
      let member = pivotGridObj.dataSourceSettings.drilledMembers;
      // Then apply expandAll to the pivot table settings to get all the data including child members.
      pivotGridObj.setProperties(
        { dataSourceSettings: { expandAll: true, drilledMembers: [] } },
        true
      );
      pivotGridObj.engineModule.generateGridData(pivotGridObj.dataSourceSettings, true);
      // Assign that retrieved data to the exporting here.
      args.dataCollections = [pivotGridObj.engineModule.pivotValues];
      // Then set false to expandAll and the stored members to the drilledMembers  to the pivot table settings to get back to the normal state.
      pivotGridObj.setProperties(
        { dataSourceSettings: { expandAll: false, drilledMembers: member } },
        true
      );
    },
  },
  provide: {
    pivotview: [
      ExcelExport
    ]
  }
});