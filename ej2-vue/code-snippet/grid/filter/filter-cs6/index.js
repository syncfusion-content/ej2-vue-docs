
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
          <b> Enable Case Sensitivity </b> 
        </label>
        <ejs-switch id="switch" :change="onToggleCaseSensitive"></ejs-switch>
      </div>
      <ejs-grid style='margin-top:5px' :dataSource='data' :allowFiltering='true' :filterSettings='filterSettings' 
      allowPaging='true' :pageSettings="pageSettings" height='180px' >
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCountry' headerText='ShipCountry' textAlign='Right' width=90></e-column>
          <e-column field='ShipCity' headerText='Ship City' textAlign='Right' width=120></e-column>
          <e-column field='ShipRegion' headerText='Ship Region' textAlign='Right' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 5 },
      filterSettings: {
        enableCaseSensitivity: false
      },
    };
  },
  methods: {
    onToggleCaseSensitive: function (args) {
      this.filterSettings = {
        enableCaseSensitivity: args.checked,
      }
    }
  },
  provide: {
    grid: [Filter, Page]
  }

});