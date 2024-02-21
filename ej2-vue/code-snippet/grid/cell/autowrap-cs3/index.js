
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
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Change the clip mode: </label> 
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
        width="150" :dataSource="ddlData" :fields='fields' :change="change" 
        ></ejs-dropdownlist>
      </div>
        <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='315' >
            <e-columns>
              <e-column field='MainFieldsofInvention' headerText='Invention' width='130'></e-column>
              <e-column field='Inventor' headerText='Inventor'  width='80'></e-column>
              <e-column field='NumberofPatentFamilies' headerText='Count'  width='100'></e-column>
              <e-column field='Country' headerText='Country' width='80'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      fields: { text: 'text', value: 'value' },
      ddlData : [
        { text: 'Ellipsis', value: 'Ellipsis' },
        { text: 'Clip', value: 'Clip' },
        { text: 'Ellipsis with Tooltip', value: 'EllipsisWithTooltip' },
      ],
    };
  },
  methods: {
    change: function(args) {
      this.$refs.grid.getColumnByField('MainFieldsofInvention').clipMode = args.value
      this.$refs.grid.refreshColumns();
    }
  },
});