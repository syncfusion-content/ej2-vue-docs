
import Vue from "vue";
import { GridPlugin, Sort } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
    <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
        <ejs-grid :dataSource='data' :actionComplete='actionComplete' :actionBegin='actionBegin' :allowSorting='true' height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      message:''
    };
  },
  methods: {
    actionBegin(args) {
      if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
        args.cancel = true;
      }
    },
    actionComplete(args) {
      this.message = args.requestType + ' action completed for ' + args.columnName + ' column';
    }
  },
  provide: {
    grid: [Sort]
  }

});