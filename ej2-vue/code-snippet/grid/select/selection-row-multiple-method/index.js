import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="padding: 10px 0px 20px 0px">
        <ejs-button @click.native="selectRows([1, 3])">
        select [1, 3] </ejs-button>
        <ejs-button  @click.native="selectRows([0, 2])">
        select [0, 2]</ejs-button>
        <ejs-button @click.native="selectRows([2, 4])">
        select [2, 4] </ejs-button>
        <ejs-button  @click.native="selectRows([0,5])">
        select [0,5]</ejs-button>
        <ejs-button @click.native="selectRows([1,6])">
        select [1,6]</ejs-button>
      </div>
      <div style="padding: 10px 0px 20px 0px">
        <ejs-button @click.native="selectRows([0,7,8])">
        select [0,7,8]</ejs-button>
        <ejs-button @click.native="selectRows([1,9,10])">
        select [1,9,10]</ejs-button>
        <ejs-button @click.native="selectRows([4,7,12])">
        select [4,7,12]</ejs-button>
        <ejs-button @click.native="selectRows([2,5,6])">
        select [2,5,6]</ejs-button>
      </div>
      <div style="padding: 20px 0px 0px 0px">
        <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
            width="120"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120">
            </e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="130">
            </e-column>
            <e-column field="Freight" headerText="Freight" format="C2" width="100">
            </e-column>
          </e-columns>
        </ejs-grid>
      </div>
  </div>
`,

  data() {
    return {
      data: data,
      selectionOptions: { type: 'Multiple', mode: 'Row' },
      pageOptions: { pageSize: 5 }
    };
  },
  methods: {
    selectRows: function (rowIndexes) {
      this.$refs.grid.clearRowSelection();
      this.$refs.grid.selectRows(rowIndexes);
    }
  },
  provide: {
    grid: [Page]
  }

});