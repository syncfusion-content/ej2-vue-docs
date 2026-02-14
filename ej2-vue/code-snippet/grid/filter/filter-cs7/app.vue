<template>
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Select Column: </label>
        <ejs-dropdownlist ref='fieldDropdown' id='field' placeholder="Eg: OrderID" width="150" :dataSource="fieldData" 
          :change="onFieldChange">
        </ejs-dropdownlist>
      </div>
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0; margin-left:5px"> Select Filter Type: </label>
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
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
export default {
name: "App",
components: {  
"ejs-dropdownlist":DropDownListComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
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
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>