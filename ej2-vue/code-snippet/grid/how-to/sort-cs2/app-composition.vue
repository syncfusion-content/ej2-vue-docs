<template>
    <div id="app">
     <ejs-button @click='SingleClearSort'>Clear the sort for <b>OrderID</b> column</ejs-button>
     <ejs-button @click='MultiClearSort'>Clear sorting for entire sorted columns</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' :allowSorting='true' :sortSettings='sortOptions' height='280px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2'  width=80></e-column>
                <e-column field='OrderDate' headerText='Order Date' type='date' format='yMd' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Sort } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const grid = ref(null);
      const sortOptions = { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'ShipCity', direction: 'Descending' }] };
  provide('grid',  [Sort]);
    const SingleClearSort = function() {
      let column = grid.value.ej2Instances.sortModule.sortSettings.columns;
      for(let i=0;i < column.length;i++){
          if(column[i].field === "OrderID") {
              column.splice(i,1);
              grid.value.refresh();
          }
      }
    }
    const MultiClearSort = function() {
      grid.value.clearSorting();
    }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>