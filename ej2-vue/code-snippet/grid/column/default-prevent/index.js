
import Vue from "vue";
import { GridPlugin, Group, Sort, ColumnMenu, Page, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource="data" id="gridcomp" :allowPaging="true" :allowGrouping="true" :allowSorting="true"
      :showColumnMenu="true" :groupSettings="groupOptions" :allowFiltering="true" :filterSettings="filterSettings">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="90" textAlign="Right" :showColumnMenu="false"></e-column>
          <e-column field="CustomerID" headerText="Customer Name" width="100"></e-column>
          <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="80"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="100"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

data() {
  return {
    data: data,
    groupOptions : { showGroupedColumn: true },
    filterSettings : { type: 'CheckBox' }
  };
},
provide() {
  return {
    grid: [Sort, Group, ColumnMenu, Page, Filter],
  };
}

});