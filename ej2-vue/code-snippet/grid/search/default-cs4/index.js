
import Vue from "vue";
import { GridPlugin, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :searchSettings='searchOptions' :toolbar='toolbarOptions' height='272px'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=80></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=80></e-column>
              <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type="date"  width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['Search'],
      searchOptions: { fields: ['CustomerID'], operator: 'contains', key: 'Ha', ignoreCase: true, ignoreAccent:true }
    };
  },
  provide: {
    grid: [Toolbar, Search]
  }

});