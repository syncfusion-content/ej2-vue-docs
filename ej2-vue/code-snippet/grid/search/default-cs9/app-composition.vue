<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :searchSettings="searchOptions" :toolbar="toolbarOptions" height='273px'
      :actionBegin='actionBegin' :actionComplete='actionComplete'>
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
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { Predicate, Query } from "@syncfusion/ej2-data";
const grid = ref(null);
let values = "";
let refresh = ref(false);
let removeQuery = false;
let valueAssign = false;
const toolbarOptions = ["Search"];
const searchOptions = {
  fields: ['OrderID',
    'CustomerID',
    'EmployeeID',
    'ShipCity',
    'ShipCountry',
    'ShipName'],
  operator: 'contains',
  key: '',
  ignoreCase: true,
};
const actionBegin = (args) => {
  if (args.requestType === "searching") {
    const keys = args.searchString.split(",");
    var flag = true;
    var predicate;
    if (keys.length > 1) {
      if (grid.value.ej2Instances.searchSettings.key !== "") {
        values = args.searchString;
        keys.forEach((key) => {
          grid.value.ej2Instances.getColumns().forEach((col) => {
            if (flag) {
              predicate = new Predicate(col.field, "contains", key, true);
              flag = false;
            } else {
              var predic = new Predicate(col.field, "contains", key, true);
              predicate = predicate.or(predic);
            }
          });
        });
        grid.value.ej2Instances.query = new Query().where(predicate);
        grid.value.ej2Instances.searchSettings.key = "";
        refresh.value = true;
        valueAssign = true;
        removeQuery = true;
        grid.value.ej2Instances.refresh();
      }
    }
  }
}
const actionComplete = (args) => {
  if (args.requestType === "refresh" && valueAssign) {
    document.getElementById(
      grid.value.ej2Instances.element.id + "_searchbar"
    ).value = values;
    valueAssign = false;
  } else if (
    document.getElementById(
      grid.value.ej2Instances.element.id + "_searchbar"
    ).value === "" &&
    args.requestType === "refresh" &&
    removeQuery
  ) {
    grid.value.ej2Instances.query = new Query();
    removeQuery = false;
    grid.value.ej2Instances.refresh();
  }
  document.getElementById(grid.value.ej2Instances.element.id + "_searchbar").addEventListener('keyup', (args) => {
    if(args.target.value === "" && (args.key === "Enter" || args.key === "Backspace" )){
      grid.value.ej2Instances.query = new Query();
      removeQuery = false;
      grid.value.ej2Instances.refresh();
    }         
  });
}
provide('grid', [Toolbar, Search]);
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