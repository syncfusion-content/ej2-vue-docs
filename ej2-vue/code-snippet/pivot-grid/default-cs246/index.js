
import Vue from "vue";
import {
  PivotViewPlugin,
  IDataSet,
  Toolbar,
} from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings"  :height="height" :showToolbar="showToolbar"  :toolbar="toolbar" :displayOption="displayOption" :chartTypes="chartTypes"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      displayOption: { view:'Both' },
      showToolbar: true,
      chartTypes:['Column', 'Bar', 'Line', 'Area']
      toolbar: ['Grid', 'Chart']
    };
  },
  provide: {
    pivotview: [
      Toolbar,
    ]
  }

});