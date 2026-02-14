<template>
  <div id="app">
    <div class='message'>{{message}}</div>
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :actionBegin="actionBegin" 
    :actionComplete="actionComplete" height='273px'>
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
provide('grid',  [Filter]);

const grid = ref(null);
let message=ref(null);

const actionBegin = (args) => {
  if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
    args.cancel=true;
    message.value = args.requestType + ' is not allowed for ShipCity column';
  }
}

const actionComplete = (args) => {
  if (args.requestType == 'filtering' && args.currentFilteringColumn) {
    message.value = 'The ' + args.type + ' event has been triggered and the ' + args.requestType + ' action for the ' + args.currentFilteringColumn + ' column has been successfully executed';
  } else {
    message.value = '';
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

.message {
  padding: 10px;
  margin-top: 10px;
  display: block;
  color: red;
  text-align: center;
}
</style>