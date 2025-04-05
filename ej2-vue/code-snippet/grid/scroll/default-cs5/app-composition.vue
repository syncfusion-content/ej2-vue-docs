<template>
  <div id="app">
    <div id="scroller" style="width: 100%; overflow-x: auto"></div>
    <ejs-grid ref='grid' :dataSource='data' height='315' width='500' :created="created">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=140 format='yMd' textAlign='Right'></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width=140></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
        <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

const grid = ref(null);

const created = () => {
  const scroller = document.getElementById('scroller');
  const content = grid.value.ej2Instances.getContent().firstElementChild;
  const contentTable = grid.value.ej2Instances.getContentTable();
  grid.value.ej2Instances.element.insertBefore(scroller, content.parentElement);
  
  scroller.onscroll = () => (content.scrollLeft = scroller.scrollLeft);
  content.onscroll = () => (scroller.scrollLeft = content.scrollLeft);

  const setScroller = () => {
    scroller.innerHTML = `<div style="width: ${contentTable.offsetWidth}px; height: 18px;"></div>`;
    scroller.style.height = content.scrollWidth <= content.clientWidth ? '0px' : '18px';
  };
  setScroller();
  window.onresize = setScroller;
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
