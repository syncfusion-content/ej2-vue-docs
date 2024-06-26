
import Vue from "vue";
import { GridPlugin, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin  } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(SwitchPlugin );


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div style="display: flex;">
            <label style="margin-right:5px">
            Enable or disable toolbar items
            </label>
            <ejs-switch id="switch" :change="onSwitchChange"></ejs-switch>
        </div>
        <ejs-grid id='Grid' ref='grid' style="margin-top: 10px" :dataSource='data' height='200px' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbar' :toolbarClick='clickHandler'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbar: ['Expand', 'Collapse'],
      groupOptions: { columns: ['CustomerID'] }
    };
  },
  methods: {
      clickHandler: function(args) {
        if (args.item.id === 'Grid_Collapse') { // Grid_Collapse is control id + '_' + toolbar value.
            this.$refs.grid.ej2Instances.groupModule.collapseAll();
        }

        if (args.item.id === "Grid_Expand"){
            this.$refs.grid.ej2Instances.groupModule.expandAll();
        }
    },
    onSwitchChange(args) {
        if (args.checked) {
            this.$refs.grid.ej2Instances.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false); // Disable toolbar items.
        } else {
            this.$refs.grid.ej2Instances.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true); // Enable toolbar items.
        }
    }
  },
  provide: {
      grid: [Toolbar, Group]
  }

});