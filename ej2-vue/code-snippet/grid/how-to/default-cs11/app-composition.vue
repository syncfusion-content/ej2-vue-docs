<template>
    <div id="app">
     <ejs-button @click='addAction'>Add</ejs-button>
     <ejs-button @click='deleteAction'>Delete</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' height='280px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2'  width=80></e-column>
             <e-column field='OrderDate' headerText='Order Date' type='date' format='yMd' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
    const addAction = function() {
      let customData = { OrderID: 10247, CustomerID: "ASDFG", Freight: 40.4, OrderDate: new Date(8367642e5) };
      data.unshift(customData);
      data = [...data];
    }
    const deleteAction = function() {
      let selectedRow = $refs.grid.getSelectedRowIndexes()[0];
      if (selectedRow !== undefined) {
        data.splice(selectedRow, 1);
      }
      else {
        alert("No records selected for delete operation");
      }
      data = [...data];
    }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>