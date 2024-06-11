<template>
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' :edit='numericParams'
          width=120 format='C2'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' :edit='ddParams'
          width=150></e-column>
        <e-column field='ShippedDate' headerText='Shipped Date' editType='datepickeredit' :edit='dpParams'
          width=150></e-column>
        <e-column field='Verified' headerText='Verified' editType='booleanedit' :edit='boolParams' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true } ;
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const numericParams = { params: { decimals: 2, value: 5 } };
const ddParams = { params: { value: 'Germany' } };
const dpParams = { params: { value: new Date() } };
const boolParams = { params: { checked: true } };
provide('grid', [Page, Edit, Toolbar]);
</script>
<style>@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";</style>