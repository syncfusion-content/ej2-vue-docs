
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref="grid" :dataSource="data" allowPaging='true' :selectionSettings='selectionOptions'
          :rowDataBound='rowDataBound' :dataBound='dataBound' height='273px'>
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
              <e-column field='EmployeeID' headerText='Employee ID' textAlign= 'Right' width=120></e-column>
              <e-column field='ShipCity' headerText='Ship City'  width=120></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
          </e-columns>
      </ejs-grid>
   </div>
`,

data() {
    return {
      data: data,
      selectionOptions: { type: "Multiple", mode: "Row" },
      pageOptions: { pageSize: 5 },
      selIndex: [],
    };
  },
  methods: {
    rowDataBound: function (args) {
      if (args.data.CustomerID > 3) {
        this.selIndex.push(
          parseInt(args.row.getAttribute("data-rowindex"), 10)
        );
      }
    },
    dataBound: function () {
      if (this.selIndex.length) {
        this.$refs.grid.ej2Instances.selectRows(this.selIndex);
        this.selIndex = [];
      }
    },
  },

  provide:{
    grid:[Page]
  }

});