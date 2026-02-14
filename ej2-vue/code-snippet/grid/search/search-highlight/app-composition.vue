<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :toolbar='toolbarOptions' :actionBegin="actionBegin"
      :queryCellInfo="queryCellInfo" height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
const toolbarOptions = ['Search'];
let key = '';
const actionBegin = function (args) {
  if (args.requestType === 'searching') {
  key = args.searchString.toLowerCase();
}
    }
const queryCellInfo = function (args) {
  if (key !== '') {
    var cellContent = (args.data)[(args.column).field];
    var parsedContent = cellContent.toString().toLowerCase();
    if (parsedContent.includes((key).toLowerCase())) {
      var i = 0;
      var searchStr = '';
      while (i < (key).length) {
        var index = parsedContent.indexOf((key)[i]);
        searchStr = searchStr + cellContent.toString()[index];
        i++;
      }
      (args.cell).innerHTML = (args.cell).innerText.replaceAll(
        searchStr,
        "<span class='customcss'>" + searchStr + '</span>'
      );
    }
  }
}
provide('grid', [Toolbar, Search]);
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

.customcss {
  background-color: yellow;
}
</style>