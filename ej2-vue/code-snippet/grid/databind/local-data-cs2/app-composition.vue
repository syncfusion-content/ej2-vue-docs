<template>
  <div id="app">
    <div style="padding: 5px 0px 20px 0px ">
      <ejs-button id="sample"  v-on:click='changeDatasource'> Refresh Datasource </ejs-button>
    </div>
    <ejs-grid ref="grid" :dataSource='dataGrid' :height='280' >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=120 ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns} from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const dataGrid=data;
const grid=ref(null);
let newRecords =ref({});
const changeDatasource=function(){
  for (let i = 0; i < 5; i++) {
    newRecords.value = {
        OrderID: generateOrderId(),
        CustomerID: generateCustomerId(),
        ShipCity: generateShipCity(),
        Freight: generateFreight(),
        ShipName: generateShipName()
    };

    grid.value.ej2Instances.dataSource.unshift(newRecords.value);
    grid.value.setProperties({ dataSource:  grid.value.ej2Instances.dataSource});
  }
};

// Generate a random OrderID
const generateOrderId=function() {
  return Math.floor(10000 + Math.random() * 90000);
};
// Generate a random CustomerID
const generateCustomerId=function() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
// Generate a random ShipCity
const generateShipCity=function(){
  const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
  return cities[Math.floor(Math.random() * cities.length)];
};
// Generate a random Freight value
const generateFreight=function(){
  return Math.random() * 100;
};
// Generate a random ShipName
const generateShipName=function(){
  const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
  return names[Math.floor(Math.random() * names.length)];
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