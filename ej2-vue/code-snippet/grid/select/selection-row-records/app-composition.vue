<template>
  <div id="app">
    <div style="padding: 20px 0px">
      <ejs-button @click="onClick">Selected Records count</ejs-button>
    </div>
    <p id="message">{{ showMessage }}</p>
    <div class="control-section">
      <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :allowSelection="true" 
        :selectionSettings="selectionOptions">
        <e-columns>
          <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" width="120" 
          textAlign="Right"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column>
          <e-column type="date" field="OrderDate" headerText="Order Date" width="130" format="yMd" 
          textAlign="Right"></e-column>
          <e-column field="Freight" headerText="Freight" width="100" format="C2" 
          textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="130" format="yMd" ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

const grid = ref(null);
const showMessage = ref('');
const selectionOptions = { type: 'Multiple', persistSelection: true };

const onClick = () => {
  const selectedRecordscount = grid.value.getSelectedRecords().length;
  showMessage.value = "Selected record count: " + selectedRecordscount;
};

provide('grid', [Page]);
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

#message {
  color: red;
  text-align: center;
  padding: 0px 0px 10px 0px;
}
</style>
