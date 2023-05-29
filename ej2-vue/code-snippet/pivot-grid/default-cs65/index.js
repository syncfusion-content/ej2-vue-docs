
import Vue from "vue";
import { PivotViewPlugin, FieldList, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList" :showGroupingBar="showGroupingBar"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
      dataSource: pivotData,
      expandAll: false,
      allowLabelFilter: true,
      allowValueFilter: true,
      values: [{ name: 'Sold', caption: 'Units Sold' }],
      columns: [{ name: 'Year', caption: 'Production Year' }],
      rows: [{ name: 'Country' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      filters: [],
      fieldMapping: [
        { name: 'Quarter', groupName: 'Product category' },
        { name: 'Products', groupName: 'Product category' },
        { name: 'Amount', groupName: 'Product category', caption: 'Sold Amount' },
      ]
      },
      height: 350,
      showFieldList: true,
      showGroupingBar: true
    }
  },
  provide: {
        pivotview: [FieldList, GroupingBar]
    }

});