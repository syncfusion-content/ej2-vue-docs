
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :gridSettings="gridSettings" :allowExcelExport="allowExcelExport"> </ejs-pivotview>
    </div>
`,

  data () {
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
      allowExcelExport: true,
      gridSettings: {
        columnWidth: 140,
        excelQueryCellInfo: function(args){
            //triggers for every header cell while Excel/CSV export
        }
      }
    }
  }
  methods:{
    btnClick: function(args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.excelExport();
    }
  }

});