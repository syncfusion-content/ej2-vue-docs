
import Vue from "vue";
import { GridPlugin, Sort, ColumnMenu, Page, Group, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" id="gridcomp" :allowPaging='true' :allowSorting='true' :showColumnMenu='true' :filterSettings='filterSettings' :columnMenuOpen='columnMenuOpen' :allowFiltering='true' :allowGrouping='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
                <e-column field='CustomerID' headerText='Customer Name' :showInColumnChooser='false'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      filterSettings: {type: 'Menu'}
    };
  },
  methods: {
      columnMenuOpen: function (args) {
        for (let item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'OrderID') {
                item.hide = true;
            } else {
                item.hide = false;
            }
        }
    }
  },
  provide: {
      grid: [Sort, ColumnMenu, Page, Group, Filter]
  }

});