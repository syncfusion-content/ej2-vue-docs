
import Vue from "vue";
import { GridPlugin, Resize } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div style="display: flex">
          <label style="padding:  10px 10px 15px 0"> Change the resize mode: </label> 
          <ejs-dropdownlist ref='dropdown' id='dropdownlist' style="margin-top:3px" index="0"
          width="100" :dataSource="ddlData" :change="change"></ejs-dropdownlist>
        </div>
        <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='315' :allowResizing='true'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='Freight' headerText='Freight' width=80></e-column>
          </e-columns>
      </ejs-grid>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      ddlData : [
        { text: 'Normal', value: 'Normal' },
        { text: 'Auto', value: 'Auto' },
      ],
    };
  },
  methods: {
    change: function(args) {
      this.$refs.grid.resizeSettings = {mode: args.value}
    }
  },
  provide: {
    grid: [Resize]
}
});