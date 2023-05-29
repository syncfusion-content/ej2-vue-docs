
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
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :height="height" :showToolbar="showToolbar" :toolbar="toolbar" :toolbarRender="beforeToolbarRender" :displayOption="displayOption"> </ejs-pivotview>
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
      gridSettings: { columnWidth: 140 },
      displayOption: { view:'Both' },
      showToolbar: true,
      toolbar: [
        "Expand/Collpase",
      ]
    };
  },
  methods: {
    beforeToolbarRender: function (args: any) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      args.customToolbar.splice(12, 0, {
            prefixIcon: 'e-pivotview-expand e-icons', tooltipText: 'Expand/Collapse',
            click: this.toolbarClicked.bind(this),
        });
    },
    toolbarClicked: function (args: any) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.dataSourceSettings.expandAll = !pivotGridObj.dataSourceSettings.expandAll;
    }
  },
  provide: {
    pivotview: [
      Toolbar,
    ]
  }

});