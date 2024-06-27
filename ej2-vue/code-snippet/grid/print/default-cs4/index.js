
import Vue from "vue";
import { GridPlugin, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div style="display: inline-block; margin-bottom:5px">
      <label style="padding:  10px 10px 12px 0;font-weight: bold;"> Sekect print mode: </label> 
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
      width="150" :dataSource="dropDownData" :fields='fields' :change="change"></ejs-dropdownlist>
    </div>
    <ejs-grid id='grid' ref='grid' :dataSource='data' printMode='printMode' :allowPaging='true' :pageSettings='pageOptions' :toolbar='toolbarOptions'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: data,
    toolbarOptions: ["Print"],
    pageOptions: { pageSize: 6 },
    fields: { text: "text", value: "value" },
    dropDownData: ["AllPages", "CurrentPage"],
  };
},
methods: {
  change: function (args) {
    this.$refs.grid.ej2Instances.printMode = args.value;
  },
},
provide: {
  grid: [Page, Toolbar],
}

});