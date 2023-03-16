
import Vue from "vue";
import { PivotViewPlugin, EnginePopulatingEventArgs  } from "@syncfusion/ej2-vue-pivotview";
import { noData } from './noData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :enginePopulating="enginePopulating"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: noData,
        expandAll: true,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date'}],
        values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'State' }],
        filters: [],
        emptyCellsTextContent: '**'
      },
      height: 350
    }
  }
  methods: {
    enginePopulating:function(args: EnginePopulatingEventArgs ) {
       args.dataSourceSettings.columns[0].caption = 'Full Year';
       args.dataSourceSettings.emptyCellsTextContent = '##';
    }
  }

});