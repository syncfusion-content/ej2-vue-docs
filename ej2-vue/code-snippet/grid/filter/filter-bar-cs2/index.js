
import Vue from "vue";
import { GridPlugin, Filter, Page } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0">Select Filter Mode: </label>
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' width="150" :dataSource="filterModesData" 
        :change="onModeChange"></ejs-dropdownlist>
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
      filterModesData:['Immediate', 'OnEnter'],
    };
  },
  methods: {
    onModeChange: function (args) {
      this.filterSettings = {
        mode: args.value,
      }
    }
  },
  provide: {
    grid: [Filter, Page]
  }

});