<template>
  <div id="app">
    <div class='message'>{{actionBeginMessage}}</div><div class='message'>{{actionCompleteMessage}}</div>
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' 
      :actionBegin="actionBegin" :actionComplete="actionComplete" height='273px'>
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=120></e-column>
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
const filterOptions = {
    type: 'Menu'
};
let actionBeginMessage=ref(null);
let actionCompleteMessage=ref(null);

const actionBegin = (args) => {
    if (args.requestType == 'filterBeforeOpen' && args.columnType === "number") {
        args.filterModel.customFilterOperators.numberOperator = [
        { value: "equal", text: "Equal" },
        { value: "notequal", text: "Not Equal" }];
        actionBeginMessage.value ='Filter operators for number column were customized using the filterbeforeopen action in the actionBegin event';
    }
    else{
      actionBeginMessage.value = args.requestType + ' action is triggered in actionBegin event'
    }
    if(args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
      args.cancel=true;
      actionBeginMessage.value = args.requestType + ' is not allowed for ShipCity column';
    }
  }

const actionComplete = (args) => {
    if (args.requestType === 'filterAfterOpen') {
      actionCompleteMessage.value ='Applied CSS for filter dialog during filterafteropen action';
      args.filterModel.dlgDiv.querySelector('.e-dlg-content').style.background = '#eeeaea';
      args.filterModel.dlgDiv.querySelector('.e-footer-content').style.background = '#30b0ce';
    }
    if(args.requestType == 'filtering'){
      actionCompleteMessage.value = args.requestType + ' action is triggered in actionComplete event';
    }
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

.message {
  padding: 10px;
  margin-top: 10px;
  display: block;
  color: red;
  text-align: center;
}
</style>