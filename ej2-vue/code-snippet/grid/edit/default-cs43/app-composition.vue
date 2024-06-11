<template>
  <div id="app">
    <ejs-grid id="Grid" v-on:click="click" ref="grid" :dataSource='data' :editSettings='editSettings'
      :toolbar='toolbar' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120
          format='C2'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
const editSettings = { allowEditing: true, mode: 'Batch' };
const toolbar = ['Edit', 'Update', 'Cancel'];
const click = (event) => {
  if ((event.target).classList.contains("e-rowcell")) {
    let index = parseInt((event.target).getAttribute("Index"));
    let colindex = parseInt((event.target).getAttribute("aria-colindex"));
    let field = grid.value.ej2Instances.getColumns()[colindex].field;
    grid.value.ej2Instances.editModule.editCell(index, field);
  }
}
provide('grid', [Page, Edit, Toolbar]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";</style>