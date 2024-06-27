
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
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      filterOptions: {
        type: 'Excel',
        columns: [
          {
            field: 'CustomerID',
            matchCase: false,
            operator: 'startswith',
            predicate: 'or',
            value: 'VINET',
          },
          {
            field: 'CustomerID',
            matchCase: false,
            operator: 'startswith',
            predicate: 'or',
            value: 'HANAR',
          },
          {
            field: 'OrderID',
            matchCase: false,
            operator: 'lessThan',
            predicate: 'or',
            value: 10250,
          },
          {
            field: 'OrderID',
            matchCase: false,
            operator: 'notEqual',
            predicate: 'or',
            value: 10262,
          },
        ]
      }
    };
  },
  provide: {
    grid: [Filter]
  }

});