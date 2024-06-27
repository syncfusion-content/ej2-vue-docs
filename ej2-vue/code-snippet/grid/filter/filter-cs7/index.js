
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Select Column: </label>
        <ejs-dropdownlist ref='fieldDropdown' id='field' placeholder="Eg: OrderID" width="150" :dataSource="fieldData" 
          :change="onFieldChange">
        </ejs-dropdownlist>
      </div>
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Select Filter Type: </label>
        <ejs-dropdownlist ref='typeDropdown' id='type' placeholder="Eg: Excel" width="150" :dataSource="typeData"
          :change="onTypeChange" :enabled="enabled">
        </ejs-dropdownlist>
      </div>
      <ejs-grid style='margin-top:5px' ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' 
      :dataBound='dataBound' height='273px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=100></e-column>
          <e-column field='OrderDate' headerText='Order Date' format='yMd' width=100></e-column>
          <e-column field='Verified' headerText='Verified' width=100 type='boolean' displayAsCheckBox="true"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      filterOptions: {
        type: 'Menu'
      },
      fieldData: [],
      typeData: [],
      column:[],
      enabled:false,
    };
  },
  methods: {
    dataBound: function () {
      this.fieldData = this.$refs.grid.getColumnFieldNames();
    },
    onFieldChange: function (args) {
      this.enabled=true;
      this.typeData = ['Menu', 'CheckBox', 'Excel'];
      this.column = this.$refs.grid.getColumnByField(args.value);
    },
    onTypeChange: function (args) {
      var columnFilterSettings = { type: args.value };
      this.column.filter = columnFilterSettings;
      this.$refs.grid.refresh();
    }
  },
  provide: {
    grid: [Filter]
  }

});