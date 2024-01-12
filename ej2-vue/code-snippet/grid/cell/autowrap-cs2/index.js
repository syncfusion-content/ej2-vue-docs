
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div style="display: flex">
          <label style="padding:  10px 10px 15px 0"> Change the grid lines: </label> 
          <ejs-dropdownlist ref='dropdown' id='dropdownlist' style="margin-top:5px" index="0"
          width="100" :dataSource="ddlData" :change="change" 
          ></ejs-dropdownlist>
        </div>
        <ejs-grid ref='grid' style="padding: 5px 5px"  :dataSource='data' height='315' gridLines='Default'>
          <e-columns>
            <e-column field='Inventor' headerText='Inventor Name' width='180' textAlign="Right"></e-column>
            <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='180' textAlign="Right"></e-column>
            <e-column field='Country' headerText='Country' width='140'></e-column>
            <e-column field='Active' width='120'></e-column>
            <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      ddlData : [
        { text: 'Default', value: 'Default' },
        { text: 'Both', value: 'Both' },
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
        { text: 'None', value: 'None' },
      ],
    };
  },
  methods: {
    change: function(args) {
      this.$refs.grid.gridLines= args.value
    }
  },
});