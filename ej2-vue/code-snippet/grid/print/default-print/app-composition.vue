<template>
  <div id="app">
    <ejs-grid :dataSource='data' :toolbar='toolbarOptions' height='272px' :beforePrint="beforePrint">
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
import { provide } from "vue";
import {GridComponent as EjsGrid,ColumnsDirective as EColumns,ColumnDirective as EColumn,Toolbar} from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const toolbarOptions= ["Print"];
const beforePrint=(args)=> {
    var div = document.createElement("Div")
        div.innerHTML = "Title here"
        div.style.textAlign = 'center';
        div.style.color = 'red';
        div.style.padding = '10px 0';
        div.style.fontSize = '25px';
        args.element.insertBefore(div, args.element.childNodes[0]);
}
provide("grid", [Toolbar]);
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