
import Vue from "vue";
import { GridPlugin,  RowDD, Selection} from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :selectionSettings="selectionOptions" :rowDropSettings="dropOptions" height='273px' :rowDrop="rowDrop" :allowSelection="true" :allowRowDragAndDrop="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' isPrimaryKey={true} textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      selectionOptions: { type: "Multiple" },
      dropOptions: { targetID: "Grid" },
    };
  },
  methods: {
    rowDrop(args) {
      args.cancel = true;
      var value = [];
      for (var r = 0; r < args.rows.length; r++) {
        value.push(args.fromIndex + r);
      }
      this.$refs.grid.reorderRows(value, args.dropIndex);
    }
  },
  provide: {
    grid: [RowDD, Selection]
  }

});