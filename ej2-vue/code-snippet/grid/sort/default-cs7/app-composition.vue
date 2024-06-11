<template>
    <div id="app">
       <button id="add"  @click="clickAdd">Add Columns</button>
       <button id="remove"  @click="clickRemove">Remove Columns</button>
      <br /><br />
        <ejs-grid ref="grid" :dataSource='data' :enablePersistence='true' :allowPaging='true' height='230px' id="Grid" :dataBound='dataBound'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
    const dataBound = function () {
        let cloned =  grid.value.ej2Instances.addOnPersist;
        grid.value.ej2Instances.addOnPersist = function (key) {
            key = key.filter((item)  => item !== "columns");
            return cloned.call(this, key);
        };
    }
     const clickAdd = function () {
        let obj = { field: "Freight", headerText: 'Freight', width: 120 }
        grid.value.ej2Instances.columns.push(obj); //you can add the columns by using the Grid columns method
        grid.value.ej2Instances.refreshColumns();
    }
     const clickRemove = function () {
        grid.value.ej2Instances.columns.pop();
        grid.value.ej2Instances.refreshColumns();
    }
  provide('grid',  [Page]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>