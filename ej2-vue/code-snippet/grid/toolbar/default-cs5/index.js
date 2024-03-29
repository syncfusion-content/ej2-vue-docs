
import Vue from "vue";
import { GridPlugin, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' height='200px' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbar' :toolbarClick='clickHandler'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
                <e-column field='FirstName' headerText='First Name' width=100></e-column>
                <e-column field='Country' headerText='Country' width=100></e-column>
                <e-column field='PostalCode' headerText='Postal Code' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: employeeData,
      toolbar: [
        { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
        { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse-2', id: 'collapseall' , align:'Right'},
        { text: 'Search', align: 'Center'}
      ],
      groupOptions: { columns: ['FirstName'] }
    };
  },
  methods: {
      clickHandler: function(args) {
        if (args.item.id === 'expandall') {
            this.$refs.grid.ej2Instances.groupModule.expandAll();
        }

        if (args.item.id === "collapseall"){
            this.$refs.grid.ej2Instances.groupModule.collapseAll();
        }
    }
  },
  provide: {
      grid: [Toolbar, Group]
  }

});