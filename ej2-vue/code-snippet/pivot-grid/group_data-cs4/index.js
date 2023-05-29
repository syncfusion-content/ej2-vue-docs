
import Vue from "vue";
import { PivotViewPlugin, GroupingBar, Grouping } from "@syncfusion/ej2-vue-pivotview";
import { Group_Data } from './datasource.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showGroupingBar="showGroupingBar" :allowGrouping="allowGrouping"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: Group_Data,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }],
        rows: [{ name: 'Date' }],
        columns: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        values: [{ name: 'Sold', caption: 'Unit Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        filters: [{ name: 'Products' }, { name: 'Product_ID', caption: 'Product ID' }]
      },
      height: 350,
      showGroupingBar: true,
      allowGrouping: true
    }
  },
  provide: {
        pivotview: [GroupingBar, Grouping]
    }

});