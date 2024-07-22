import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
          <div style="padding: 10px 0px 20px 0px">
            <ejs-button class="btn" @click.native="selectColumns([1, 2])">
            select [1, 2] </ejs-button>
            <ejs-button class="btn" @click.native="selectColumns([0, 2])">
            select [0, 2]</ejs-button>
            <ejs-button class="btn" @click.native="selectColumns([1, 3])">
            select [1, 3] </ejs-button>
            <ejs-button class="btn" @click.native="selectColumns([0,5])">
            select [0,5]</ejs-button>
            <ejs-button class="btn" @click.native="selectColumns([1,6])">
            select [1,6]</ejs-button>
          </div>
          <div style="padding: 10px 0px 20px 0px">
            <ejs-button class="btn" @click.native="selectColumns([0,2,5])">
            select [0,2,5]</ejs-button>
            <ejs-button class="btn" @click.native="selectColumns([1,3,6])">
            select [1,3,6]</ejs-button>
            <ejs-button class="btn" @click.native="selectColumns([2,4,6])">
            select [2,4,6]</ejs-button>
            <ejs-button class="btn" @click.native="selectColumns([0,3,5])">
            select [0,3,5]</ejs-button>
          </div>
          <div style="padding: 20px 0px 0px 0px">
            <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
              <e-columns>
                <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
                </e-column>
                <e-column field="CustomerID" headerText="Customer ID" width="120">
                </e-column>
                <e-column field="ShipCountry" headerText="Ship Country" width="130">
                </e-column>
                <e-column field="Freight" headerText="Freight" format="C2" width="100">
                </e-column>
                <e-column field="OrderDate" headerText="Order Date" format="C2" width="100">
                </e-column>
                <e-column field="ShipCity" headerText="Ship City" format="C2" width="100">
                </e-column>
                <e-column field="ShipName" headerText="Ship Name" format="C2" width="100">
                </e-column>
              </e-columns>
            </ejs-grid>
          </div>
    </div>
`,

  data() {
    return {
      data: data,
      selectionOptions: { allowColumnSelection: true, type: 'Multiple' },
    };
  },
  methods: {
    selectColumns: function (columns) {
      this.$refs.grid.ej2Instances.selectionModule.clearColumnSelection();
      this.$refs.grid.ej2Instances.selectionModule.selectColumns(columns);
    },
  }

});