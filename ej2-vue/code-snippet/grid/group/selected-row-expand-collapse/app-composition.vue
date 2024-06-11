<template>
  <div id="app">
    <div style="display: inline-block;">
      <ejs-numerictextbox id='textbox' floatLabelType="Auto" format="##" width='250px'
        placeholder="Enter Grouped Row Index"></ejs-numerictextbox>
      <ejs-button style="margin-top:25px" ref='button' cssClass='e-outline'
        v-on:click="onExpandCollapseButtonClick">Collapse or Expand Row</ejs-button>
    </div>
    <div style="padding-top:5px">
      <p style="color:red;" id="message">{{ message }}</p>
    </div>
    <ejs-grid ref='grid' style="padding-top: 5px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions'
      height='267px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :allowGrouping='false' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' :allowGrouping='false' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' :allowGrouping='false' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent as EjsNumerictextbox } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
const grid = ref(null);
const groupOptions = { columns: ['CustomerID'] };
const message = '';
const onExpandCollapseButtonClick = function (args) {
  const groupedRowIndex = parseInt(textbox.value);
  const groupedRows = Array.from(
    grid.value.ej2Instances.getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse')
  );
  if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
    this.message = '';
    const groupCaptionElement = groupedRows[groupedRowIndex];
    grid.value.ej2Instances.groupModule.expandCollapseRows(groupCaptionElement);
  } else {
    this.message =
      'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
  }
}
provide('grid', [Group]);
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
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";</style>