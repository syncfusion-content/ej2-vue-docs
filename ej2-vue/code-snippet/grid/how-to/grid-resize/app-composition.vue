<template>
  <div id="app">
    <div style="display: inline-block;">
      <label> Enter the width: </label>
      <ejs-numerictextbox ref='widthTextbox' :min="400" :max="650" :step='5' :placeholder="'400'" format="n"
        width='120px'></ejs-numerictextbox>
      <label> Enter the height </label>
      <ejs-numerictextbox ref='heightTextbox' :min="200" :max="600" :step='5' :placeholder="'200'" format="n"
        width='120px'></ejs-numerictextbox>
      <ejs-button style='margin-left:5px' ref='button' cssClass='e-outline' v-on:click="onExternalResize">Update</ejs-button>
    </div>
    <div id="parent">
      <ejs-grid ref='grid' style="margin-top:5px" :dataSource='data' height='100%'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
          <e-column field='Freight' headerText='Freight' width=80></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent as EjsNumerictextbox } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
import { ref } from "vue";
const widthTextbox = ref(null);
const heightTextbox = ref(null);
const onExternalResize = function () {
  const parentDiv = document.getElementById('parent');
  parentDiv.style.width = widthTextbox.value.$el.value + 'px';
  parentDiv.style.height = heightTextbox.value.$el.value + 'px';
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";</style>