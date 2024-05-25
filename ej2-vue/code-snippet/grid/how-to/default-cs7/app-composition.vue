<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCountry' headerText='ShipCountry' editType='dropdownedit' :edit='countryParams'
          width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { Query } from '@syncfusion/ej2-data';
import { cascadeData } from './datasource.js';
let country = [
  { countryName: 'United States', countryId: '1' },
  { countryName: 'Australia', countryId: '2' },
  { countryName: 'India', countryId: '3' }
];
const data = cascadeData;
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const countryParams = {
  params: {
    allowFiltering: true,
    dataSource: country,
    fields: { text: "countryName", value: "countryName" },
    query: new Query(),
    actionComplete: () => false
  }
};
provide('grid', [Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>