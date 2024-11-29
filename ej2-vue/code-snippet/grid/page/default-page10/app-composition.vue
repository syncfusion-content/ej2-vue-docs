<template>
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0;font-weight: bold">Enter page size:</label>
      <ejs-textbox ref="textbox" width="120"></ejs-textbox>
      <ejs-button id="button" v-on:click="clickHandler">click button</ejs-button>
    </div>
    <div style="padding:20px 0 0 0">
      <ejs-grid ref="grid" id="PagingGrid" :dataSource="data" :allowPaging="true" height="325">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
          </e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div> 
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent as EjsTextbox } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
const grid = ref(null);
const textbox = ref(null);
const clickHandler=function() {
      if (textbox.value.ej2Instances.value) {
        grid.value.ej2Instances.pageSettings.pageSize = parseInt(textbox.value.ej2Instances.value,10);
      }
    }
  provide('grid',  [Page]);
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
#button
{
  margin-left: 10px;
}
</style>