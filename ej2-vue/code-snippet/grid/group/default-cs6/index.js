
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
      <ejs-grid :dataSource='data' :allowGrouping='true' :actionComplete='actionComplete' :actionBegin='actionBegin' height='260px'>
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
      message: ''
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
        args.cancel = true
        this.message = args.requestType + ' action is cancelled for ' + args.columnName + ' column';
      }
    },
    actionComplete: function (args) {
      if (args.requestType === 'grouping') {
        this.message = args.requestType + ' action completed for ' + args.columnName + ' column';
      }
      else {
        this.message = ''
      }
    }
  },
  provide: {
    grid: [Group]
  }

});