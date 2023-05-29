
import Vue from "vue";
import { PivotViewPlugin, PivotActionCompleteEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :editSettings="editSettings" :actionComplete="actionComplete"> </ejs-pivotview>
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
      editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog' }
    }
  },
  methods: {
    actionComplete: function (args: PivotActionCompleteEventArgs) {
      if (args.actionName == 'New record added' || args.actionName == 'Edited records saved') {
            // Triggers when the editing UI actions such as add and edit are completed.
        }
    }
  }

});