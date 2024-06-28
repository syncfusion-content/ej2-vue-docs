
import Vue from "vue";
import { GridPlugin, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :allowPaging='true' :pageSettings='pageSettings'
    :allowFiltering="true" :filterSettings="filterOptions" :actionBegin='actionBegin' height="200px">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ProductName' headerText='Product Name' width=110></e-column>
        <e-column field='Quantity' headerText='Quantity' width=110></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 6 },
      filterOptions: { type: "Excel" },
    };
  },
  methods:{
    actionBegin: function(args){
      if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
      }
    }
  },
  provide: {
    grid: [Filter, Page],
  },

});