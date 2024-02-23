
import Vue from "vue";
import { GridPlugin, RowDD, Selection, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref="grid" :dataSource="data" :allowRowDragAndDrop="true" :selectionSettings="selectOptions" :rowDropSettings="rowDropOptions"
        id="Grid" :rowDrop="rowDrop">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer Name" width="130"></e-column>
          <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd" textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: employeeData,
      selectOptions: { type: 'Multiple' },
      rowDropOptions: { targetID: 'Grid' }

    };
  },
  methods: {
    rowDrop: function (args) {
      args.cancel = true;
      var value = [];
      for (var r = 0; r < (args.rows).length; r++) {
        value.push((args.fromIndex) + r);
      }
      this.$refs.grid.reorderRows(value, args.dropIndex);
    }
  },
  provide: {
    grid: [RowDD, Page, Selection]
  }

});