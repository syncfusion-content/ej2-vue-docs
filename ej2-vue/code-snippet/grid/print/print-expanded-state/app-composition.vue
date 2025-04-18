<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="parentData" :childGrid="childGrid" :allowPaging="true" :pageSettings="pageSettings" :hierarchyPrintMode="hierarchyPrintMode" :toolbar="toolbar" :actionBegin="actionBegin" :load="load" >
      <e-columns>
        <e-column field="EmployeeID" headerText="Employee ID" width="100" textAlign="Right" />
        <e-column field="FirstName" headerText="First Name" width="120" />
        <e-column field="Title" headerText="Title" width="150" />
        <e-column field="City" headerText="City" width="100" />
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { ref, provide } from "vue";
import {GridComponent as EjsGrid,ColumnsDirective as EColumns,ColumnDirective as EColumn,Toolbar, Page, DetailRow, getPrintGridModel} from "@syncfusion/ej2-vue-grids";
import { extend } from '@syncfusion/ej2-base';
import { data, employeeData, customerData } from "./datasource.js";
const grid = ref(null);
const parentData = employeeData;
const toolbar = ['Print']
const hierarchyPrintMode = ref("Expanded");
const pageSettings = { pageSize: 4 };
const persistedExpandedRows= ref({});
const secondChildGrid = {
  dataSource: customerData,
  queryString: 'CustomerID',
  columns: [
    { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
    { field: 'Address', headerText: 'Address', width: 120 },
    { field: 'Country', headerText: 'Country', width: 100 },
  ],
};
const childGrid = {
  dataSource: data,
  queryString: "EmployeeID",
  columns: [
    { field: "OrderID", headerText: "Order ID", textAlign: "Right", width: 120 },
    { field: "CustomerID", headerText: "Customer ID", width: 150 },
    { field: "ShipCity", headerText: "Ship City", width: 150 },
    { field: "ShipName", headerText: "Ship Name", width: 150 },
  ],
  childGrid: secondChildGrid,
};
const actionBegin= (args)=> {
  if (args.requestType === 'paging') {
    const page = args.previousPage;
    const current = getExpandedState(
      grid.value.ej2Instances,
      'Expanded',
      page
    );
    persistedExpandedRows.value = {
      ...persistedExpandedRows.value,
      ...current,
    };
  }
};
const load= ()=> {
  if (grid.value && grid.value.ej2Instances) {
    grid.value.ej2Instances.on('printGrid-Init', printInit);
  }
};
const printInit= (args)=> {
  const printGridInstance = args.printgrid;
  printGridInstance.expandedRows = extend(
    {},
    persistedExpandedRows.value,
    printGridInstance.expandedRows
  );
};
const getExpandedState= (gridInstance, mode, currentPage)=> {
  const expandedRowState = {};
  const gridRows = gridInstance.getRowsObject();
  for (let i = 0; i < gridRows.length; i++) {
    const gridRow = gridRows[i];
    if (gridRow.isExpand && !gridRow.isDetailRow) {
      const expandedIndex = gridInstance.allowPaging
      ? gridRow.index +
      currentPage * gridInstance.pageSettings.pageSize -
      gridInstance.pageSettings.pageSize
      : gridRow.index;
      expandedRowState[expandedIndex] = {
        isExpand: true,
        gridModel: getPrintGridModel(gridRow.childGrid, mode),
      };
    }
  }
  return expandedRowState;
};
provide("grid", [Page, Toolbar, DetailRow]);
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