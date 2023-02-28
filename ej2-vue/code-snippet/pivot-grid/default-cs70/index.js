
import Vue from "vue";
import { PivotViewPlugin, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview  id="pivotview_flist" :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList" :enginePopulated="fieldEnginePopulated"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showFieldList: true
    }
  },
  provide: {
        pivotview: [FieldList]
    },
  methods: {
    fieldEnginePopulated: function(args) {
      let pivotTableObj = document.getElementById('pivotview_flist').ej2_instances[0];
      Object.keys(pivotTableObj.engineModule.fieldList).forEach((key, index) => {
                if (key === 'Quarter') {
                    pivotTableObj.engineModule.fieldList[key].caption = 'Production Quarter Year';
                }
                else if (key === 'Year') {
                    pivotTableObj.engineModule.fieldList[key].caption = 'Production Year';
                }
      });
    }
  }

});