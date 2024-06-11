<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='280px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' editType='numericedit' width=80></e-column>
             <e-column field='ShipCountry' headerText='Ship Country' :template='editTemplate' editType='dropdownedit'  width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, createApp } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const app = createApp();
      const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
      const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
      const editTemplate = function () {
        return {
          template: app.component('editOption', {
            template: '<a href="#">{{data.ShipCountry}}</a>',
            data() { return { data: { data: {} } }; }
          })
        }
      }
  provide('grid',  [Edit, Toolbar]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>