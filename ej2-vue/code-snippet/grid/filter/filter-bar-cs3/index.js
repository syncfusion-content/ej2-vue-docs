
import Vue from "vue";
import { GridPlugin, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: flex;">
        <label style="margin-right:5px">
          <b> Show filter bar status </b> 
        </label>
        <ejs-switch id="switch" :checked="true" :change="onChange"></ejs-switch>
      </div>
      <ejs-grid style='margin-top:5px' :dataSource='data' :allowFiltering='true' :filterSettings='filterSettings' 
      allowPaging='true' :pageSettings="pageSettings" height='180px' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd'></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
        </e-columns>
      </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 5 },
      filterSettings: {
        type: 'FilterBar'
      },
    };
  },
  methods: {
    onChange: function (args) {
      this.filterSettings = {
        showFilterBarStatus: args.checked,
      }
    }
  },
  provide: {
    grid: [Filter, Page]
  }

});