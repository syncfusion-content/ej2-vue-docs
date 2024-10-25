
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
        columns: [{ name: 'Product_ID', caption: 'Product ID' }],
        rows: [{ name: 'Date', caption: 'Date' }],
        values: [
            { name: 'Sold', caption: 'Unit Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        formatSettings: [{ name: 'Amount', format: 'C' }],
        groupSettings: [
            { name: 'Product_ID', type: 'Number', rangeInterval: 3 },
            {
                name: 'Date',
                type: 'Date',
                groupInterval: ['Years', 'Months'],
                startingAt: new Date(2015, 6, 1),
                endingAt: new Date(2017, 6, 31),
            },
        ],
        filters: [],
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