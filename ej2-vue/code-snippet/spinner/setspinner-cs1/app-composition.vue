<template>
  <div id="app">
    <ejs-grid ref='elementRef1' id='grid1' :dataSource="data" :created='onGridCreated'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      </e-columns>
    </ejs-grid>
    <br />
    <br />
    <ejs-grid ref='elementRef2' id='grid2' :dataSource="data">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-grids";
import { setSpinner } from '@syncfusion/ej2-vue-popups';
import { orderDetails } from './datasource.js';

const data = orderDetails.slice(0, 7);

const onGridCreated = () => {
  setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>' });
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

.e-spinner-pane.e-spin-hide {
  display: block;
}

@keyframes custom-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@-webkit-keyframes custom-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.custom-rolling {
  position: relative;
}

.custom-rolling div,
.custom-rolling div:after {
  border: 16px solid #51CACC;
  border-radius: 50%;
  border-top-color: transparent;
  height: 160px;
  position: absolute;
  width: 160px;
}

.custom-rolling div {
  -webkit-animation: custom-rolling 1.3s linear infinite;
  animation: custom-rolling 1.3s linear infinite;
  top: 100px;
  left: 100px;
}

.custom-rolling div:after {
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.custom-rolling {
  -webkit-transform: translate(-31px, -31px) scale(0.31) translate(31px, 31px);
  height: 62px !important;
  transform: translate(-31px, -31px) scale(0.31) translate(31px, 31px);
  width: 62px !important;
}
</style>