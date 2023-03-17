
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

var initial = true;

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :dataBound='dataBound' height='267px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      groupOptions: { columns: ['ShipCity'] }
    };
  },
  methods: {
    dataBound: function() {
        if(initial === true) {
            this.$refs.grid.ej2Instances.groupModule.collapseAll();
            initial = false;
        }
    }
  },
  provide: {
    grid: [Group]
  }

});