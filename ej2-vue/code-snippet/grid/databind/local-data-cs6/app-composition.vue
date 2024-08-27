<template>
  <div id="app">
    <ejs-button class="e-control e-btn e-lib e-info" @click="addTopEvent">Add rows Data</ejs-button>
    <ejs-button style="margin-left: 20px" class="e-control e-btn e-lib e-info" @click="deleteEvent">Delete rows</ejs-button>
    <ejs-button style="margin-left: 20px" class="e-control e-btn e-lib e-info" @click="updateEvent">Update Freight Data</ejs-button>
    <div id="message">{{ message }}</div>
    <div style="padding-top: 20px">
      <ejs-grid ref="immutablegrid" :dataSource="rowData" :enableHover="false" height="350" :enableImmutableMode="true" allowPaging="true" :selectionSettings="selectionOptions"  :rowDataBound="rowDataBound" :queryCellInfo="queryCellInfo">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" width="120" textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
          <e-column field="Freight" headerText="Freight" width="120"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="120"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const immutablegrid = ref(null);
const rowData = ref(data);
const selectionOptions = { type: 'Multiple' };
const message = ref(`Initial rows rendered: ${data.length}`);

const queryCellInfo = (args) => {
  if (args.column.field === 'ShipName' && args.data.ShipName === "Gems Chevalier") {
    args.cell.style.backgroundColor = 'rgb(210, 226, 129)';
  }
};

const rowDataBound = (args) => {
  args.row.style.backgroundColor = args.data.isNewlyAdded ? '' : 'rgb(208, 255, 255)';
};

const addTopEvent = () => {
  immutablegrid.value.ej2Instances.getAllDataRows().forEach(row => {
    row.style.backgroundColor = "rgb(208, 255, 255)";
  });
  let newRowData = [];
  let addedRecords = {
    'OrderID': generateOrderId(),
    'CustomerID': generateCustomerId(),
    'ShipCity': generateShipCity(),
    'Freight': generateFreight(),
    'ShipName': generateShipName(),
    'isNewlyAdded': true
  };
  newRowData.push(addedRecords);
  rowData.value = [...newRowData, ...rowData.value];
  message.value = `${newRowData.length} rows rendered after performing the add action`;
};

const deleteEvent = () => {
  if (rowData.value.length > 0) {
    rowData.value = rowData.value.slice(1);
    message.value = `1 row deleted after performing delete action`;
  } else {
    message.value = `No rows to delete`;
  }
};

const updateEvent = () => {
  let count = 0;
  let newRowData = rowData.value.map((row) => {
    if (row.ShipName === 'Bueno Foods') {
      count++;
      return { ...row, 'ShipName': "Gems Chevalier" };
    } else {
      return row;
    }
  });
  rowData.value = newRowData;
  message.value = `${count} rows updated after performing update action`;
};

const generateOrderId = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

const generateCustomerId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const generateShipCity = () => {
  const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
  return cities[Math.floor(Math.random() * cities.length)];
};

const generateFreight = () => {
  const randomValue = Math.random() * 100;
  return parseFloat(randomValue.toFixed(2));
};

const generateShipName = () => {
  const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
  return names[Math.floor(Math.random() * names.length)];
};

provide('grid', [Page]);
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
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
#message{
        color:red;
        text-align: center;
        padding-top: 20px;
}
</style>
