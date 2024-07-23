<template>
  <div id="app">
    <div style="padding: 20px 0px">
      <ejs-button @click="showSelectedRecords">Show Selected Records</ejs-button>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :selectionSettings="selectionOptions" :pageSettings='pageSettings'>
      <e-columns>
        <e-column type="checkbox" width="50"></e-column>
        <e-column field="OrderID" headerText="Order ID" :isPrimaryKey="true" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
      </e-columns>
    </ejs-grid>
    <ejs-dialog ref="dialogComponent" :visible="false" :header="'Selected Records'" :content="dialogContent" :close="dialogClose" showCloseIcon="true" width="400px" :position="{ X: 300, Y: 100 }">
    </ejs-dialog>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns,Page} from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const dialogComponent = ref(null);
const dialogContent = ref("");
let selectedRecords = [];
const pageSettings = { pageSize: 5 };
const selectionOptions = { type: 'Multiple', persistSelection: true };
const showSelectedRecords = () => {
  selectedRecords = grid.value.getSelectedRecords();
  if (selectedRecords.length > 0) {
    let content = "";
    selectedRecords.forEach((index) => {
      content += "<b>Order ID:</b>" + index.OrderID + "<br>";
    });
    dialogContent.value = content;
    dialogComponent.value.show();
  }
}
const dialogClose = () => {
  dialogComponent.value.hide();
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
</style>