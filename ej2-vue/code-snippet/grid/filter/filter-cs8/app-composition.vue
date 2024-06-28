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
<script setup>
import { provide, ref  } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data, stringOperatorsData, numericOperatorsData } from './datasource.js';
  provide('grid',  [Filter]);

const grid = ref(null);
let fieldData= ref([]);
let availableOperators= ref([]);
let column= ref([]);
let enabled= ref(false);

const dataBound = function () {
  fieldData.value = grid.value.getColumnFieldNames();
}
const onFieldChange = function (args) {
  enabled.value= true;
  column.value = grid.value.getColumnByField(args.value);
  if(column.value){
    availableOperators.value = column.value.type === 'string' ? stringOperatorsData : numericOperatorsData;
  }
}
const onOperatorChange = function (args) {
  column.value.filter = { operator: args.value };
  grid.value.refresh();
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>