
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMMM' :enableGroupByFormat='true' width=100 type='date'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' :enableGroupByFormat='true' width=80></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      groupOptions: { columns: ['OrderDate', 'Freight'] }
    };
  },
  provide: {
    grid: [Group]
  }

});