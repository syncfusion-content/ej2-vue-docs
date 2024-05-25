<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging="true" :pageSettings='pageSettings' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :printComplete='printComplete' height='272px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const pageSettings = { pageSizes: true, pageSize: 6 };
      const toolbarOptions = ['Print'];
      const toolbarClick = function() {
          for (var i = 0; i < grid.value.getColumns().length; i++) {
            if (grid.value.getColumns()[i].field == "CustomerID") {
                grid.value.getColumns()[i].visible = true;
            }
            else if (grid.value.getColumns()[i].field == "ShipCity") {
                    grid.value.getColumns()[i].visible = false;
            }
        }
      }
      const printComplete = function() {
          for (var i = 0; i < grid.value.getColumns().length; i++) {
            if (grid.value.getColumns()[i].field == "CustomerID") {
                grid.value.getColumns()[i].visible = false;
            }
            else if (grid.value.getColumns()[i].field == "ShipCity") {
                    grid.value.getColumns()[i].visible = true;
            }
        }
      }
  provide('grid',  [Toolbar, Page]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>