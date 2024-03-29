
import Vue from "vue";
import { GridPlugin, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Change the search operators: </label> 
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
        width="150" :dataSource="ddlData" :fields='fields' :change="change"></ejs-dropdownlist>
      </div>
        <ejs-grid ref="grid" style="padding-top: 5px" :dataSource='data' :searchSettings='searchOptions' :toolbar='toolbarOptions' height='272px'>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=80></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=80></e-column>
              <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type="date"  width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['Search'],
      ddlData : [
        { text: 'startswith', value: 'startswith' },
        { text: 'endswith', value: 'endswith' },
        { text: 'wildcard', value: 'wildcard' },
        { text: 'like', value: 'like' },
        { text: 'equal', value: 'equal' },
        { text: 'not equal', value: 'notequal' },
      ],
      fields: { text: 'text', value: 'value' },
      searchOptions: {  operator: 'contains' }
    };
  },
  methods: {
    change: function(args) {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.searchSettings.operator = args.value;
    }
  },
  provide: {
    grid: [Toolbar, Search]
  }

});