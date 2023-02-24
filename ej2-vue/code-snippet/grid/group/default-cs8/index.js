
import Vue from "vue";
import { GridPlugin, Group, Sort } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :allowGrouping='true' :allowSorting='true' :sortSettings='sortOptions' :groupSettings='groupSettings' height='267px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
            </ejs-grid>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      sortOptions: { columns: [{ field: 'CustomerID', direction: 'Descending' }] },
      groupSettings: { columns: ['CustomerID'] }
    };
  },
  provide: {
    grid: [Group, Sort]
  }

});