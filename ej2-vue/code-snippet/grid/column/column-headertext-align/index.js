import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Align the text of header text : </label> 
        <ejs-dropdownlist  index="0" width="150" :dataSource="alignmentData"  :change="changeAlignment"></ejs-dropdownlist>
      </div>
      <ejs-grid ref="grid" style="padding-top: 20px" :dataSource="data" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="120">
          </e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="140">
          </e-column>
          <e-column field="Freight" headerText="Freight" format="C" width="120">
          </e-column>
          <e-column field="OrderDate" type="date" headerText="Order Date" format="yMd" width="140">
          </e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,
  data() {
    return {
      data: data,
      alignmentData: [
        { text: "Left", value: "Left" },
        { text: "Right", value: "Right" },
        { text: "Center", value: "Center" },
        { text: "Justify", value: "Justify" },
      ],
    };
  },
  methods: {
    changeAlignment: function (args) {
      this.$refs.grid.$el.ej2_instances[0].columnModel.forEach((col) => {
        col.headerTextAlign = args.value;
      });
      this.$refs.grid.refreshHeader();
    },
  },
});