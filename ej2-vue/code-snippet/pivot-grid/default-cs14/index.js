
import Vue from "vue";
import { PivotViewPlugin, CalculatedField, FieldList, PivotActionCompleteEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList" :allowCalculatedField="allowCalculatedField" :actionComplete="actionComplete"> </ejs-pivotview>
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
    actionComplete: function (args: PivotActionCompleteEventArgs) {
        if (args.actionName == 'Calculated field applied') {
            // Triggers when the calculated field is applied.
        }
    }
  },
  provide: {
        pivotview: [CalculatedField, FieldList]
    }

});