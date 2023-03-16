
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        allowLabelFilter: true,
        filterSettings: [{ name: 'Country', type: 'Label', condition: 'GreaterThan', value1: 'United Kingdom' }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
      },
      height: 350
    }
  }

});