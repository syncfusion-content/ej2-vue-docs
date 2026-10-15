import Vue from "vue";
import { PivotViewPlugin, GroupingBar, FieldList, CalculatedField } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-pivotview id="PivotView" :height="height" :dataSourceSettings="dataSourceSettings"
        :showGroupingBar="true" :showFieldList="true" :allowCalculatedField="true">
      </ejs-pivotview>
    </div>
  `,
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        rows: [{ name: 'Country' }, { name: 'Products' }],
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
      },
      height: 350
    };
  },
  provide: {
    pivotview: [GroupingBar, FieldList, CalculatedField]
  }
});
