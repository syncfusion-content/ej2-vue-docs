
import Vue from "vue";
import { PivotViewPlugin, CalculatedField, FieldList, PivotActionBeginEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList" :allowCalculatedField="allowCalculatedField" :actionBegin="actionBegin"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }, { name: 'Total', caption: 'Total Amount', type: 'CalculatedField' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Total', format: 'C2' }],
        filters: [],
        calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
      },
      height: 350,
      allowCalculatedField: true,
      showFieldList: true,
      isPrimary: true
    }
  },
  methods: {
    actionBegin: function (args: PivotActionBeginEventArgs) {
      if (args.actionName == 'Open calculated field dialog') {
            args.cancel = true;
      }
    }
  },
  provide: {
        pivotview: [CalculatedField, FieldList]
    }

});