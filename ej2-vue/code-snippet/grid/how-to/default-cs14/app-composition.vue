<template>
  <div id="app">
    <ejs-grid :dataSource='data' :created='setHeaderHeight' height='240px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' :customAttributes='customAttributes'
          width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const customAttributes = { class: 'orientationcss' };
const setHeaderHeight = function (args) {
  let textWidth = document.querySelector(".orientationcss > div").scrollWidth;//Obtain the width of the headerText content.
  let headerCell = document.querySelectorAll(".e-headercell");
  for (let i = 0; i < headerCell.length; i++) {
    (headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

.orientationcss .e-headercelldiv {
  transform: rotate(90deg);
  padding-top: 5px;
}
</style>