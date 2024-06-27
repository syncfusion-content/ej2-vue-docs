
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
            <e-columns>
              <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=140></e-column>
              <e-column field='Name' headerText='Name' width=140></e-column>
              <e-column field='ShipName' headerText='Ship Name' width=170></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      filterOptions: {
        ignoreAccent: true
      }
    };
  },
  provide: {
    grid: [Filter]
  }

});