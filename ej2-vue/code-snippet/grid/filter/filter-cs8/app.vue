<template>
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Select Column: </label>
        <ejs-dropdownlist ref='fieldDropdown' id='field' placeholder="Eg: OrderID" width="150" 
        :dataSource="fieldData" :change="onFieldChange">
        </ejs-dropdownlist>
      </div>
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Select Operator: </label>
        <ejs-dropdownlist ref='typeDropdown' id='type' placeholder="Eg: Excel" width="150" 
        :dataSource="availableOperators" :change="onOperatorChange" :enabled="enabled">
        </ejs-dropdownlist>
      </div>
      <ejs-grid style='margin-top:5px' ref='grid' :dataSource='data' :allowFiltering='true' 
      :dataBound='dataBound' height='273px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=100></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=120></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent  } from "@syncfusion/ej2-vue-dropdowns";
import { data, stringOperatorsData, numericOperatorsData } from './datasource.js';
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
      fieldData: [],
      availableOperators: [],
      column: [],
      enabled: false,
    };
  },
  methods: {
    dataBound: function () {
      this.fieldData = this.$refs.grid.getColumnFieldNames();
    },
    onFieldChange: function (args) {
      this.enabled = true;
      this.column = this.$refs.grid.getColumnByField(args.value);
      if (this.column) {
        this.availableOperators = this.column.type === 'string' ? stringOperatorsData : numericOperatorsData;
      }
    },
    onOperatorChange: function (args) {
      this.column.filter = { operator: args.value };
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