
import Vue from "vue";
import { GridPlugin, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
    <div class='message'>{{message}}</div>
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' 
      :actionBegin="actionBegin" :actionComplete="actionComplete" height='273px'>
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
      message:'',
    };
  },
  methods: {
    actionBegin: function (args) {
      if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
        args.cancel=true;
        this.message = args.requestType + ' is not allowed for ShipCity column';
      }
    },
    actionComplete: function (args) {
      if (args.requestType == 'filtering' && args.currentFilteringColumn) {
        this.message = 'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action for the ' + args.currentFilteringColumn + ' column has been successfully executed';
      } else {
        this.message = '';
      }
    }
  },
  provide: {
    grid: [Filter, Page]
  }

});